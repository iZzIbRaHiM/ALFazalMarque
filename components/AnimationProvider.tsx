'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Smooth scroll configuration
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    })

    // Refresh ScrollTrigger on page load
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
