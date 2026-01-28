-- Create storage bucket for yearbook thumbnails
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'yearbook-thumbnails',
  'yearbook-thumbnails',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/jpg', 'image/gif']::text[]
)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies first
DROP POLICY IF EXISTS "Public can view yearbook thumbnails" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload yearbook thumbnails" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update yearbook thumbnails" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete yearbook thumbnails" ON storage.objects;

-- Policy: Public can view thumbnails
CREATE POLICY "Public can view yearbook thumbnails"
ON storage.objects FOR SELECT
USING (bucket_id = 'yearbook-thumbnails');

-- Policy: Authenticated users can upload
CREATE POLICY "Authenticated users can upload yearbook thumbnails"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'yearbook-thumbnails' 
  AND (storage.foldername(name))[1] = 'thumbnails'
);

-- Policy: Authenticated users can update
CREATE POLICY "Authenticated users can update yearbook thumbnails"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'yearbook-thumbnails')
WITH CHECK (bucket_id = 'yearbook-thumbnails');

-- Policy: Authenticated users can delete
CREATE POLICY "Authenticated users can delete yearbook thumbnails"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'yearbook-thumbnails');