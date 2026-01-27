export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-secondary-beige min-h-screen">
      <div className="container-custom max-w-4xl">
        <h1 className="font-serif text-display-md font-light mb-12">Terms of Service</h1>
        
        <div className="space-y-8 text-base font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-light mb-4">Website Use</h2>
            <p className="text-primary-black/70">
              This website is provided for informational purposes about Al Fazal Marquee&apos;s
              venue and services. Use of this website constitutes acceptance of these terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-4">Intellectual Property</h2>
            <p className="text-primary-black/70">
              All content on this website, including text, images, and design, is the property
              of Al Fazal Marquee and is protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-4">Venue Booking</h2>
            <p className="text-primary-black/70">
              Inquiries submitted through this website do not constitute a confirmed booking.
              All bookings are subject to availability and formal agreement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-4">Contact</h2>
            <p className="text-primary-black/70">
              For questions about these terms, please contact us at info@alfazalmarquee.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
