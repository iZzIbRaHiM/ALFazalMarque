'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { supabase, type Event } from '@/lib/supabase'

gsap.registerPlugin(ScrollTrigger)

export default function GalleryPage() {
  const heroRef = useRef<HTMLElement>(null)
  const [events, setEvents] = useState<Event[]>([])
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    fetchEvents()
  }, [])

  async function fetchEvents() {
    const { data } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setEvents(data)
    } else {
      // Fallback placeholder data
      setEvents([
        {
          id: '1',
          title: 'Regal Wedding Ceremony',
          description: 'A magnificent celebration of love with 1,200 guests, featuring traditional décor and modern elegance',
          category: 'wedding',
          image_url: '/images/gallery-1.jpg',
          date: 'December 2024',
          featured: true,
          created_at: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Annual Corporate Summit',
          description: 'Industry leaders gathered for networking, keynotes, and recognition in our premium conference setup',
          category: 'corporate',
          image_url: '/images/gallery-2.jpg',
          date: 'November 2024',
          featured: false,
          created_at: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'Grand Walima Reception',
          description: 'An enchanting evening reception with elegant table settings, ambient lighting, and five-star cuisine',
          category: 'wedding',
          image_url: '/images/gallery-3.jpg',
          date: 'October 2024',
          featured: true,
          created_at: new Date().toISOString(),
        },
        {
          id: '4',
          title: 'Cultural Heritage Festival',
          description: 'A vibrant celebration showcasing traditional performances, authentic cuisine, and community spirit',
          category: 'social',
          image_url: '/images/gallery-4.jpg',
          date: 'September 2024',
          featured: false,
          created_at: new Date().toISOString(),
        },
        {
          id: '5',
          title: 'Tech Product Launch',
          description: 'Cutting-edge product unveiling with interactive demos, keynote presentations, and media coverage',
          category: 'corporate',
          image_url: '/images/gallery-5.jpg',
          date: 'August 2024',
          featured: false,
          created_at: new Date().toISOString(),
        },
        {
          id: '6',
          title: 'Mehndi Night Extravaganza',
          description: 'A colorful pre-wedding celebration with traditional music, dance, and stunning décor',
          category: 'wedding',
          image_url: '/images/gallery-6.jpg',
          date: 'July 2024',
          featured: true,
          created_at: new Date().toISOString(),
        },
        {
          id: '7',
          title: 'Engagement Soirée',
          description: 'An intimate yet elegant engagement party with personalized touches and sophisticated ambiance',
          category: 'wedding',
          image_url: '/images/event-wedding.jpg',
          date: 'June 2024',
          featured: false,
          created_at: new Date().toISOString(),
        },
        {
          id: '8',
          title: 'Charity Gala Dinner',
          description: 'Fundraising event combining philanthropy with elegance, featuring live entertainment and auctions',
          category: 'social',
          image_url: '/images/event-social.jpg',
          date: 'May 2024',
          featured: true,
          created_at: new Date().toISOString(),
        },
      ])
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.gallery-hero-line',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      )

      // Filter buttons
      gsap.fromTo(
        '.filter-btn',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.5,
          ease: 'power3.out',
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (events.length === 0) return

    const ctx = gsap.context(() => {
      // Gallery items reveal
      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [events, filter])

  const filteredEvents = filter === 'all'
    ? events
    : events.filter(event => event.category === filter)

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'wedding', label: 'Weddings' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'social', label: 'Social Events' },
  ]

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
              A collection of memorable celebrations and exceptional moments
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`filter-btn px-8 py-3 text-sm uppercase tracking-widest font-light transition-all duration-500 opacity-0 ${
                  filter === category.value
                    ? 'bg-primary-black text-secondary-white'
                    : 'border border-primary-black hover:bg-primary-black hover:text-secondary-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-section">
        <div className="container-custom">
          <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <article key={event.id} className="gallery-item opacity-0 group">
                <div className="space-y-6">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary-warm">
                    <Image
                      src={event.image_url}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
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
                </div>
              </article>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg font-light text-primary-black/40">
                No events found in this category
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
