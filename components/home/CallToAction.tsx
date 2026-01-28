'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-section-lg">
      <div className="container-custom">
        <div className="cta-content max-w-4xl mx-auto text-center space-y-12 opacity-0">
          <h2 className="font-serif text-display-md font-light">
            Ready to Create
            <br />
            Something Extraordinary?
          </h2>

          <p className="text-lg md:text-xl font-light text-primary-black/60 max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s a grand wedding, a corporate milestone, or an intimate gathering,
            Al Fazal Marquee provides the perfect canvas for your celebration.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="https://wa.me/923005451991?text=Hi%20I%20found%20your%20website%20and%20I%20am%20interested%20in%20booking%20information"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-primary-black text-secondary-white text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-gray"
            >
              Get in Touch
            </a>
            <Link
              href="/gallery"
              className="inline-block px-12 py-5 border border-primary-black text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-black hover:text-secondary-white"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
