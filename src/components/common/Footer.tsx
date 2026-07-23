import { MapPin, Clock, Mail } from 'lucide-react';
import { NAV_LINKS } from '../../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory-dim">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="HM International" className="h-10 w-10 rounded-full" />
            <span className="font-display text-lg font-semibold text-ivory">HM International</span>
          </div>
          <p className="text-sm leading-relaxed text-ivory-dim/80">
            Employment consultant helping candidates from Tiruchirappalli and beyond find trusted
            work opportunities overseas.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-light mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <a href={link.path} className="hover:text-gold-light transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-light mb-4">Visit Us</h3>
          <ul className="space-y-3 text-sm text-ivory-dim/90">
            <li className="flex gap-2">
              <MapPin size={18} className="shrink-0 text-gold" />
              <span>
                3rd Floor, ABS Complex, 38-39, Bharathidasan Salai, Melapudur, Cantonment,
                Tiruchirappalli, Tamil Nadu 620001
              </span>
            </li>
            <li className="flex gap-2">
              <Clock size={18} className="shrink-0 text-gold" />
              <span>Open today · Closes 7 pm</span>
            </li>
            <li className="flex gap-2">
              <Mail size={18} className="shrink-0 text-gold" />
              <a href="mailto:info@hminternational.example" className="hover:text-gold-light">
                info@hminternational.example
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory-dim/10 py-5 text-center text-xs text-ivory-dim/60">
        © {new Date().getFullYear()} HM International. All rights reserved.
      </div>
    </footer>
  );
}
