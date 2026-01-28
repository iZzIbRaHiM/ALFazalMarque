'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

// Gallery images from the Images folder
const galleryImages = [
  { id: 1, src: '/images/m2.JPG', title: 'Grand Hall Setup', description: 'Our spacious venue ready for celebrations' },
  { id: 2, src: '/images/m4.JPG', title: 'Elegant Decor', description: 'Premium decoration and lighting' },
  { id: 3, src: '/images/Walima.JPG', title: 'Walima Reception', description: 'Beautiful wedding reception setup' },
  { id: 4, src: '/images/m11.JPG', title: 'Event Space', description: 'Versatile venue configuration' },
  { id: 5, src: '/images/m12.JPG', title: 'Main Hall', description: 'Stunning interior ambiance' },
  { id: 6, src: '/images/m13.JPG', title: 'Celebration Moment', description: 'Memorable event captures' },
  { id: 7, src: '/images/m14.JPG', title: 'Venue Details', description: 'Attention to every detail' },
  { id: 8, src: '/images/m16.JPG', title: 'Event Atmosphere', description: 'Perfect setting for any occasion' },
  { id: 9, src: '/images/m5.JPG', title: 'Premium Setup', description: 'High-quality event arrangements' },
  { id: 10, src: '/images/m8.JPG', title: 'Venue Highlights', description: 'Showcasing our best features' },
  { id: 11, src: '/images/m9.JPG', title: 'Event Excellence', description: 'Professional event management' },
  { id: 12, src: '/images/DSC_3413.JPG', title: 'Special Moments', description: 'Capturing unforgettable memories' },
  { id: 13, src: '/images/DSC_3414.JPG', title: 'Celebration Details', description: 'Every moment matters' },
  { id: 14, src: '/images/DSC_3415.JPG', title: 'Event Photography', description: 'Professional event coverage' },
  { id: 15, src: '/images/w3.JPG', title: 'Venue Showcase', description: 'Our beautiful space' },
]

export default function GalleryPage() {
  const heroRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.gallery-hero-line',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Gallery items reveal
      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Gallery image parallax
      gsap.utils.toArray<HTMLElement>('.gallery-item .relative').forEach((container) => {
        const image = container.querySelector('img')
        if (image) {
          gsap.to(image, {
            y: 40,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-secondary-beige">
        <div className="container-custom text-center space-y-8">
          <div className="overflow-hidden">
            <h1 className="gallery-hero-line font-serif text-display-lg font-light opacity-0">
              Event Gallery
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="gallery-hero-line text-lg md:text-xl font-light opacity-60 max-w-2xl mx-auto opacity-0">
              A collection of memorable celebrations and exceptional moments at Al Fazal Marquee
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-section">
        <div className="container-custom">
          <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <article key={image.id} className="gallery-item opacity-0 group">
                <div className="space-y-6">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary-warm">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-light transition-opacity duration-300 group-hover:opacity-60">
                      {image.title}
                    </h3>
                    <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
