'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

// Custom hook for GSAP animations with proper cleanup
export function useGSAP(
  callback: (context: gsap.Context) => void,
  dependencies: any[] = []
) {
  const ref = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx)
    }, ref)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return ref
}

// Animation Grammar Functions
export const animations = {
  // 1. Initial Page Load Reveal
  pageLoadReveal: (element: string | Element, delay: number = 0) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay,
        ease: 'power3.out',
      }
    )
  },

  // 2. Text Line Reveal (Split-Text Style)
  textLineReveal: (lines: string | Element, staggerDelay: number = 0.1) => {
    return gsap.fromTo(
      lines,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: staggerDelay,
        ease: 'power3.out',
      }
    )
  },

  // 3. Scroll-Triggered Section Reveal
  scrollReveal: (element: string | Element, triggerElement?: string | Element) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: triggerElement || element,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    )
  },

  // 4. Image Reveal Animation
  imageReveal: (element: string | Element, delay: number = 0) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 1.1,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        delay,
        ease: 'power3.out',
      }
    )
  },

  // 5. Parallax Image Drift
  parallaxDrift: (element: string | Element, amount: number = 100) => {
    return gsap.to(element, {
      y: amount,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
  },

  // Menu animation
  menuReveal: (items: string | Element) => {
    return gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      }
    )
  },

  menuHide: (items: string | Element) => {
    return gsap.to(items, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power3.in',
    })
  },
}
