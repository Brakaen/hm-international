import { MapPin, Clock, Mail, ShieldCheck } from 'lucide-react';
import { NAV_LINKS } from '../../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory-dim border-t border-gold/20">
      {/* Footer Content with reduced padding */}
      <div className="mx-auto max-w-6xl px-5 py-10 grid gap-8 md:grid-cols-3">
        
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            {/* Typo fixed here: changed from .jepg to .jpeg */}
            <img src="/logo.jpeg" alt="HM International Logo" className="h-9 w-auto object-contain" />
            <span className="font-display text-lg font-semibold text-ivory">HM International</span>
          </div>
          <p className="text-xs leading-relaxed text-ivory-dim/80">
            Employment consultant helping candidates from Tiruchirappalli and beyond find trusted
            work opportunities overseas.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="font-display text-base text-gold-light mb-3 font-medium">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <a href={link.path} className="hover:text-gold-light transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit Us / Contact Column */}
        <div>
          <h3 className="font-display text-base text-gold-light mb-3 font-medium">Visit Us</h3>
          <ul className="space-y-2 text-xs text-ivory-dim/90">
            <li className="flex gap-2 items-start">
              <MapPin size={16} className="shrink-0 text-gold mt-0.5" />
              <span>
                3rd Floor, ABS Complex, 38-39, Bharathidasan Salai, Melapudur, Cantonment, Trichy
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <Clock size={16} className="shrink-0 text-gold" />
              <span>Open today · Closes 7 pm</span>
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={16} className="shrink-0 text-gold" />
              <a href="mailto:info@hminternational.example" className="hover:text-gold-light">
                info@hminternational.example
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory-dim/10 py-4">
        <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory-dim/70">
          <div>
            © {new Date().getFullYear()} HM International. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-gold-light font-medium">
            <ShieldCheck size={15} className="text-gold" />
            <span>Verified Recruitment Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}