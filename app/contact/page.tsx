'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { supabase, type ContactSubmission } from '@/lib/supabase'

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    guest_count: '',
    event_date: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        '.contact-hero-line',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      )

      // Form reveal
      gsap.fromTo(
        '.contact-form',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: 'power3.out',
        }
      )

      // Info cards
      gsap.fromTo(
        '.info-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.info-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          event_type: formData.event_type,
          guest_count: formData.guest_count ? parseInt(formData.guest_count) : null,
          event_date: formData.event_date,
          message: formData.message,
        },
      ])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        event_type: '',
        guest_count: '',
        event_date: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-secondary-beige">
        <div className="container-custom text-center space-y-8">
          <div className="overflow-hidden">
            <h1 className="contact-hero-line font-serif text-display-lg font-light opacity-0">
              Get in Touch
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="contact-hero-line text-lg md:text-xl font-light opacity-60 max-w-2xl mx-auto opacity-0">
              Let&apos;s start planning your extraordinary event
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-section-lg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="contact-form opacity-0 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider font-light">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none transition-colors duration-300 font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider font-light">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none transition-colors duration-300 font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm uppercase tracking-wider font-light">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none transition-colors duration-300 font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="event_type" className="block text-sm uppercase tracking-wider font-light">
                    Event Type *
                  </label>
                  <select
                    id="event_type"
                    name="event_type"
                    required
                    value={formData.event_type}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none transition-colors duration-300 font-light"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="social">Social Gathering</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="guest_count" className="block text-sm uppercase tracking-wider font-light">
                    Expected Guest Count
                  </label>
                  <input
                    type="number"
                    id="guest_count"
                    name="guest_count"
                    value={formData.guest_count}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none transition-colors duration-300 font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="event_date" className="block text-sm uppercase tracking-wider font-light">
                    Preferred Event Date
                  </label>
                  <input
                    type="date"
                    id="event_date"
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none transition-colors duration-300 font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm uppercase tracking-wider font-light">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-secondary-beige border border-primary-black/20 focus:border-primary-black outline-none transition-colors duration-300 font-light resize-none"
                  placeholder="Tell us more about your event..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-5 bg-primary-black text-secondary-white text-sm uppercase tracking-widest font-light transition-all duration-500 hover:bg-primary-gray disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <p className="text-sm font-light text-green-700 bg-green-50 px-6 py-4 border border-green-200">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-sm font-light text-red-700 bg-red-50 px-6 py-4 border border-red-200">
                  Something went wrong. Please try again or contact us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="info-section py-section bg-secondary-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="info-card text-center space-y-4 opacity-0">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-serif text-2xl font-light">Visit Us</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                Al Fazal Marquee<br />
                Main Boulevard, Premium District<br />
                Easily accessible from all major routes<br />
                <span className="text-accent-earth">Ample parking available</span>
              </p>
            </div>

            <div className="info-card text-center space-y-4 opacity-0">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-serif text-2xl font-light">Call Us</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                <span className="text-accent-earth font-medium">Bookings & Inquiries</span><br />
                +92 300 1234567<br />
                +92 321 7654321<br />
                <span className="text-xs">Available 10 AM - 10 PM Daily</span>
              </p>
            </div>

            <div className="info-card text-center space-y-4 opacity-0">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="font-serif text-2xl font-light">Email Us</h3>
              <p className="text-sm font-light text-primary-black/60 leading-relaxed">
                <span className="text-accent-earth">General Inquiries</span><br />
                info@alfazalmarquee.com<br />
                <span className="text-accent-earth">Events Team</span><br />
                events@alfazalmarquee.com
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="mt-16 text-center space-y-4">
            <h3 className="font-serif text-2xl font-light">Office Hours</h3>
            <div className="text-sm font-light text-primary-black/60 space-y-2">
              <p><span className="font-medium text-primary-black">Monday - Friday:</span> 10:00 AM - 8:00 PM</p>
              <p><span className="font-medium text-primary-black">Saturday - Sunday:</span> 10:00 AM - 10:00 PM</p>
              <p className="text-accent-earth pt-2">Available for site visits by appointment</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
