import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-gray text-secondary-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-light">Al Fazal Marquee</h3>
            <p className="text-sm text-secondary-warm font-light leading-relaxed max-w-xs">
              Creating extraordinary moments in an extraordinary space. Your celebration, our expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-wider font-light opacity-60">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm font-light transition-opacity duration-300 hover:opacity-60"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-light transition-opacity duration-300 hover:opacity-60"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm font-light transition-opacity duration-300 hover:opacity-60"
                >
                  Event Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-wider font-light opacity-60">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-light leading-relaxed">
              <li>Main Location</li>
              <li className="text-secondary-warm">Available upon request</li>
              <li className="pt-2">info@alfazalmarquee.com</li>
              <li>+92 XXX XXXXXXX</li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-wider font-light opacity-60">
              Visiting Hours
            </h4>
            <ul className="space-y-3 text-sm font-light leading-relaxed">
              <li>
                <span className="block text-secondary-warm">Monday - Sunday</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
              <li className="pt-2 text-secondary-warm">
                Appointments recommended
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-secondary-warm/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-secondary-warm">
            © {currentYear} Al Fazal Marquee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
