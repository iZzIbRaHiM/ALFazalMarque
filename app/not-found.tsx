'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.not-found-content',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.15 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen flex items-center justify-center bg-secondary-beige">
      <div className="container-custom text-center space-y-8 py-20">
        <div className="not-found-content opacity-0">
          <h1 className="font-serif text-display-xl font-light">404</h1>
        </div>
        
        <div className="not-found-content space-y-4 opacity-0">
          <h2 className="font-serif text-display-sm font-light">
            Page Not Found
          </h2>
          <p className="text-lg font-light text-primary-black/60 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="not-found-content flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 opacity-0">
          <Link
            href="/"
            className="inline-block px-10 py-4 bg-primary-black text-secondary-white text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-gray"
          >
            Go Home
          </Link>
          <Link
            href="/#contact"
            className="inline-block px-10 py-4 border border-primary-black text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-black hover:text-secondary-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
