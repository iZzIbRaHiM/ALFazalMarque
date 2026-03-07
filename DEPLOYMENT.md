# Production Deployment Guide - Al Fazal Palace Marquee

## 🚀 Pre-Deployment Checklist

### 1. Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration (REQUIRED)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Google Analytics (Optional but Recommended)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Domain Configuration
NEXT_PUBLIC_SITE_URL=https://alfazalpalacemarquee.com
```

### 2. Supabase Setup

1. **Create Supabase Project:**
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Note your project URL and anon key from Settings > API

2. **Run Database Schema:**
   - Go to SQL Editor in Supabase
   - Copy and run the SQL from `supabase/schema.sql`

3. **Configure Authentication:**
   - Enable Email/Password authentication in Authentication > Providers
   - Create an admin user for the admin panel

4. **Set up Storage (Optional):**
   - Create a bucket named `event-images` for future image uploads
   - Set appropriate RLS policies

### 3. Vercel Deployment

#### Option A: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure environment variables in Vercel:
   - Add all variables from `.env.local`
   - Make sure to mark sensitive keys as "Sensitive"

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### 4. Domain Configuration

1. **Add Custom Domain in Vercel:**
   - Go to Project Settings > Domains
   - Add `alfazalpalacemarquee.com`
   - Add `www.alfazalpalacemarquee.com` (redirect to main)

2. **Configure DNS:**
   - Add A record pointing to Vercel's IP: `76.76.21.21`
   - Or add CNAME record: `cname.vercel-dns.com`

3. **SSL Certificate:**
   - Vercel automatically provisions SSL certificates
   - Should be active within minutes

### 5. Google Search Console Setup

1. **Verify Ownership:**
   ```bash
   # Method 1: HTML Tag (Add to layout.tsx metadata)
   # Add to metadata.verification.google in app/layout.tsx
   
   # Method 2: DNS TXT Record
   # Add TXT record to your DNS provider
   ```

2. **Submit Sitemap:**
   - Go to Google Search Console
   - Submit: `https://alfazalpalacemarquee.com/sitemap.xml`

3. **Request Indexing:**
   - Submit homepage URL for immediate indexing
   - Submit key pages: /gallery, /about, /services, /contact

### 6. Performance Optimization

1. **Image Optimization:**
   ```bash
   # Install image optimization tools
   npm install -g sharp-cli
   
   # Optimize images (run before deployment)
   cd public/images
   sharp -i "*.{jpg,JPG}" -o optimized/ -f webp -q 80
   ```

2. **Enable Vercel Analytics:**
   - Go to Project Settings > Analytics
   - Enable Web Analytics
   - Enable Speed Insights

### 7. SEO Verification

- ✅ Sitemap.xml accessible at /sitemap.xml
- ✅ Robots.txt accessible at /robots.txt
- ✅ Manifest.json for PWA support
- ✅ Structured Data (JSON-LD) included
- ✅ Open Graph tags configured
- ✅ Twitter Card tags configured
- ✅ Canonical URLs set via metadataBase

### 8. Testing Before Go-Live

```bash
# Build production version locally
npm run build

# Test production build
npm start

# Check for errors in console
# Test all routes: /, /gallery, /about, /services, /contact
# Test contact form submission
# Test mobile responsiveness
# Test WhatsApp links
```

### 9. Post-Deployment Tasks

1. **Test All Functionality:**
   - [ ] Homepage loads correctly
   - [ ] All navigation links work
   - [ ] Gallery images load properly
   - [ ] Contact form submits successfully
   - [ ] WhatsApp links work on mobile
   - [ ] Google Maps embedded correctly

2. **SEO Verification:**
   - Use Google's Rich Results Test: https://search.google.com/test/rich-results
   - Test with PageSpeed Insights: https://pagespeed.web.dev/
   - Verify mobile-friendliness: https://search.google.com/test/mobile-friendly

3. **Social Media Preview:**
   - Use Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Use Twitter Card Validator: https://cards-dev.twitter.com/validator

4. **Set Up Google Analytics:**
   - Add GA4 property
   - Set up conversion tracking for contact form
   - Create custom events for WhatsApp clicks

### 10. Monitoring & Maintenance

1. **Set up Monitoring:**
   - Enable Vercel deployment notifications
   - Set up uptime monitoring (e.g., UptimeRobot)
   - Monitor Supabase usage and quotas

2. **Regular Tasks:**
   - Weekly: Check contact form submissions in Supabase
   - Monthly: Review Google Search Console performance
   - Monthly: Update gallery images
   - Quarterly: Review and update service descriptions

## 📱 Google Search Console - Quick Start

### Immediate Actions After Deployment:

1. **Verify Domain:**
   ```
   - Add TXT record to DNS or
   - Add HTML meta tag to layout
   ```

2. **Submit Sitemap:**
   ```
   https://alfazalpalacemarquee.com/sitemap.xml
   ```

3. **Request Indexing for Key Pages:**
   - https://alfazalpalacemarquee.com
   - https://alfazalpalacemarquee.com/gallery
   - https://alfazalpalacemarquee.com/about
   - https://alfazalpalacemarquee.com/services
   - https://alfazalpalacemarquee.com/contact

4. **Monitor Core Web Vitals:**
   - Check Page Experience report
   - Fix any mobile usability issues
   - Monitor crawl errors

## 🔍 SEO Keywords Already Configured

The site is optimized for:
- Al Fazal Palace Marquee
- Wedding venue Dina
- Event venue Pakistan
- Marquee hall Dina
- Wedding hall GT Road
- Corporate events venue
- Dina marriage hall
- 2000 guest capacity venue
- Banquet hall Dina

## 🚨 Troubleshooting

### Sitemap not found
- Verify deployment completed successfully
- Check: https://alfazalpalacemarquee.com/sitemap.xml
- Clear browser cache

### Images not loading
- Check Supabase image URLs
- Verify Next.js image optimization is working
- Check browser console for errors

### Contact form not working
- Verify Supabase credentials in environment variables
- Check RLS policies in Supabase
- Test database connection

### Google not indexing
- Typically takes 1-7 days for initial indexing
- Use URL Inspection tool in Search Console
- Request indexing manually for each page

## 📞 Support

For deployment issues or questions:
- Developer: Check GitHub Issues
- Hosting: Vercel Support
- Database: Supabase Support
- Domain: Your DNS Provider

---

**Last Updated:** March 2026
**Domain:** alfazalpalacemarquee.com
**Framework:** Next.js 14
**Deployment:** Vercel
