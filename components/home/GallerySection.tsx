'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function GallerySection() {
    const sectionRef = useRef<HTMLElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Section title reveal
            gsap.fromTo(
                '.gallery-section-title',
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

            // Gallery items staggered reveal
            gsap.fromTo(
                '.gallery-preview-item',
                { opacity: 0, scale: 1.1 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.gallery-preview-grid',
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                }
            )

            // Gallery image parallax
            gsap.utils.toArray<HTMLElement>('.gallery-preview-item .relative').forEach((container) => {
                const image = container.querySelector('img')
                if (image) {
                    gsap.to(image, {
                        y: 30,
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
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    // Featured gallery images
    const galleryImages = [
        { id: 1, src: '/images/exterior-view-1.jpg', alt: 'Al Fazal Palace Exterior' },
        { id: 2, src: '/images/m4.JPG', alt: 'Wedding Celebration' },
        { id: 3, src: '/images/Walima.JPG', alt: 'Walima Reception' },
        { id: 4, src: '/images/m11.JPG', alt: 'Event Setup' },
        { id: 5, src: '/images/m12.JPG', alt: 'Grand Hall' },
        { id: 6, src: '/images/m13.JPG', alt: 'Elegant Decor' },
    ]

    return (
        <section ref={sectionRef} className="py-section-lg bg-secondary-beige">
            <div className="container-custom">
                {/* Section Header */}
                <div className="gallery-section-title text-center mb-20 opacity-0">
                    <p className="text-sm uppercase tracking-widest font-light text-accent-earth mb-4">
                        Our Venue
                    </p>
                    <h2 className="font-serif text-display-md font-light mb-8">
                        Gallery Highlights
                    </h2>
                    <p className="text-lg font-light text-primary-black/60 max-w-2xl mx-auto">
                        A glimpse into our stunning venue and memorable celebrations
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="gallery-preview-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {galleryImages.map((image) => (
                        <div key={image.id} className="gallery-preview-item opacity-0 group">
                            <Link href="/gallery" className="block">
                                <div className="relative aspect-[4/3] overflow-hidden bg-secondary-warm">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-16">
                    <Link
                        href="/gallery"
                        className="inline-block px-10 py-4 border border-primary-black text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-black hover:text-secondary-white"
                    >
                        View Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    )
}
