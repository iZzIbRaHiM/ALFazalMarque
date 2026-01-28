import Hero from '@/components/home/Hero'
import IntroSection from '@/components/home/IntroSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import FeaturedEvents from '@/components/home/FeaturedEvents'
import GallerySection from '@/components/home/GallerySection'
import ReviewsSection from '@/components/home/ReviewsSection'
import CallToAction from '@/components/home/CallToAction'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesPreview />
      <FeaturedEvents />
      <GallerySection />
      <ReviewsSection />
      <CallToAction />
    </>
  )
}
