'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function CinematicLoader() {
  const [done, setDone] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = ''
          setDone(true)
        },
      })

      tl.fromTo(
        '.loader-brand',
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          '.loader-tagline',
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power2.out' },
          1.2
        )
        .fromTo(
          '.loader-shimmer',
          { xPercent: -100, opacity: 1 },
          { xPercent: 100, duration: 1.2, ease: 'power1.inOut' },
          1.8
        )
        .to(
          overlayRef.current,
          { yPercent: -100, duration: 1, ease: 'power4.inOut' },
          3.2
        )
    }, overlayRef)

    // Hard fallback: rAF (and therefore GSAP) is suspended in background
    // tabs, so guarantee the page unlocks even if the timeline never runs.
    const fallback = setTimeout(() => {
      document.body.style.overflow = ''
      setDone(true)
    }, 6000)

    return () => {
      clearTimeout(fallback)
      document.body.style.overflow = ''
      ctx.revert()
    }
  }, [])

  if (done) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-secondary-beige overflow-hidden"
      aria-hidden="true"
    >
      <h2 className="loader-brand font-serif text-4xl md:text-6xl font-light tracking-tight text-center px-6 opacity-0">
        Al Fazal Palace Marquee
      </h2>

      <p className="loader-tagline mt-6 text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-primary-black/50 text-center px-6 opacity-0">
        Where Moments Become Memories
      </p>

      <div
        className="loader-shimmer absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(110deg, transparent 33%, rgba(184, 169, 146, 0.3) 50%, transparent 67%)',
        }}
      />
    </div>
  )
}
