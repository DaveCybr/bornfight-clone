import { supabase } from "@/integrations/supabase/client";

export async function uploadThumbnail(file: File): Promise<string> {
  // Generate unique filename
  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
  const filePath = `thumbnails/${fileName}`;

  // Upload file
  const { error: uploadError } = await supabase.storage
    .from("yearbook-thumbnails")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    throw uploadError;
  }

  // Get public URL
  const { data } = supabase.storage
    .from("yearbook-thumbnails")
    .getPublicUrl(filePath);

  return data.publicUrl;
}

export async function deleteThumbnail(url: string): Promise<void> {
  // Extract path from URL
  const urlParts = url.split("/storage/v1/object/public/yearbook-thumbnails/");
  const path = urlParts[1];

  if (!path) return;

  const { error } = await supabase.storage
    .from("yearbook-thumbnails")
    .remove([path]);

  if (error) {
    console.error("Error deleting thumbnail:", error);
  }
}

export function validateImageFile(file: File): {
  valid: boolean;
  error?: string;
} {
  // Check file type
  const validTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
    "image/gif",
  ];
  if (!validTypes.includes(file.type)) {
    return {
      valid: false,
      error: "File harus berupa gambar (JPEG, PNG, WEBP, atau GIF)",
    };
  }

  // Check file size (max 5MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    return { valid: false, error: "Ukuran file maksimal 5MB" };
  }

  return { valid: true };
}
