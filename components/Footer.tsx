import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-gray text-secondary-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-light">Al Fazal Palace Marquee</h3>
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
              <li>Al Fazal Palace Marquee , G.T Road , DIna</li>
              <li>
                <a
                  href="https://maps.app.goo.gl/Eh5JVdAtuef5Ymv9A?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-warm hover:underline"
                >
                  View Location on Map
                </a>
              </li>
              <li className="pt-2">info@alfazalmarquee.com</li>
              <li>+92 300 5451991</li>
            </ul>
          </div>

          {/* Hours & Socials */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-wider font-light opacity-60">
              Visiting Hours
            </h4>
            <ul className="space-y-3 text-sm font-light leading-relaxed">
              <li>
                <span className="block text-secondary-warm">Monday - Sunday</span>
                <span>9:00 AM - 10:00 PM</span>
              </li>
              <li className="pt-2 text-secondary-warm">
                Appointments recommended
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-4 space-y-3">
              <h4 className="text-sm uppercase tracking-wider font-light opacity-60">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/al_fazal_palace_marquee?igsh=bjJ3eDIzOWtpZm5q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-secondary-white/20 rounded-full transition-all duration-300 hover:bg-secondary-white hover:text-primary-black"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1EMzjGDB66/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-secondary-white/20 rounded-full transition-all duration-300 hover:bg-secondary-white hover:text-primary-black"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@alfazalpalacemarquee?_r=1&_t=ZS-93SJ9H7CsIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-secondary-white/20 rounded-full transition-all duration-300 hover:bg-secondary-white hover:text-primary-black"
                  aria-label="TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
