const fs = require('fs');
const path = require('path');

// Minimal 1x1 pixel PNG in base64 (different colors for variety)
const placeholders = {
  // Golden/amber for hero
  'hero-marquee.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==', 'base64'),
  
  // Wedding - soft pink
  'event-wedding.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8j4HwAFBQIAv7z1GAAAAABJRU5ErkJggg==', 'base64'),
  
  // Corporate - blue
  'event-corporate.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==', 'base64'),
  
  // Social - green
  'event-social.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==', 'base64'),
  
  // Cultural - purple
  'event-cultural.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hAQAF/wL/6RwYRQAAAABJRU5ErkJggg==', 'base64'),
  
  // Gallery images - various colors
  'gallery-1.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==', 'base64'),
  'gallery-2.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8j4HwAFBQIAv7z1GAAAAABJRU5ErkJggg==', 'base64'),
  'gallery-3.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M/wHwAEBgIApD5fRAAAAABJRU5ErkJggg==', 'base64'),
  'gallery-4.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg==', 'base64'),
  'gallery-5.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==', 'base64'),
  'gallery-6.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8j4HwAFBQIAv7z1GAAAAABJRU5ErkJggg==', 'base64'),
  
  // About page venue image
  'about-venue.jpg': Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==', 'base64'),
};

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Write all placeholder images
Object.entries(placeholders).forEach(([filename, buffer]) => {
  const filepath = path.join(imagesDir, filename);
  fs.writeFileSync(filepath, buffer);
  console.log(`✅ Created ${filename}`);
});

console.log('\n✨ All placeholder images generated successfully!');
