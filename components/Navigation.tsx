'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
      // Animate menu open
      gsap.to('.menu-overlay', {
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
      })
      gsap.fromTo(
        '.menu-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.2,
          ease: 'power3.out',
        }
      )
    } else {
      // Animate menu close
      gsap.to('.menu-item', {
        opacity: 0,
        y: -30,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power3.in',
        onComplete: () => setIsMenuOpen(false),
      })
      gsap.to('.menu-overlay', {
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
      })
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-secondary-white/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom py-6 flex items-center justify-between">
          <Link href="/" className="group">
            <h1 className="font-serif text-2xl md:text-3xl font-light tracking-tight transition-opacity duration-300 group-hover:opacity-60">
              Al Fazal Marquee
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm uppercase tracking-wider font-light transition-opacity duration-300 hover:opacity-60 ${
                    pathname === link.href ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-primary-black transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-primary-black transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-px bg-primary-black transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="menu-overlay fixed inset-0 bg-secondary-beige z-40 opacity-0 flex items-center justify-center lg:hidden">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={link.href} className="menu-item opacity-0">
                <Link
                  href={link.href}
                  className="font-serif text-4xl md:text-5xl font-light tracking-tight transition-opacity duration-300 hover:opacity-60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
