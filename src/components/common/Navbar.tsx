import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-gold/25 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-24">
        
        {/* Brand Logo & Name (Enlarged) */}
        <NavLink to="/" className="flex items-center gap-4 group">
          <img 
            src="/logo.png" 
            alt="HM International" 
            className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40 transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="flex flex-col">
            <span className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-ink">
              HM International
            </span>
            <span className="text-[11px] uppercase tracking-widest text-gold font-medium">
              Global Manpower Solutions
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-body text-sm font-medium tracking-wide uppercase transition-colors ${
                  isActive ? 'text-gold' : 'text-ink-soft hover:text-gold'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory tracking-wide hover:bg-gold-dark shadow-md transition-all duration-300"
          >
            Request Manpower
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ink p-2 rounded-lg hover:bg-gold/10 transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <nav className="md:hidden border-t border-gold/20 bg-ivory px-6 py-6 flex flex-col gap-5 shadow-lg">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium uppercase tracking-wide transition-colors ${
                  isActive ? 'text-gold' : 'text-ink-soft hover:text-gold'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory tracking-wide hover:bg-gold-dark transition-colors shadow"
          >
            Request Manpower
          </NavLink>
        </nav>
      )}
    </header>
  );
}