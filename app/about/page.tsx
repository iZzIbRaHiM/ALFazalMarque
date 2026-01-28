'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
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

      // Image reveals - animate each image individually
      const images = gsap.utils.toArray('.about-image')
      images.forEach((image) => {
        gsap.fromTo(
          image as HTMLElement,
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: image as HTMLElement,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Image parallax
      const imageContainers = gsap.utils.toArray('.about-image')
      imageContainers.forEach((container) => {
        const image = (container as HTMLElement).querySelector('img')
        if (image) {
          gsap.to(image, {
            y: 50,
            ease: 'none',
            scrollTrigger: {
              trigger: container as HTMLElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })
        }
      })

      // Background image parallax
      const bgImages = [
        { trigger: '.story-section', selector: '.story-section .absolute img' },
        { trigger: '.values-section', selector: '.values-section .absolute img' },
      ]

      bgImages.forEach(({ trigger, selector }) => {
        const img = document.querySelector(selector)
        if (img) {
          gsap.to(img, {
            y: 80,
            ease: 'none',
            scrollTrigger: {
              trigger,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          })
        }
      })

      // Unique space section
      gsap.fromTo(
        '.unique-space-content',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.unique-space-section',
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

      // Values section
      gsap.fromTo(
        '.values-content',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary-beige">
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
      <section className="story-section py-section-lg relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/m5.JPG"
            alt="Background"
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="story-content space-y-8 opacity-0">
              <h2 className="font-serif text-display-sm font-light text-center mb-8 text-primary-black">
                Our Story
              </h2>

              <p className="text-lg md:text-xl font-light leading-relaxed text-center text-primary-black">
                Al Fazal Marquee is one of the largest indoor venues, located on the main road with excellent accessibility.
                Capable of hosting up to 1,400 guests, Al Fazal Marquee is perfect for large weddings, promotional launches,
                dinner and dances, sporting events, conferences, and so much more!
              </p>

              <p className="text-base md:text-lg font-light leading-relaxed text-center text-primary-black">
                Al Fazal Marquee is a destination that will leave your guests talking about your event long after it&apos;s been.
                Its modern and luxurious interior makes this venue a perfect match for both classic traditions and modern festivities,
                making it the ideal venue. Al Fazal Marquee prides itself on exclusivity, therefore the dining floor of the venue
                will be exclusive to you and your guests for the day.
              </p>

              <p className="text-base md:text-lg font-light leading-relaxed text-center text-primary-black">
                With mood lighting available inside, you can customize the ambiance to complement your color scheme.
                If you&apos;re looking to hire a leading venue, Al Fazal Marquee provides a spectacular setting for an event
                with quality unbeatable food & services within your entire budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Image */}
      <section className="py-section">
        <div className="container-custom">
          <div className="about-image relative aspect-[16/9] overflow-hidden bg-secondary-warm opacity-0">
            <Image
              src="/images/m17.JPG"
              alt="Al Fazal Marquee Grand Hall"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Unique Space Section */}
      <section className="unique-space-section py-section-lg bg-secondary-beige">
        <div className="container-custom">
          <div className="unique-space-content max-w-4xl mx-auto text-center space-y-8 opacity-0">
            <h2 className="font-serif text-display-sm font-light">
              Flexible & Unique Space
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-primary-black/70">
              Our unique and flexible space makes it possible for you to choose the décor, layout, and size
              that best suits your needs. Whether you envision an intimate gathering or a grand celebration,
              our venue adapts to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Second Image */}
      <section className="py-section">
        <div className="container-custom">
          <div className="about-image relative aspect-[16/9] overflow-hidden bg-secondary-warm opacity-0">
            <Image
              src="/images/m7.JPG"
              alt="Al Fazal Marquee Event Setup"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-section-lg">
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
                intimate gatherings to grand celebrations of up to 1,400 guests.
              </p>
            </div>

            <div className="feature-item text-center space-y-4 opacity-0">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-serif text-2xl font-light">Expert Team</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                Our professional team is ready to help with your entire event, ensuring seamless
                execution of every detail from planning to the final moment.
              </p>
            </div>

            <div className="feature-item text-center space-y-4 opacity-0">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="font-serif text-2xl font-light">Premium Catering</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                Exceptional culinary experiences with quality unbeatable food, featuring diverse
                menu options crafted by skilled chefs using the finest ingredients.
              </p>
            </div>

            <div className="feature-item text-center space-y-4 opacity-0">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="font-serif text-2xl font-light">Custom Décor</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                Personalized styling and decoration services with mood lighting that brings your
                unique vision to life with stunning visual impact.
              </p>
            </div>

            <div className="feature-item text-center space-y-4 opacity-0">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="font-serif text-2xl font-light">Exclusive Experience</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                The venue is exclusively yours for the day, ensuring privacy and a personalized
                experience that exceeds expectations and creates lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-section-lg relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-secondary-beige">
          <Image
            src="/images/m9.JPG"
            alt="Background"
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="values-content max-w-3xl mx-auto text-center space-y-12 opacity-0">
            <h2 className="font-serif text-display-sm font-light text-primary-black">Our Commitment</h2>

            <p className="text-lg font-light leading-relaxed text-primary-black">
              At Al Fazal Marquee, we believe that every celebration deserves to be
              extraordinary. Our commitment extends beyond providing a venue—we partner
              with you to create experiences that resonate long after the event concludes.
            </p>

            <p className="text-base font-light leading-relaxed text-primary-black">
              If you&apos;d like more information about us, give us a call or email us.
              Our professional team is ready to help make your event unforgettable.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
