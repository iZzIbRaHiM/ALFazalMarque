import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Al Fazal Palace Marquee - Premium Wedding & Events Venue',
    short_name: 'Al Fazal Palace',
    description: 'Experience luxury and elegance at Al Fazal Palace Marquee. Premier wedding and events venue offering world-class facilities, exceptional service, and unforgettable celebrations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf9',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
