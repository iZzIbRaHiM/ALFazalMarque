'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { supabase, type Service } from '@/lib/supabase'

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, string> = {
  wedding: '💍',
  corporate: '🏢',
  decor: '✨',
  catering: '🍽️',
  management: '📋',
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null)
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    fetchServices()
  }, [])

  async function fetchServices() {
    const { data } = await supabase
      .from('services')
      .select('*')
      .order('order', { ascending: true })

    if (data && data.length > 0) {
      setServices(data)
    } else {
      // Fallback comprehensive services
      setServices([
        {
          id: '1',
          title: 'Wedding Events',
          description: 'Transform your special day into an unforgettable celebration at Al Fazal Marquee. We specialize in creating magical wedding experiences with meticulous attention to detail, from the initial planning stages to the final farewell. Our dedicated wedding team works closely with you to understand your vision and bring it to life with elegance and precision.',
          icon: 'wedding',
          order: 1,
          created_at: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Corporate Events',
          description: 'Elevate your business gatherings with our professional corporate event solutions. Whether hosting a conference, seminar, product launch, or annual gala, our venue provides the perfect blend of sophistication and functionality. With state-of-the-art audio-visual equipment, flexible seating arrangements, and dedicated support staff, we ensure your corporate message is delivered with impact.',
          icon: 'corporate',
          order: 2,
          created_at: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'Premium Catering',
          description: 'Delight your guests with exceptional culinary experiences crafted by our expert culinary team. From traditional cuisine to contemporary fusion dishes, we offer diverse menu options tailored to your preferences and dietary requirements. Our chefs use only the finest ingredients, ensuring every dish is a masterpiece of flavor and presentation.',
          icon: 'catering',
          order: 3,
          created_at: new Date().toISOString(),
        },
        {
          id: '4',
          title: 'Event Décor & Styling',
          description: 'Create the perfect ambiance with our comprehensive décor and styling services. Our creative team transforms spaces into immersive experiences through custom theme development, elegant floral arrangements, dramatic lighting design, and strategic spatial planning. We work with your aesthetic vision to create a cohesive and stunning visual narrative.',
          icon: 'decor',
          order: 4,
          created_at: new Date().toISOString(),
        },
        {
          id: '5',
          title: 'Event Management',
          description: 'Let our experienced event management team handle every aspect of your celebration. From initial concept development to final execution, we coordinate all elements seamlessly. Our services include vendor management, timeline coordination, on-site supervision, and contingency planning, ensuring a stress-free experience for you and flawless execution for your guests.',
          icon: 'management',
          order: 5,
          created_at: new Date().toISOString(),
        },
      ])
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.services-hero-line',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      )

      // Services reveal
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [services])

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-secondary-beige">
        <div className="container-custom text-center space-y-8">
          <div className="overflow-hidden">
            <h1 className="services-hero-line font-serif text-display-lg font-light opacity-0">
              Our Services
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="services-hero-line text-lg md:text-xl font-light opacity-60 max-w-2xl mx-auto opacity-0">
              Comprehensive event solutions tailored to your unique vision
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section-lg">
        <div className="container-custom">
          <div className="services-grid max-w-5xl mx-auto space-y-20">
            {services.map((service, index) => (
              <article
                key={service.id}
                className={`service-card opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Icon */}
                <div
                  className={`text-center lg:text-left ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <div className="text-7xl md:text-8xl mb-8 inline-block">
                    {iconMap[service.icon] || '•'}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}
                >
                  <h2 className="font-serif text-4xl md:text-5xl font-light">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg font-light leading-relaxed text-primary-black/70">
                    {service.description}
                  </p>

                  {/* Features based on service type */}
                  {service.icon === 'wedding' && (
                    <ul className="space-y-2 text-sm font-light text-primary-black/60">
                      <li>• Traditional & contemporary setups</li>
                      <li>• Bridal suite preparation areas</li>
                      <li>• Stage and seating arrangements</li>
                      <li>• Photography-friendly spaces</li>
                    </ul>
                  )}

                  {service.icon === 'corporate' && (
                    <ul className="space-y-2 text-sm font-light text-primary-black/60">
                      <li>• Audio-visual equipment</li>
                      <li>• Presentation facilities</li>
                      <li>• Networking spaces</li>
                      <li>• Professional atmosphere</li>
                    </ul>
                  )}

                  {service.icon === 'decor' && (
                    <ul className="space-y-2 text-sm font-light text-primary-black/60">
                      <li>• Custom theme development</li>
                      <li>• Floral arrangements</li>
                      <li>• Lighting design</li>
                      <li>• Complete styling services</li>
                    </ul>
                  )}

                  {service.icon === 'catering' && (
                    <ul className="space-y-2 text-sm font-light text-primary-black/60">
                      <li>• Diverse cuisine options</li>
                      <li>• Custom menu planning</li>
                      <li>• Professional service staff</li>
                      <li>• Dietary accommodations</li>
                    </ul>
                  )}

                  {service.icon === 'management' && (
                    <ul className="space-y-2 text-sm font-light text-primary-black/60">
                      <li>• Complete event coordination</li>
                      <li>• Timeline management</li>
                      <li>• Vendor coordination</li>
                      <li>• On-site supervision</li>
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-secondary-beige">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-display-sm font-light">
              Let&apos;s Create Something Exceptional
            </h2>
            <p className="text-lg font-light text-primary-black/70">
              Our team is ready to help you plan an unforgettable event
            </p>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-block px-12 py-5 bg-primary-black text-secondary-white text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-gray"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
