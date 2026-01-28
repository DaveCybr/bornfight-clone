import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Yearbook } from "@/hooks/useYearbooks";
import {
  uploadThumbnail,
  deleteThumbnail,
  validateImageFile,
} from "@/lib/uploadImage";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Upload, X, Loader2 } from "lucide-react";

const yearbookSchema = z.object({
  school_name: z.string().min(1, "Nama sekolah wajib diisi").max(200),
  year: z.number().min(2000, "Tahun tidak valid").max(2100),
  thumbnail_url: z.string().min(1, "Thumbnail wajib diupload").max(500),
  ebook_url: z.string().max(500).default("#"),
  location: z.string().max(200).optional(),
});

interface YearbookFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  yearbook?: Yearbook | null;
  onSubmit: (
    data: Omit<Yearbook, "id" | "created_at" | "updated_at">,
  ) => Promise<void>;
}

export function YearbookFormDialog({
  open,
  onOpenChange,
  yearbook,
  onSubmit,
}: YearbookFormDialogProps) {
  const [formData, setFormData] = useState({
    school_name: "",
    year: new Date().getFullYear(),
    thumbnail_url: "",
    ebook_url: "#",
    location: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [oldThumbnailUrl, setOldThumbnailUrl] = useState<string | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    if (yearbook) {
      setFormData({
        school_name: yearbook.school_name,
        year: yearbook.year,
        thumbnail_url: yearbook.thumbnail_url,
        ebook_url: yearbook.ebook_url,
        location: yearbook.location || "",
      });
      setPreviewUrl(yearbook.thumbnail_url);
      setOldThumbnailUrl(yearbook.thumbnail_url);
    } else {
      setFormData({
        school_name: "",
        year: new Date().getFullYear(),
        thumbnail_url: "",
        ebook_url: "#",
        location: "",
      });
      setPreviewUrl(null);
      setOldThumbnailUrl(null);
    }
    setErrors({});
  }, [yearbook, open]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    const validation = validateImageFile(file);
    if (!validation.valid) {
      toast({
        title: "Error",
        description: validation.error,
        variant: "destructive",
      });
      return;
    }

    try {
      setUploading(true);

      // Upload new image
      const url = await uploadThumbnail(file);

      setFormData((prev) => ({ ...prev, thumbnail_url: url }));
      setPreviewUrl(url);

      toast({
        title: "Berhasil",
        description: "Gambar berhasil diupload",
      });
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Gagal",
        description: "Gagal upload gambar",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = async () => {
    if (
      formData.thumbnail_url &&
      formData.thumbnail_url.includes("yearbook-thumbnails")
    ) {
      try {
        await deleteThumbnail(formData.thumbnail_url);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
    setFormData((prev) => ({ ...prev, thumbnail_url: "" }));
    setPreviewUrl(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validated = yearbookSchema.parse({
        ...formData,
        year: Number(formData.year),
      });
      setErrors({});
      setLoading(true);

      await onSubmit({
        school_name: validated.school_name,
        year: validated.year,
        thumbnail_url: validated.thumbnail_url,
        ebook_url: validated.ebook_url || "#",
        location: validated.location || null,
      });

      // Delete old thumbnail if changed
      if (
        oldThumbnailUrl &&
        oldThumbnailUrl !== formData.thumbnail_url &&
        oldThumbnailUrl.includes("yearbook-thumbnails")
      ) {
        await deleteThumbnail(oldThumbnailUrl);
      }

      onOpenChange(false);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((e) => {
          fieldErrors[e.path[0] as string] = e.message;
        });
        setErrors(fieldErrors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {yearbook ? "Edit Yearbook" : "Tambah Yearbook Baru"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Thumbnail Upload */}
          <div className="space-y-2">
            <Label>Thumbnail *</Label>

            {previewUrl ? (
              <div className="relative">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg border"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={handleRemoveImage}
                  disabled={uploading}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="thumbnail-upload"
                  disabled={uploading}
                />
                <label htmlFor="thumbnail-upload" className="cursor-pointer">
                  {uploading ? (
                    <Loader2 className="w-12 h-12 mx-auto mb-3 animate-spin text-accent" />
                  ) : (
                    <Upload className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                  )}
                  <p className="text-sm text-muted-foreground">
                    {uploading
                      ? "Uploading..."
                      : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PNG, JPG, WEBP up to 5MB
                  </p>
                </label>
              </div>
            )}

            {errors.thumbnail_url && (
              <p className="text-sm text-destructive">{errors.thumbnail_url}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="school_name">Nama Sekolah *</Label>
            <Input
              id="school_name"
              value={formData.school_name}
              onChange={(e) =>
                setFormData({ ...formData, school_name: e.target.value })
              }
              placeholder="SMAN 1 Jember"
            />
            {errors.school_name && (
              <p className="text-sm text-destructive">{errors.school_name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Tahun *</Label>
            <Input
              id="year"
              type="number"
              value={formData.year}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  year: parseInt(e.target.value) || 2024,
                })
              }
              min={2000}
              max={2100}
            />
            {errors.year && (
              <p className="text-sm text-destructive">{errors.year}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ebook_url">URL Ebook</Label>
            <Input
              id="ebook_url"
              value={formData.ebook_url}
              onChange={(e) =>
                setFormData({ ...formData, ebook_url: e.target.value })
              }
              placeholder="https://flipbook.example.com/..."
            />
            {errors.ebook_url && (
              <p className="text-sm text-destructive">{errors.ebook_url}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Lokasi</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="Jember, Jawa Timur"
            />
            {errors.location && (
              <p className="text-sm text-destructive">{errors.location}</p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Batal
            </Button>
            <Button type="submit" disabled={loading || uploading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Menyimpan...
                </>
              ) : yearbook ? (
                "Update"
              ) : (
                "Tambah"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
