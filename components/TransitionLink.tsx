'use client'

import { useRouter } from 'next/navigation'
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

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()

        // Call optional onClick handler
        if (onClick) {
            onClick()
        }

        // Exit animation
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
