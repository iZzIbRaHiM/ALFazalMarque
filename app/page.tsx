import Hero from '@/components/home/Hero'
import IntroSection from '@/components/home/IntroSection'
import FeaturedEvents from '@/components/home/FeaturedEvents'
import ServicesPreview from '@/components/home/ServicesPreview'
import CallToAction from '@/components/home/CallToAction'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedEvents />
      <ServicesPreview />
      <CallToAction />
    </>
  )
}
