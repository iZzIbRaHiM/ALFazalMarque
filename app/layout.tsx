import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import StructuredData from '@/components/StructuredData'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alfazalpalacemarquee.com'),
  title: {
    default: 'Al Fazal Palace Marquee — Premium Wedding & Events Venue in Dina',
    template: '%s | Al Fazal Palace Marquee',
  },
  description: 'Experience luxury and elegance at Al Fazal Palace Marquee in Dina. Premier wedding and events venue with 2000+ guest capacity, offering world-class facilities, exceptional service, and unforgettable celebrations.',
  keywords: [
    'Al Fazal Palace Marquee',
    'wedding venue Dina',
    'event venue Pakistan',
    'marquee hall Dina',
    'wedding hall GT Road',
    'corporate events venue',
    'luxury wedding venue',
    'Dina marriage hall',
    'event space Pakistan',
    '2000 guest capacity venue',
    'banquet hall Dina',
    'premium event venue',
    'Ramadan buffet Dina',
    'best Iftar deals Jhelum',
    'family Iftar buffet City Housing Jhelum',
    'Ramadan dinner Sohawa',
    'Iftar buffet near Mirpur',
    'event marquee Dina Ramadan specials',
  ],
  authors: [{ name: 'Al Fazal Palace Marquee' }],
  creator: 'Al Fazal Palace Marquee',
  publisher: 'Al Fazal Palace Marquee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://alfazalpalacemarquee.com',
    siteName: 'Al Fazal Palace Marquee',
    title: 'Al Fazal Palace Marquee — Premium Wedding & Events Venue in Dina',
    description: 'Experience luxury and elegance at Al Fazal Palace Marquee in Dina. Premier wedding and events venue with 2000+ guest capacity, offering world-class facilities and exceptional service.',
    images: [
      {
        url: '/images/m2.JPG',
        width: 1200,
        height: 630,
        alt: 'Al Fazal Palace Marquee - Grand Hall Interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Fazal Palace Marquee — Premium Wedding & Events Venue',
    description: 'Experience luxury and elegance at Al Fazal Palace Marquee in Dina. 2000+ guest capacity, world-class facilities, and exceptional service.',
    images: ['/images/m2.JPG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <StructuredData />
        <GoogleAnalytics />
      </head>
      <body className="font-sans">
        <Navigation />
        <PageTransition>
          <main>{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  )
}
