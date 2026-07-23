import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form submit pannum pothu nadakkara velaigal
  const handleSubmit = (e) => {
    e.preventDefault();
    // Inga unga form submission logic (EmailJS / Backend API) podalam
    alert('Manpower request submitted successfully!');
    setIsModalOpen(false); // Form send aanathum modal-ah close pannidum
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-gold/25 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-24">
          
          <NavLink to="/" className="flex items-center gap-4 group">
            <img 
              src="/logo.png" 
              alt="HM International" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
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
            
            {/* Request Manpower Button - Opens Popup Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory tracking-wide hover:bg-gold-dark shadow-md transition-all duration-300 cursor-pointer"
            >
              Request Manpower
            </button>
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
            <button
              onClick={() => {
                setOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-2 text-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory tracking-wide hover:bg-gold-dark transition-colors shadow cursor-pointer"
            >
              Request Manpower
            </button>
          </nav>
        )}
      </header>

      {/* --- POPUP FORM MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg bg-ivory rounded-2xl shadow-2xl border border-gold/30 p-6 md:p-8 animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-ink-soft hover:text-ink p-1 rounded-full hover:bg-gold/10 transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>

            <h3 className="font-display text-2xl font-bold text-ink mb-1">Request Manpower</h3>
            <p className="text-sm text-ink-soft mb-6">Fill out the details below and our team will get back to you shortly.</p>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1">Your Name / Company</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter your name or company" 
                  className="w-full rounded-lg border border-gold/30 px-4 py-2.5 text-sm bg-white text-ink focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@company.com" 
                  className="w-full rounded-lg border border-gold/30 px-4 py-2.5 text-sm bg-white text-ink focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-1">Required Category / Details</label>
                <textarea 
                  rows="3" 
                  required 
                  placeholder="Mention category, quantity, and requirements..." 
                  className="w-full rounded-lg border border-gold/30 px-4 py-2.5 text-sm bg-white text-ink focus:outline-none focus:border-gold resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-ink py-3 text-sm font-semibold text-ivory tracking-wide hover:bg-gold-dark shadow-md transition-all duration-300 cursor-pointer"
              >
                Submit Request
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}