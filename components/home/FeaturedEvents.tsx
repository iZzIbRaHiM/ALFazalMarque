'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

interface Event {
  id: string
  title: string
  description: string
  category: 'wedding' | 'corporate' | 'cultural' | 'social'
  image_url: string
  date: string
  featured: boolean
}

const events: Event[] = [
  {
    id: '1',
    title: 'Grand Wedding Ceremony',
    description: 'A breathtaking union of two families celebrated with traditional elegance and modern sophistication',
    category: 'wedding',
    image_url: '/images/Walima.JPG',
    date: '2024',
    featured: true,
  },
  {
    id: '2',
    title: 'Corporate Gala Evening',
    description: 'An exclusive corporate event featuring keynote speakers, networking opportunities, and elegant dining',
    category: 'corporate',
    image_url: '/images/m11.JPG',
    date: '2024',
    featured: true,
  },
  {
    id: '3',
    title: 'Cultural Festival Celebration',
    description: 'A vibrant celebration of heritage and tradition with music, dance, and authentic cuisine',
    category: 'cultural',
    image_url: '/images/m12.JPG',
    date: '2024',
    featured: true,
  },
]

export default function FeaturedEvents() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section title reveal
      gsap.fromTo(
        '.featured-title',
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

      // Event cards staggered reveal
      gsap.fromTo(
        '.event-card',
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.events-grid',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Image parallax effect
      gsap.utils.toArray<HTMLElement>('.event-image').forEach((image) => {
        gsap.to(image, {
          y: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-section-lg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="featured-title text-center mb-20 opacity-0">
          <p className="text-sm uppercase tracking-widest font-light text-accent-earth mb-4">
            Recent Events
          </p>
          <h2 className="font-serif text-display-md font-light">
            Celebrations We&apos;ve Hosted
          </h2>
        </div>

        {/* Events Grid */}
        <div className="events-grid grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {events.map((event) => (
            <article key={event.id} className="event-card opacity-0 group">
              <Link href={`/gallery`} className="block space-y-6">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary-warm">
                  <div className="event-image relative w-full h-full">
                    <Image
                      src={event.image_url}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-widest font-light text-accent-earth">
                    {event.category}
                  </div>
                  <h3 className="font-serif text-2xl font-light transition-opacity duration-300 group-hover:opacity-60">
                    {event.title}
                  </h3>
                  <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <Link
            href="/gallery"
            className="inline-block px-10 py-4 border border-primary-black text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-black hover:text-secondary-white"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}
