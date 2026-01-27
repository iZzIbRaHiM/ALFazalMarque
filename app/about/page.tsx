'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.about-hero-line',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      )

      // Story section
      gsap.fromTo(
        '.story-content',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.story-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Features
      gsap.fromTo(
        '.feature-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.features-section',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Image reveals
      gsap.fromTo(
        '.about-image',
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-secondary-beige">
        <div className="container-custom text-center space-y-8">
          <div className="overflow-hidden">
            <h1 className="about-hero-line font-serif text-display-lg font-light opacity-0">
              About Us
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="about-hero-line text-lg md:text-xl font-light opacity-60 max-w-2xl mx-auto opacity-0">
              Where exceptional spaces meet unforgettable experiences
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section py-section-lg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="story-content space-y-8 opacity-0">
              <h2 className="font-serif text-display-sm font-light text-center mb-8">
                Our Story
              </h2>
              
              <p className="text-lg md:text-xl font-light leading-relaxed text-center">
                Al Fazal Marquee has established itself as a distinguished venue for life&apos;s
                most significant celebrations. Our journey began with a simple vision: to
                create a space where memories are crafted with elegance and precision.
              </p>

              <p className="text-base md:text-lg font-light leading-relaxed text-primary-black/70 text-center">
                Located in a prime area with excellent accessibility, our venue combines
                architectural sophistication with functional excellence. We&apos;ve hosted hundreds
                of events, each unique in its character, yet united by our commitment to
                impeccable service and attention to detail.
              </p>

              <p className="text-base md:text-lg font-light leading-relaxed text-primary-black/60 text-center">
                From intimate gatherings to grand celebrations, Al Fazal Marquee provides the
                perfect backdrop for your special occasions. Our team&apos;s dedication to
                excellence ensures that every event is executed flawlessly, leaving you free
                to create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="py-section">
        <div className="container-custom">
          <div className="about-image relative aspect-[21/9] overflow-hidden bg-secondary-warm opacity-0">
            <Image
              src="/images/about-venue.jpg"
              alt="Al Fazal Marquee Interior"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-section-lg bg-secondary-beige">
        <div className="container-custom">
          <h2 className="font-serif text-display-sm font-light text-center mb-20">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="feature-item text-center space-y-4 opacity-0">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="font-serif text-2xl font-light">Prime Location</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                Easily accessible venue situated in a central location, ensuring convenience
                for you and your guests from all parts of the city.
              </p>
            </div>

            <div className="feature-item text-center space-y-4 opacity-0">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="font-serif text-2xl font-light">Flexible Spaces</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                Adaptable venue layout that transforms to match your vision, accommodating
                intimate gatherings to grand celebrations of up to 1,500 guests.
              </p>
            </div>

            <div className="feature-item text-center space-y-4 opacity-0">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-serif text-2xl font-light">Expert Team</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                Experienced professionals dedicated to ensuring seamless execution of every
                detail, from planning to the final moment of your event.
              </p>
            </div>

            <div className="feature-item text-center space-y-4 opacity-0">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="font-serif text-2xl font-light">Premium Catering</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                Exceptional culinary experiences featuring diverse menu options crafted by
                skilled chefs using the finest ingredients.
              </p>
            </div>

            <div className="feature-item text-center space-y-4 opacity-0">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="font-serif text-2xl font-light">Custom Décor</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                Personalized styling and decoration services that bring your unique vision to
                life with stunning visual impact.
              </p>
            </div>

            <div className="feature-item text-center space-y-4 opacity-0">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="font-serif text-2xl font-light">Quality Assurance</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                Unwavering commitment to excellence in every aspect, ensuring your event
                exceeds expectations and creates lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-section-lg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h2 className="font-serif text-display-sm font-light">Our Commitment</h2>
            
            <p className="text-lg font-light leading-relaxed text-primary-black/70">
              At Al Fazal Marquee, we believe that every celebration deserves to be
              extraordinary. Our commitment extends beyond providing a venue—we partner
              with you to create experiences that resonate long after the event concludes.
            </p>

            <div className="pt-8">
              <a
                href="/contact"
                className="inline-block px-12 py-5 bg-primary-black text-secondary-white text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-gray"
              >
                Plan Your Event
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
