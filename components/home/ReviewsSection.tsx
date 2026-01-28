'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section title reveal
      gsap.fromTo(
        '.reviews-title',
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

      // Review cards staggered reveal
      gsap.fromTo(
        '.review-card',
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.reviews-grid',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const reviews = [
    {
      id: 1,
      image: '/reviews/1.jpeg',
      alt: 'Review by Usman Ali - 5 stars',
    },
    {
      id: 2,
      image: '/reviews/2.jpeg',
      alt: 'Review by Amer Nawaz - 5 stars',
    },
    {
      id: 3,
      image: '/reviews/3.jpeg',
      alt: 'Review by The Z files - 5 stars',
    },
  ]

  return (
    <section ref={sectionRef} className="py-section-lg bg-secondary-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="reviews-title text-center mb-20 opacity-0">
          <p className="text-sm uppercase tracking-widest font-light text-accent-earth mb-4">
            Client Testimonials
          </p>
          <h2 className="font-serif text-display-md font-light mb-8">
            What Our Guests Say
          </h2>
          <p className="text-lg font-light text-primary-black/60 max-w-2xl mx-auto">
            Real experiences from our valued clients
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review) => (
            <article key={review.id} className="review-card opacity-0 group">
              <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-secondary-beige rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={review.image}
                  alt={review.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
