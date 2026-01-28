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
                  className="text-xl transition-opacity duration-300 hover:opacity-60"
                  aria-label="Instagram"
                >
                  📸
                </a>
                <a
                  href="https://www.facebook.com/share/1EMzjGDB66/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl transition-opacity duration-300 hover:opacity-60"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="https://www.tiktok.com/@alfazalpalacemarquee?_r=1&_t=ZS-93SJ9H7CsIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl transition-opacity duration-300 hover:opacity-60"
                  aria-label="TikTok"
                >
                  🎵
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
