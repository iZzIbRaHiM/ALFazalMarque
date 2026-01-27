# Al Fazal Marquee — Premium Portfolio Website

A high-end, animation-driven portfolio website for Al Fazal Marquee, built with Next.js, Tailwind CSS, GSAP, and Supabase.

## 🎯 Project Overview

This is a premium brand-focused portfolio website (NOT a booking platform) showcasing Al Fazal Marquee's venue, events, and services with award-quality animations and design.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger
- **Backend**: Supabase (Database, Auth, Storage)
- **Deployment**: Vercel
- **Language**: TypeScript

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

3. **Set up Supabase:**
   
   - Create a new Supabase project
   - Run the SQL schema from `supabase/schema.sql` in your Supabase SQL editor
   - Configure authentication (email/password)
   - Set up storage buckets for images (optional)

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

- **Home** (`/`) - Hero, intro, featured events, services preview
- **Gallery** (`/gallery`) - Event showcase with category filtering
- **About** (`/about`) - Venue story and features
- **Services** (`/services`) - Detailed service offerings
- **Contact** (`/contact`) - Contact form with Supabase integration
- **Admin Panel** (`/admin`) - Protected CRUD interface for content management

## 🎨 Animation System

All animations follow a strict grammar using GSAP:

1. **Page Load Reveal** - Opacity + translateY with stagger
2. **Text Line Reveal** - Split-text style with overflow-hidden
3. **Scroll-Triggered Reveal** - Section reveals on scroll
4. **Image Reveal** - Scale + opacity animations
5. **Parallax Drift** - Subtle Y-axis translations
6. **Hover Effects** - Minimal scale transformations
7. **Navigation Animations** - Menu open/close with stagger
8. **Page Transitions** - Smooth route changes

## 🖼️ Images

**IMPORTANT**: All images in `/public/images/` are placeholders (SVG gradients). Replace them with actual venue photos before production deployment.

Placeholder images included:
- `hero-marquee.jpg` - Hero background
- `event-*.jpg` - Event thumbnails
- `gallery-*.jpg` - Gallery images
- `about-venue.jpg` - About page image

## 🔐 Admin Access

Access the admin panel at `/admin/login`. You'll need to:

1. Create a user in Supabase Authentication
2. Log in with email/password
3. Manage events, gallery, and view contact submissions

## 🌐 Deployment

### Vercel Deployment

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Import your GitHub repository in Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically

3. **Configure domain** (optional):
   - Add custom domain in Vercel settings
   - Update DNS records

## 📋 Environment Variables

Required variables for production:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 🎯 Performance

- Optimized animations (GPU-accelerated transforms)
- Image optimization with Next.js Image component
- Code splitting with App Router
- Proper cleanup of GSAP animations
- Smooth 60fps animations

## 📝 Content Management

All content is managed through Supabase:

- **Events**: Create, update, delete event entries
- **Services**: Pre-populated, editable in database
- **Gallery**: Image URLs stored in database
- **Contact Forms**: Submissions stored for review

## 🔧 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```ts
colors: {
  primary: { black: '#0a0a0a', gray: '#1a1a1a' },
  secondary: { white: '#fafaf9', beige: '#f5f5f0' },
  accent: { earth: '#b8a992', sand: '#d4c5b0' },
}
```

### Typography

Fonts are configured in `app/layout.tsx`:
- Inter (sans-serif)
- Cormorant Garamond (serif)

### Animation Timing

Edit animation parameters in `lib/animations.ts`.

## 📞 Support

For questions or issues, contact the development team.

## 📜 License

© 2026 Al Fazal Marquee. All rights reserved.
