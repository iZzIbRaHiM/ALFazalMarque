-- Events Table
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date TEXT,
  category TEXT CHECK (category IN ('wedding', 'corporate', 'social')),
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  event_type TEXT,
  guest_count INTEGER,
  event_date TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Gallery Images Table
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  alt TEXT,
  category TEXT,
  featured BOOLEAN DEFAULT false,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Insert default services
INSERT INTO services (title, description, icon, "order") VALUES
('Wedding Ceremonies', 'Elegant spaces designed for traditional and contemporary wedding celebrations. Our venue transforms to match your vision, accommodating intimate gatherings to grand celebrations.', 'wedding', 1),
('Corporate Events', 'Professional settings for conferences, product launches, and business gatherings. State-of-the-art facilities with full technical support for successful corporate functions.', 'corporate', 2),
('Event Styling', 'Complete décor and styling services tailored to your event theme. Our creative team brings your vision to life with stunning visual presentations and atmospheric design.', 'decor', 3),
('Catering Services', 'Exquisite culinary experiences featuring diverse menu options. From traditional cuisine to international flavors, our catering team delivers exceptional taste and presentation.', 'catering', 4),
('Full Event Management', 'Comprehensive planning and coordination from concept to completion. Our experienced team manages every detail, ensuring seamless execution of your special occasion.', 'management', 5);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public read events" ON events FOR SELECT USING (true);
CREATE POLICY "Public read services" ON services FOR SELECT USING (true);
CREATE POLICY "Public read gallery" ON gallery_images FOR SELECT USING (true);

-- Public insert for contact submissions
CREATE POLICY "Public insert contact" ON contact_submissions FOR INSERT WITH CHECK (true);

-- Admin full access (you'll need to set up auth and replace 'auth.uid()' with proper admin check)
CREATE POLICY "Admin full events" ON events FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full services" ON services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full gallery" ON gallery_images FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin read contact" ON contact_submissions FOR SELECT USING (auth.role() = 'authenticated');
