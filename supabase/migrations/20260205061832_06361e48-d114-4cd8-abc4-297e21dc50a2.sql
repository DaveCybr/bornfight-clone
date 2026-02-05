-- Create site_settings table for maintenance mode and other settings
CREATE TABLE public.site_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read settings (needed for maintenance mode check)
CREATE POLICY "Anyone can view site settings"
ON public.site_settings
FOR SELECT
USING (true);

-- Only authenticated users can update settings
CREATE POLICY "Authenticated users can update site settings"
ON public.site_settings
FOR UPDATE
TO authenticated
USING (true);

-- Only authenticated users can insert settings
CREATE POLICY "Authenticated users can insert site settings"
ON public.site_settings
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Create trigger for updated_at
CREATE TRIGGER update_site_settings_updated_at
BEFORE UPDATE ON public.site_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default maintenance mode setting
INSERT INTO public.site_settings (key, value)
VALUES ('maintenance_mode', '{"enabled": false, "message": "Kami sedang melakukan pemeliharaan."}'::jsonb);