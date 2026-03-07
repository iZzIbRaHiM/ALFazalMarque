'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, string> = {
  wedding: '💐',
  corporate: '💼',
  decor: '🎨',
  catering: '🥘',
  management: '📊',
}

interface Service {
  id: string
  title: string
  description: string
  details: string[]
  icon: string
  image: string
}

const services: Service[] = [
  {
    id: '1',
    title: 'Wedding Events',
    description: 'From intimate ceremonies to grand receptions, we create magical moments with personalized décor, elegant staging, and comprehensive wedding planning services.',
    details: [
      'Traditional and contemporary wedding ceremonies',
      'Walima and Mehndi celebrations',
      'Customized décor and theme development',
      'Bridal room and guest facilities',
      'Professional photography coordination',
      'Music and entertainment setup',
    ],
    icon: 'wedding',
    image: '/images/Walima.JPG',
  },
  {
    id: '2',
    title: 'Corporate Events',
    description: 'Professional venue solutions for conferences, seminars, product launches, and corporate galas with modern AV equipment and business-ready facilities.',
    details: [
      'Conferences and seminars',
      'Product launches and brand activations',
      'Corporate galas and award ceremonies',
      'Team building events',
      'Annual general meetings',
      'State-of-the-art AV equipment',
    ],
    icon: 'corporate',
    image: '/images/m11.JPG',
  },
  {
    id: '3',
    title: 'Premium Catering',
    description: 'Exquisite culinary experiences featuring diverse menu options, from traditional feasts to contemporary fusion cuisine, crafted by expert chefs.',
    details: [
      'Traditional Pakistani cuisine',
      'International menu options',
      'Custom menu development',
      'Live cooking stations',
      'Dietary accommodations',
      'Professional service staff',
    ],
    icon: 'catering',
    image: '/images/m4.JPG',
  },
  {
    id: '4',
    title: 'Full Event Management',
    description: 'End-to-end event coordination including timeline management, vendor liaison, on-site supervision, and seamless execution of every detail.',
    details: [
      'Complete event planning and coordination',
      'Timeline and schedule management',
      'Vendor coordination and liaison',
      'On-site event supervision',
      'Guest management services',
      'Post-event cleanup and closure',
    ],
    icon: 'management',
    image: '/images/m13.JPG',
  },
]

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.services-hero-line',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power2.out' }
      )

      // Service sections
      const serviceSections = gsap.utils.toArray('.service-section')
      serviceSections.forEach((section) => {
        gsap.fromTo(
          section as HTMLElement,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section as HTMLElement,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Image reveals
      const images = gsap.utils.toArray('.service-image')
      images.forEach((image) => {
        gsap.fromTo(
          image as HTMLElement,
          { opacity: 0, scale: 1.1 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: image as HTMLElement,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary-beige">
        <div className="container-custom text-center space-y-8">
          <div className="overflow-hidden">
            <h1 className="services-hero-line font-serif text-display-lg font-light opacity-0">
              Our Services
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="services-hero-line text-lg md:text-xl font-light opacity-60 max-w-2xl mx-auto opacity-0">
              Comprehensive event solutions tailored to bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`service-section py-section-lg opacity-0 ${
            index % 2 === 0 ? 'bg-secondary-white' : 'bg-secondary-beige'
          }`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}>
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{iconMap[service.icon]}</div>
                  <h2 className="font-serif text-display-sm font-light">
                    {service.title}
                  </h2>
                </div>

                <p className="text-lg font-light leading-relaxed text-primary-black/70">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-light">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent-earth mt-1">✓</span>
                        <span className="text-base font-light text-primary-black/70">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="service-image relative aspect-[4/3] overflow-hidden bg-secondary-warm opacity-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us Section */}
      <section className="py-section-lg bg-primary-gray text-secondary-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="font-serif text-display-md font-light">
              Why Choose Al Fazal Palace Marquee
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8">
              <div className="space-y-4">
                <div className="text-4xl">🏆</div>
                <h3 className="font-serif text-2xl font-light">Experience</h3>
                <p className="text-sm font-light text-secondary-warm leading-relaxed">
                  Over 15 years of excellence in creating unforgettable celebrations
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-4xl">👥</div>
                <h3 className="font-serif text-2xl font-light">Expert Team</h3>
                <p className="text-sm font-light text-secondary-warm leading-relaxed">
                  Professional staff dedicated to executing every detail flawlessly
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-4xl">💎</div>
                <h3 className="font-serif text-2xl font-light">Premium Quality</h3>
                <p className="text-sm font-light text-secondary-warm leading-relaxed">
                  Uncompromising quality in service, food, and facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-lg bg-secondary-beige">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-display-sm font-light">
              Ready to Plan Your Event?
            </h2>
            <p className="text-lg font-light text-primary-black/70">
              Let&apos;s discuss how we can make your celebration extraordinary
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Link
                href="/#contact"
                className="inline-block px-12 py-5 bg-primary-black text-secondary-white text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-gray"
              >
                Contact Us
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=923005451991&text=Hi%20I%20found%20your%20website%20and%20I%20am%20interested%20in%20booking%20information"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 border border-primary-black text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-black hover:text-secondary-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
