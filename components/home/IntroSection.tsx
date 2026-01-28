'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered reveal
      gsap.fromTo(
        '.intro-content',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Stagger the text lines
      gsap.fromTo(
        '.intro-line',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-section-lg bg-secondary-beige">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section Title */}
          <div className="intro-content text-center">
            <h2 className="font-serif text-display-sm font-light mb-6">
              Welcome to Al Fazal Palace Marquee
            </h2>
            <div className="w-16 h-px bg-accent-earth mx-auto" />
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-center">
            <div className="overflow-hidden">
              <p className="intro-line text-xl md:text-2xl font-light leading-relaxed text-balance opacity-0">
                Al Fazal Palace Marquee stands as one of the region&apos;s premier indoor venues,
                offering an exceptional setting for life&apos;s most significant celebrations.
              </p>
            </div>

            <div className="overflow-hidden">
              <p className="intro-line text-lg md:text-xl font-light leading-relaxed text-primary-black/70 text-balance opacity-0">
                With the capacity to host up to 2000+ guests, our venue seamlessly
                accommodates grand weddings, corporate gatherings, cultural celebrations,
                and exclusive social events.
              </p>
            </div>

            <div className="overflow-hidden">
              <p className="intro-line text-lg font-light leading-relaxed text-primary-black/60 text-balance opacity-0">
                Our unique and adaptable space empowers you to curate the perfect
                atmosphere—selecting décor, layout, and scale that align precisely with
                your vision and requirements.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            <div className="intro-content text-center space-y-3">
              <div className="font-serif text-5xl font-light text-accent-earth">2000+</div>
              <div className="text-sm uppercase tracking-wider font-light opacity-60">
                Guest Capacity
              </div>
            </div>
            <div className="intro-content text-center space-y-3">
              <div className="font-serif text-5xl font-light text-accent-earth">5+</div>
              <div className="text-sm uppercase tracking-wider font-light opacity-60">
                Years Experience
              </div>
            </div>
            <div className="intro-content text-center space-y-3">
              <div className="font-serif text-5xl font-light text-accent-earth">500+</div>
              <div className="text-sm uppercase tracking-wider font-light opacity-60">
                Events Hosted
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
