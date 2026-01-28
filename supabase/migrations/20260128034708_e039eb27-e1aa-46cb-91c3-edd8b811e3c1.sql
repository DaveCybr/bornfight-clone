-- Create yearbooks table
CREATE TABLE public.yearbooks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  school_name TEXT NOT NULL,
  year INTEGER NOT NULL,
  thumbnail_url TEXT NOT NULL,
  ebook_url TEXT NOT NULL DEFAULT '#',
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.yearbooks ENABLE ROW LEVEL SECURITY;

-- Public can read yearbooks
CREATE POLICY "Anyone can view yearbooks" 
ON public.yearbooks 
FOR SELECT 
USING (true);

-- Only authenticated users can insert yearbooks
CREATE POLICY "Authenticated users can insert yearbooks" 
ON public.yearbooks 
FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Only authenticated users can update yearbooks
CREATE POLICY "Authenticated users can update yearbooks" 
ON public.yearbooks 
FOR UPDATE 
TO authenticated
USING (true);

-- Only authenticated users can delete yearbooks
CREATE POLICY "Authenticated users can delete yearbooks" 
ON public.yearbooks 
FOR DELETE 
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_yearbooks_updated_at
BEFORE UPDATE ON public.yearbooks
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial data from existing yearbook projects
INSERT INTO public.yearbooks (school_name, year, thumbnail_url, ebook_url, location) VALUES
('SMAN 1 Rambipuji', 2026, '/assets/ebooks/10.-SMAN-1-RAMBIPUJI-scaled.jpg', '#', 'Jember, Jawa Timur'),
('SMP Al-Furqon Jember', 2026, '/assets/ebooks/10.-SMP-AL-FURQON-JEMBER.jpg', '#', 'Jember, Jawa Timur'),
('SMAN 1 Bululawang', 2026, '/assets/ebooks/19.-SMAN-1-BULULAWANG.jpg', '#', 'Malang, Jawa Timur'),
('SMK Telkom Sidoarjo', 2026, '/assets/ebooks/21.-SMK-TELKOM-SIDOARJO.jpg', '#', 'Sidoarjo, Jawa Timur'),
('SMA MTA Surakarta', 2026, '/assets/ebooks/SMAMIO-2-scaled.jpg', '#', 'Surakarta, Jawa Tengah'),
('Pocket Book Mockup', 2026, '/assets/ebooks/06_Pocket_Book_Mockup-scaled.jpg', '#', 'Indonesia');