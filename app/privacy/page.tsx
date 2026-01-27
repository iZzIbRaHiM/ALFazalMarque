export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-secondary-beige min-h-screen">
      <div className="container-custom max-w-4xl">
        <h1 className="font-serif text-display-md font-light mb-12">Privacy Policy</h1>
        
        <div className="space-y-8 text-base font-light leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-light mb-4">Information Collection</h2>
            <p className="text-primary-black/70">
              We collect information you provide when contacting us through our website forms,
              including your name, email, phone number, and event details.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-4">Information Use</h2>
            <p className="text-primary-black/70">
              The information we collect is used solely to respond to your inquiries and provide
              information about our venue and services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-4">Data Security</h2>
            <p className="text-primary-black/70">
              We implement appropriate security measures to protect your personal information
              against unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light mb-4">Contact</h2>
            <p className="text-primary-black/70">
              For questions about this privacy policy, please contact us at
              info@alfazalmarquee.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
