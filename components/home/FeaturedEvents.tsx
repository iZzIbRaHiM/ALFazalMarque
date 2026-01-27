'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { supabase, type Event } from '@/lib/supabase'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedEvents() {
  const sectionRef = useRef<HTMLElement>(null)
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetchFeaturedEvents()
  }, [])

  async function fetchFeaturedEvents() {
    const { data } = await supabase
      .from('events')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(3)

    if (data) {
      setEvents(data)
    }
  }

  useEffect(() => {
    if (events.length === 0) return

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
  }, [events])

  // Fallback placeholder events if Supabase data is empty
  const displayEvents = events.length > 0 ? events : [
    {
      id: '1',
      title: 'Grand Wedding Ceremony',
      description: 'A breathtaking union of two families celebrated with traditional elegance and modern sophistication',
      category: 'wedding' as const,
      image_url: '/images/event-wedding.jpg',
      date: '2024',
      featured: true,
      created_at: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Annual Corporate Summit',
      description: 'Distinguished business leaders gathered for an evening of networking and strategic vision-sharing',
      category: 'corporate' as const,
      image_url: '/images/event-corporate.jpg',
      date: '2024',
      featured: true,
      created_at: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Cultural Heritage Festival',
      description: 'A vibrant celebration showcasing rich cultural performances and authentic community connections',
      category: 'social' as const,
      image_url: '/images/event-cultural.jpg',
      date: '2024',
      featured: true,
      created_at: new Date().toISOString(),
    },
  ]

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
          {displayEvents.map((event, index) => (
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
