'use client'

import { useRouter, usePathname } from 'next/navigation'
import gsap from 'gsap'
import { ReactNode } from 'react'

interface TransitionLinkProps {
    href: string
    children: ReactNode
    className?: string
    onClick?: () => void
}

export default function TransitionLink({ href, children, className, onClick }: TransitionLinkProps) {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()

        // Call optional onClick handler
        if (onClick) {
            onClick()
        }

        // Handle hash links (/#contact, /#section, etc.)
        if (href.startsWith('/#')) {
            const hash = href.substring(2)
            
            // If already on homepage, just scroll
            if (pathname === '/') {
                const element = document.getElementById(hash)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
                return
            }
            
            // If on different page, navigate to home with transition, then scroll
            gsap.to('.page-transition-wrapper', {
                opacity: 0,
                y: -20,
                duration: 0.4,
                ease: 'power3.in',
                onComplete: () => {
                    router.push(href)
                    // Scroll to element after navigation
                    setTimeout(() => {
                        const element = document.getElementById(hash)
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                        }
                    }, 100)
                },
            })
            return
        }

        // Extract path without hash
        const targetPath = href.split('#')[0]
        const currentPath = pathname

        // If navigating to the same page, skip transition animation
        if (targetPath === currentPath || (targetPath === '/' && currentPath === '/')) {
            router.push(href)
            // Scroll to top if no hash
            if (!href.includes('#')) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            return
        }

        // Exit animation for different pages
        gsap.to('.page-transition-wrapper', {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: 'power3.in',
            onComplete: () => {
                router.push(href)
            },
        })
    }

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    )
}
