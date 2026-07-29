import { Metadata } from 'next'
import RamadanBuffetOffer from '@/components/home/RamadanBuffetOffer'

export const metadata: Metadata = {
  title: 'Grand Ramadan Buffet in Dina',
  description:
    'Grand Ramadan Iftar buffet in Dina near Jhelum at Al Fazal Palace Marquee. ₨2,799 per person, 10% family discount, kids under 5 eat free. Serving City Housing Jhelum, Sohawa, and Mirpur.',
  alternates: {
    canonical: 'https://alfazalpalacemarquee.com/ramadan-buffet',
  },
  openGraph: {
    title: 'Grand Ramadan Buffet in Dina | Al Fazal Palace Marquee',
    description:
      'Premium Iftar buffet near Jhelum — 50+ traditional dishes, live cooking stations, family discounts, and kids under 5 eat free.',
    url: 'https://alfazalpalacemarquee.com/ramadan-buffet',
    type: 'website',
  },
}

export default function RamadanBuffetPage() {
  return (
    <div className="pt-16">
      <RamadanBuffetOffer />
    </div>
  )
}
