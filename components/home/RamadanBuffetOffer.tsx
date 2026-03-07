'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function RamadanBuffetOffer() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section title reveal
      gsap.fromTo(
        '.ramadan-title',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Content reveal
      gsap.fromTo(
        '.ramadan-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.ramadan-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Image reveals - optimized
      gsap.fromTo(
        '.ramadan-image-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.ramadan-images',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const buffetImages = [
    // Latest Featured Images
    { 
      src: '/images/ramadan-buffet/buffet-new-1.jpg', 
      alt: 'Grand Ramadan buffet showcase at Al Fazal Palace Dina - Premium Iftar experience Jhelum' 
    },
    { 
      src: '/images/ramadan-buffet/buffet-new-2.jpg', 
      alt: 'Spectacular Ramadan feast presentation Dina Marquee - Best family Iftar buffet near Jhelum' 
    },
    // New Images - Featured First
    { 
      src: '/images/ramadan-buffet/buffet-1.jpg', 
      alt: 'Premium Ramadan buffet delicacies at Al Fazal Palace Dina - Best Iftar deals Jhelum' 
    },
    { 
      src: '/images/ramadan-buffet/buffet-2.jpg', 
      alt: 'Exquisite Iftar spread at event marquee Dina - Family buffet City Housing Jhelum' 
    },
    { 
      src: '/images/ramadan-buffet/buffet-3.jpg', 
      alt: 'Traditional Pakistani Ramadan cuisine near Jhelum - Iftar buffet Sohawa and Mirpur' 
    },
    { 
      src: '/images/ramadan-buffet/New Images/WhatsApp Image 2026-03-06 at 8.37.27 PM.jpeg', 
      alt: 'Gourmet Ramadan buffet presentation Dina Marquee - Premium Iftar dining experience' 
    },
    { 
      src: '/images/ramadan-buffet/New Images/WhatsApp Image 2026-03-06 at 8.38.59 PM (1).jpeg', 
      alt: 'Authentic Ramadan dinner setup near Jhelum - Family Iftar buffet with kids free offer' 
    },
    { 
      src: '/images/ramadan-buffet/buffet-6.jpg', 
      alt: 'Lavish Iftar buffet at Al Fazal Palace - Best Ramadan deals Dina and Jhelum area' 
    },
    { 
      src: '/images/ramadan-buffet/New Images/WhatsApp Image 2026-03-06 at 8.38.56 PM.jpeg', 
      alt: 'Complete Ramadan buffet spread at Dina event marquee - Serving Sohawa and Mirpur' 
    },
    { 
      src: '/images/ramadan-buffet/buffet-8.jpg', 
      alt: 'Fresh Ramadan delicacies and traditional dishes - Family Iftar buffet City Housing Jhelum' 
    },
    // Previous Images
    { 
      src: '/images/ramadan-buffet/New Images/WhatsApp Image 2026-03-06 at 8.38.58 PM (1).jpeg', 
      alt: 'Ramadan buffet setup at Al Fazal Palace Marquee Dina - Best Iftar deals in Jhelum area' 
    },
    { 
      src: '/images/ramadan-buffet/buffet-spread.jpg', 
      alt: 'Traditional Iftar buffet spread near Jhelum - Family dining at Dina marquee' 
    },
    { 
      src: '/images/ramadan-buffet/New Images/WhatsApp Image 2026-03-06 at 8.38.58 PM (2).jpeg', 
      alt: 'Iftar feast at Dina event marquee - Ramadan dinner near Sohawa and Mirpur' 
    },
    { 
      src: '/images/ramadan-buffet/dining-hall.jpg', 
      alt: 'Grand dining hall Ramadan setup Dina Marquee - Event space for Iftar gatherings' 
    },
    { 
      src: '/images/ramadan-buffet/New Images/WhatsApp Image 2026-03-06 at 8.38.58 PM.jpeg', 
      alt: 'Live cooking stations Ramadan buffet Dina - Fresh Iftar food preparation' 
    },
    { 
      src: '/images/ramadan-buffet/desserts.jpg', 
      alt: 'Traditional Ramadan desserts buffet near Jhelum - Sweet delicacies for Iftar' 
    },
  ]

  return (
    <section ref={sectionRef} className="pt-20 pb-12 bg-gradient-to-b from-secondary-white via-secondary-beige to-secondary-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent-earth/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="ramadan-title text-center mb-16 opacity-0">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest font-light text-accent-earth">
              🇵🇰 Special Ramadan Offer
            </span>
          </div>
          <h2 className="font-serif text-display-md font-light mb-6">
            Grand Ramadan Buffet in Dina
          </h2>
          <p className="text-lg md:text-xl font-light text-primary-black/70 max-w-3xl mx-auto leading-relaxed">
            Experience the finest Iftar buffet near Jhelum at Al Fazal Palace Marquee. 
            Serving families from Dina, City Housing Jhelum, Sohawa, and Mirpur with authentic flavors and exceptional hospitality.
          </p>
        </div>

        {/* Offer Details Grid */}
        <div className="ramadan-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Price */}
          <div className="ramadan-content opacity-0 text-center p-8 bg-secondary-white border border-accent-earth/20 transition-all duration-500 hover:shadow-lg hover:border-accent-earth/40">
            <div className="mb-4">
              <span className="text-5xl font-serif font-light text-accent-earth">₨ 2,799</span>
            </div>
            <h3 className="font-serif text-2xl font-light mb-3">Per Person</h3>
            <p className="text-sm font-light text-primary-black/60 leading-relaxed">
              Enjoy an unlimited buffet featuring traditional Pakistani cuisine, live cooking stations, and premium desserts
            </p>
          </div>

          {/* Family Discount */}
          <div className="ramadan-content opacity-0 text-center p-8 bg-accent-earth/5 border border-accent-earth/30 transition-all duration-500 hover:shadow-lg hover:border-accent-earth/50">
            <div className="mb-4">
              <span className="text-5xl font-serif font-light text-accent-earth">10%</span>
            </div>
            <h3 className="font-serif text-2xl font-light mb-3">Family Discount</h3>
            <p className="text-sm font-light text-primary-black/60 leading-relaxed">
              Special savings for families celebrating Iftar together. Best Iftar deals in Jhelum and surrounding areas
            </p>
          </div>

          {/* Kids Free */}
          <div className="ramadan-content opacity-0 text-center p-8 bg-secondary-white border border-accent-earth/20 transition-all duration-500 hover:shadow-lg hover:border-accent-earth/40">
            <div className="mb-4">
              <span className="text-5xl font-serif font-light text-accent-earth">FREE</span>
            </div>
            <h3 className="font-serif text-2xl font-light mb-3">Kids Under 5</h3>
            <p className="text-sm font-light text-primary-black/60 leading-relaxed">
              Children under 5 years eat free at our family Iftar buffet in City Housing Jhelum area
            </p>
          </div>
        </div>

        {/* SEO-Optimized Content Section */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="ramadan-content opacity-0 prose prose-lg max-w-none">
            <h3 className="font-serif text-3xl font-light text-center mb-6">
              Premium Ramadan Buffet Experience Near Jhelum
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base font-light leading-relaxed text-primary-black/70">
              <div>
                <p className="mb-4">
                  Al Fazal Palace Marquee proudly presents the most sought-after <strong>Ramadan buffet in Dina</strong>, 
                  perfectly positioned to serve the communities of Jhelum, City Housing Jhelum, Sohawa, and Mirpur. 
                  Our grand venue offers an authentic Iftar experience with traditional flavors and modern comfort.
                </p>
                <p>
                  Searching for the <strong>best Iftar deals Jhelum</strong> has to offer? Our event marquee combines 
                  exceptional value with premium quality, making it the ideal destination for breaking fast with family and friends.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  As the leading <strong>event marquee Dina</strong> for Ramadan specials, we welcome guests from across the region. 
                  Whether you&apos;re coming from City Housing, Sohawa, or Mirpur, our <strong>family Iftar buffet</strong> provides 
                  a warm, elegant atmosphere perfect for the holy month.
                </p>
                <p>
                  Experience our <strong>Ramadan dinner Sohawa</strong> residents trust, and discover why our <strong>Iftar buffet near Mirpur</strong> is the talk of the town. Reserve your table today for an unforgettable Ramadan celebration.
                </p>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="ramadan-content opacity-0">
            <div className="space-y-3">
              <h4 className="font-serif text-xl font-light mb-4">What&apos;s Included</h4>
              <ul className="space-y-2 text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="text-accent-earth mt-1">✓</span>
                  <span>50+ traditional Pakistani dishes and live cooking stations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-earth mt-1">✓</span>
                  <span>Premium dessert selection and fresh fruit bar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-earth mt-1">✓</span>
                  <span>Free beverages with zero hidden charges and traditional drinks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-earth mt-1">✓</span>
                  <span>Elegant air-conditioned dining hall with family seating</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ramadan Buffet Gallery Grid */}
        <div className="ramadan-images mb-12">
          <h3 className="font-serif text-3xl font-light text-center mb-10">
            A Glimpse of Our Ramadan Buffet
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {buffetImages.map((image, index) => (
              <div key={index} className="ramadan-image-item opacity-0 group">
                <div className="relative aspect-[6/5] overflow-hidden bg-secondary-warm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={index < 4 ? "eager" : "lazy"}
                    quality={75}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="ramadan-content text-center opacity-0">
          <div className="inline-block">
            <a
              href="https://api.whatsapp.com/send?phone=923005451991&text=Hi%20I%20want%20to%20book%20a%20table%20for%20Ramadan%20Buffet%20at%20Al%20Fazal%20Palace%20Marquee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 bg-accent-earth text-secondary-white text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-black hover:shadow-lg"
            >
              Reserve Your Table Now
            </a>
          </div>
          <p className="mt-6 text-sm font-light text-primary-black/60">
            Limited seating available • Book early for Iftar and dinner slots
          </p>
        </div>

        {/* SEO Hidden Content for Rich Snippets */}
        <div className="sr-only" itemScope itemType="https://schema.org/Restaurant">
          <meta itemProp="name" content="Al Fazal Palace Marquee Ramadan Buffet" />
          <meta itemProp="description" content="Best Ramadan buffet in Dina serving Jhelum, City Housing Jhelum, Sohawa, and Mirpur. Family Iftar buffet with 10% discount and kids under 5 eat free." />
          <meta itemProp="servesCuisine" content="Pakistani" />
          <meta itemProp="priceRange" content="₨₨" />
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="streetAddress" content="G.T Road" />
            <meta itemProp="addressLocality" content="Dina" />
            <meta itemProp="addressRegion" content="Punjab" />
            <meta itemProp="addressCountry" content="PK" />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary-beige/50 to-transparent" />
    </section>
  )
}
