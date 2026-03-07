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
   ```env
   # Supabase Configuration (REQUIRED)
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Google Analytics (Optional)
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

   # Site URL
   NEXT_PUBLIC_SITE_URL=https://alfazalpalacemarquee.com
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

- **Home** (`/`) - Hero, intro, gallery preview, reviews, services preview, CTA
- **Gallery** (`/gallery`) - Event showcase with 19+ venue images
- **About** (`/about`) - Venue story, features, and commitment
- **Services** (`/services`) - Detailed service offerings with descriptions
- **Contact** (`/contact`) - Contact form with map and information
- **404** (`/not-found`) - Custom 404 error page

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

### Production Deployment to Vercel

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment guide.**

#### Quick Deploy:

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
   - Import repository on [vercel.com](https://vercel.com)
   - Add environment variables from `.env.local`
   - Deploy!

3. **Configure Custom Domain:**
   - Add `alfazalpalacemarquee.com` in Vercel dashboard
   - Update DNS records as provided by Vercel
   - SSL certificate auto-provisioned

4. **Submit to Google Search Console:**
   - Verify domain ownership
   - Submit sitemap: `https://alfazalpalacemarquee.com/sitemap.xml`
   - Request indexing for all pages

### Production Features Enabled:

✅ **SEO Optimized:**
- Dynamic sitemap.xml generation
- Robots.txt configuration
- Open Graph & Twitter Card meta tags
- JSON-LD structured data for search engines
- Comprehensive meta descriptions and keywords

✅ **Performance Optimized:**
- Next.js Image optimization (AVIF/WebP)
- Code splitting and lazy loading
- GZIP compression enabled
- SWC minification
- Console logs removed in production

✅ **Analytics Ready:**
- Google Analytics 4 integration
- Conversion tracking setup
- Custom event tracking for contact forms

✅ **PWA Support:**
- Web app manifest configured
- Mobile-friendly design
- Installable as standalone app

## 📊 SEO & Analytics

### Sitemap
Automatically generated at: `/sitemap.xml`

### Robots.txt
Configured at: `/robots.txt`

### Structured Data
JSON-LD schema implemented for:
- Event Venue
- Local Business
- Breadcrumb navigation

### Google Search Console Setup
1. Verify via HTML tag or DNS TXT record
2. Submit sitemap URL
3. Request indexing for all 5 pages
4. Monitor Core Web Vitals

### Target Keywords
- Al Fazal Palace Marquee
- Wedding venue Dina
- Event venue Pakistan
- Marquee hall GT Road
- Corporate events Dina
- Banquet hall Dina

## 🔧 Production Optimization Checklist

Before deploying to production:

- [ ] Set all environment variables in Vercel
- [ ] Run Supabase schema in production database
- [ ] Test contact form submission
- [ ] Verify all images are optimized
- [ ] Test mobile responsiveness
- [ ] Check WhatsApp links work on mobile
- [ ] Verify Google Maps iframe loads
- [ ] Test all navigation links
- [ ] Add Google Analytics tracking ID
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph preview (Facebook Debugger)
- [ ] Run Lighthouse audit (target: 90+ scores)

## 📱 Contact & Social Media

- **Phone:** +92 300 5451991
- **Email:** info@alfazalmarquee.com
- **Location:** G.T Road, Dina, Punjab, Pakistan
- **Instagram:** [@al_fazal_palace_marquee](https://www.instagram.com/al_fazal_palace_marquee)
- **WhatsApp:** [Chat with us](https://api.whatsapp.com/send?phone=923005451991)

## 🤝 Contributing

This is a private portfolio website. For issues or enhancement requests, please contact the development team.
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
