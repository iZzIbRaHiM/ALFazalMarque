'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { supabase, type Service } from '@/lib/supabase'

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, string> = {
  wedding: '💍',
  corporate: '🏢',
  decor: '✨',
  catering: '🍽️',
  management: '📋',
}

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetchServices()
  }, [])

  async function fetchServices() {
    const { data } = await supabase
      .from('services')
      .select('*')
      .order('order', { ascending: true })
      .limit(5)

    if (data && data.length > 0) {
      setServices(data)
    } else {
      // Fallback services for visualization
      setServices([
        {
          id: '1',
          title: 'Wedding Events',
          description: 'From intimate ceremonies to grand receptions, we create magical moments with personalized décor, elegant staging, and comprehensive wedding planning services.',
          icon: 'wedding',
          order: 1,
          created_at: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Corporate Events',
          description: 'Professional venue solutions for conferences, seminars, product launches, and corporate galas with modern AV equipment and business-ready facilities.',
          icon: 'corporate',
          order: 2,
          created_at: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'Premium Catering',
          description: 'Exquisite culinary experiences featuring diverse menu options, from traditional feasts to contemporary fusion cuisine, crafted by expert chefs.',
          icon: 'catering',
          order: 3,
          created_at: new Date().toISOString(),
        },
        {
          id: '4',
          title: 'Event Décor & Styling',
          description: 'Transform your vision into reality with custom theme development, floral arrangements, lighting design, and complete venue transformation services.',
          icon: 'decor',
          order: 4,
          created_at: new Date().toISOString(),
        },
        {
          id: '5',
          title: 'Event Management',
          description: 'End-to-end event coordination including timeline management, vendor liaison, on-site supervision, and seamless execution of every detail.',
          icon: 'management',
          order: 5,
          created_at: new Date().toISOString(),
        },
      ])
    }
  }

  useLayoutEffect(() => {
    if (services.length === 0) return

    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        '.services-title',
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

      // Service items stagger
      gsap.fromTo(
        '.service-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-list',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [services])

  return (
    <section ref={sectionRef} className="py-section-lg bg-secondary-beige">
      <div className="container-custom">
        {/* Section Header */}
        <div className="services-title text-center mb-20 opacity-0">
          <p className="text-sm uppercase tracking-widest font-light text-accent-earth mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-display-md font-light mb-8">
            Our Services
          </h2>
          <p className="text-lg font-light text-primary-black/60 max-w-2xl mx-auto">
            Comprehensive event solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Services List */}
        <div className="services-list max-w-5xl mx-auto space-y-1">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-item opacity-0 group border-b border-primary-black/10 last:border-b-0"
            >
              <Link href="/services" className="block py-8 md:py-10">
                <div className="flex items-start gap-6 md:gap-12">
                  {/* Icon */}
                  <div className="text-3xl md:text-4xl flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
                    {iconMap[service.icon] || '•'}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="font-serif text-2xl md:text-3xl font-light transition-opacity duration-300 group-hover:opacity-60">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base font-light text-primary-black/60 leading-relaxed max-w-3xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block text-2xl text-primary-black/20 transition-all duration-300 group-hover:text-primary-black group-hover:translate-x-2">
                    →
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-block px-10 py-4 border border-primary-black text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-black hover:text-secondary-white"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
