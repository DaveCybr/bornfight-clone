import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Yearbook } from '@/hooks/useYearbooks';
import { z } from 'zod';

const yearbookSchema = z.object({
  school_name: z.string().min(1, 'Nama sekolah wajib diisi').max(200),
  year: z.number().min(2000, 'Tahun tidak valid').max(2100),
  thumbnail_url: z.string().min(1, 'URL thumbnail wajib diisi').max(500),
  ebook_url: z.string().max(500).default('#'),
  location: z.string().max(200).optional()
});

interface YearbookFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  yearbook?: Yearbook | null;
  onSubmit: (data: Omit<Yearbook, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
}

export function YearbookFormDialog({ open, onOpenChange, yearbook, onSubmit }: YearbookFormDialogProps) {
  const [formData, setFormData] = useState({
    school_name: '',
    year: new Date().getFullYear(),
    thumbnail_url: '',
    ebook_url: '#',
    location: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (yearbook) {
      setFormData({
        school_name: yearbook.school_name,
        year: yearbook.year,
        thumbnail_url: yearbook.thumbnail_url,
        ebook_url: yearbook.ebook_url,
        location: yearbook.location || ''
      });
    } else {
      setFormData({
        school_name: '',
        year: new Date().getFullYear(),
        thumbnail_url: '',
        ebook_url: '#',
        location: ''
      });
    }
    setErrors({});
  }, [yearbook, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = yearbookSchema.parse({
        ...formData,
        year: Number(formData.year)
      });
      setErrors({});
      setLoading(true);
      
      await onSubmit({
        school_name: validated.school_name,
        year: validated.year,
        thumbnail_url: validated.thumbnail_url,
        ebook_url: validated.ebook_url || '#',
        location: validated.location || null
      });
      
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {yearbook ? 'Edit Yearbook' : 'Tambah Yearbook Baru'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="school_name">Nama Sekolah *</Label>
            <Input
              id="school_name"
              value={formData.school_name}
              onChange={(e) => setFormData({ ...formData, school_name: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) || 2024 })}
              min={2000}
              max={2100}
            />
            {errors.year && (
              <p className="text-sm text-destructive">{errors.year}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="thumbnail_url">URL Thumbnail *</Label>
            <Input
              id="thumbnail_url"
              value={formData.thumbnail_url}
              onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
              placeholder="/assets/ebooks/cover.jpg"
            />
            {errors.thumbnail_url && (
              <p className="text-sm text-destructive">{errors.thumbnail_url}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ebook_url">URL Ebook</Label>
            <Input
              id="ebook_url"
              value={formData.ebook_url}
              onChange={(e) => setFormData({ ...formData, ebook_url: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Jember, Jawa Timur"
            />
            {errors.location && (
              <p className="text-sm text-destructive">{errors.location}</p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Batal
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Menyimpan...' : yearbook ? 'Update' : 'Tambah'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
