'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Animate hero text lines
      tl.fromTo(
        '.hero-line',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 }
      )

      // Animate hero image
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.4 },
        '-=0.6'
      )

      // Parallax effect on image
      gsap.to(imageRef.current, {
        y: 150,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="relative w-full h-[120vh]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-white/80 z-10" />
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/m2.JPG"
            preload="auto"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
          </video>
          {/* Fallback Image */}
          <Image
            src="/images/m2.JPG"
            alt="Al Fazal Marquee Interior"
            fill
            className="object-cover -z-10"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Headline */}
          <div className="overflow-hidden">
            <h1 className="hero-line font-serif text-display-xl font-light opacity-0">
              Where Moments
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line font-serif text-display-xl font-light opacity-0">
              Become Memories
            </h1>
          </div>

          {/* Subheadline */}
          <div className="overflow-hidden mt-12">
            <p className="hero-line text-lg md:text-xl font-light tracking-wide opacity-60 opacity-0">
              Al Fazal Marquee — Premium venue for life&apos;s most extraordinary celebrations
            </p>
          </div>

          {/* CTA */}
          <div className="overflow-hidden pt-8">
            <a
              href="https://wa.me/923005451991?text=Hi%20I%20found%20your%20website%20and%20I%20am%20interested%20in%20booking%20information"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-line inline-block px-10 py-4 border border-primary-black text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-black hover:text-secondary-white opacity-0"
            >
              Book Your Event
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="w-px h-16 bg-primary-black/20 animate-pulse" />
      </div>
    </section>
  )
}
