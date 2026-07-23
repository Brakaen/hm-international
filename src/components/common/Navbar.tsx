import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Manpower request submitted successfully!');
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-24">
          
          <NavLink to="/" className="flex items-center gap-4 group">
            <img 
              src="/logo.png" 
              alt="HM International" 
              className="h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-[#0B132B]">
                HM INTERNATIONAL
              </span>
              <span className="text-[11px] uppercase tracking-widest text-slate-600 font-semibold">
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
                    isActive ? 'text-amber-600 font-semibold' : 'text-slate-700 hover:text-amber-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-[#0B132B] px-6 py-3 text-sm font-semibold text-white tracking-wide hover:bg-slate-800 shadow-md transition-all duration-300 cursor-pointer"
            >
              Request Manpower
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0B132B] p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <nav className="md:hidden border-t border-slate-200 bg-white px-6 py-6 flex flex-col gap-5 shadow-lg">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium uppercase tracking-wide transition-colors ${
                    isActive ? 'text-amber-600 font-semibold' : 'text-slate-700 hover:text-amber-600'
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
              className="mt-2 text-center rounded-full bg-[#0B132B] px-6 py-3 text-sm font-semibold text-white tracking-wide hover:bg-slate-800 transition-colors shadow cursor-pointer"
            >
              Request Manpower
            </button>
          </nav>
        )}
      </header>

      {/* --- POPUP FORM MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg bg-white text-[#0B132B] rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8 animate-in fade-in zoom-in duration-200">
            
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-[#0B132B] p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>

            <h3 className="font-display text-2xl font-bold text-[#0B132B] mb-1">Request Manpower</h3>
            <p className="text-sm text-slate-600 mb-6">Fill out the details below and our team will get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">Your Name / Company</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter your name or company" 
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm bg-slate-50 text-[#0B132B] placeholder-slate-400 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@company.com" 
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm bg-slate-50 text-[#0B132B] placeholder-slate-400 focus:outline-none focus:border-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">Required Category / Details</label>
                <textarea 
                  rows={3} 
                  required 
                  placeholder="Mention category, quantity, and requirements..." 
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm bg-slate-50 text-[#0B132B] placeholder-slate-400 focus:outline-none focus:border-amber-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#0B132B] py-3 text-sm font-semibold text-white tracking-wide hover:bg-slate-800 shadow-md transition-all duration-300 cursor-pointer"
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