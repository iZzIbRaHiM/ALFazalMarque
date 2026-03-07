import dynamic from 'next/dynamic'
import Hero from '@/components/home/Hero'
import IntroSection from '@/components/home/IntroSection'
import RamadanBuffetOffer from '@/components/home/RamadanBuffetOffer'

const ServicesPreview = dynamic(() => import('@/components/home/ServicesPreview'))
const GallerySection = dynamic(() => import('@/components/home/GallerySection'))
const ReviewsSection = dynamic(() => import('@/components/home/ReviewsSection'))
const CallToAction = dynamic(() => import('@/components/home/CallToAction'))

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <RamadanBuffetOffer />
      <GallerySection />
      <ReviewsSection />
      <ServicesPreview />
      <CallToAction />
    </>
  )
}
