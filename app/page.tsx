import dynamic from 'next/dynamic'
import Hero from '@/components/home/Hero'
import IntroSection from '@/components/home/IntroSection'

const ServicesPreview = dynamic(() => import('@/components/home/ServicesPreview'))
const GallerySection = dynamic(() => import('@/components/home/GallerySection'))
const ReviewsSection = dynamic(() => import('@/components/home/ReviewsSection'))
const CallToAction = dynamic(() => import('@/components/home/CallToAction'))

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesPreview />
      <GallerySection />
      <ReviewsSection />
      <CallToAction />
    </>
  )
}
