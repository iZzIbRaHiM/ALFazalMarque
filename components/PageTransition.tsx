'use client'

import { useLayoutEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const containerRef = useRef<HTMLDivElement>(null)
    const isFirstRender = useRef(true)

    useLayoutEffect(() => {
        // Skip animation on first render
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        const ctx = gsap.context(() => {
            // Page enter animation
            gsap.fromTo(
                containerRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    clearProps: 'all'
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [pathname])

    return (
        <div ref={containerRef} className="page-transition-wrapper">
            {children}
        </div>
    )
}
