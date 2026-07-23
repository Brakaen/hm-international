import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/siteData';
import type { LucideIcon } from 'lucide-react';

export default function Services() {
  return (
    <section className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            What we <span className="text-gold-light">handle for you</span>
          </h2>
          <Link to="/services" className="text-sm text-gold-light hover:underline">
            View all services →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Star;
            return (
              <div
                key={service.id}
                className="rounded-2xl border border-gold-light/15 bg-ivory/[0.03] p-6 hover:border-gold-light/40 transition-colors"
              >
                <Icon size={24} className="text-gold-light" />
                <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-ivory-dim/75">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
