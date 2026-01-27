import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
  title: 'Al Fazal Marquee — Premium Wedding & Events Venue',
  description: 'Experience luxury and elegance at Al Fazal Marquee. Premier wedding and events venue offering world-class facilities, exceptional service, and unforgettable celebrations.',
  keywords: 'marquee, wedding venue, events, luxury venue, Al Fazal Marquee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
