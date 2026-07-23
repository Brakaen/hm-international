import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SERVICES, COUNTRIES } from '../data/siteData';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4 font-semibold">Our Expertise</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            Everything handled, <span className="text-gold-light italic">start to finish</span>
          </h1>
          <p className="mt-6 text-ivory/80 text-base md:text-lg max-w-2xl mx-auto">
            We provide end-to-end recruitment and documentation solutions designed to make international employment completely seamless for candidates and employers.
          </p>
        </div>
      </section>

      {/* Detailed Services List Section (Scrollable & Rich) */}
      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-5xl px-5 space-y-16">
          {SERVICES.map((service, index) => {
            const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Star;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id} 
                className={`flex flex-col md:flex-row items-center gap-8 rounded-3xl border border-gold/25 bg-ivory-dim p-8 md:p-12 shadow-sm transition-all hover:border-gold/50 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon & Badge Side */}
                <div className="flex flex-col items-center justify-center shrink-0 w-full md:w-1/3 text-center bg-gold/10 border border-gold/20 rounded-2xl p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink shadow-md mb-4">
                    <Icon size={32} />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                    Service 0{index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">
                    HM International
                  </h3>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-4">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
                    {service.title}
                  </h2>
                  <p className="text-base text-ink-soft/90 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-ink font-medium">
                      <CheckCircle2 size={18} className="text-gold" />
                      <span>Zero hidden charges with complete transparency</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-ink font-medium">
                      <CheckCircle2 size={18} className="text-gold" />
                      <span>Dedicated support team based in Trichy</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-gold transition-colors"
                    >
                      Enquire about this service <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Target Countries Banner Section */}
      <section className="bg-ink text-ivory py-20 border-t border-gold/20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-3 font-semibold">Global Reach</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Primary Placement Destinations
          </h2>
          <p className="mt-4 text-ivory/70 max-w-xl mx-auto text-sm">
            We maintain active partnerships with verified employers across top global economies.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {COUNTRIES.map((country) => (
              <div 
                key={country.id}
                className="rounded-2xl border border-gold/20 bg-ivory/[0.03] p-6 text-center hover:border-gold transition-all"
              >
                <span className="text-3xl mb-2 block">{country.flagEmoji}</span>
                <h3 className="font-display font-semibold text-ivory text-base">{country.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}