import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import ApplyForm from '../components/common/ApplyForm';

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">Services</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">
            Everything handled, start to finish
          </h1>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = (Icons[service.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Star;
            return (
              <div
                key={service.id}
                className="rounded-2xl border border-gold/20 bg-ivory-dim p-7 hover:border-gold/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon size={22} />
                </div>
                <h2 className="mt-5 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-ink-soft/80">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <ApplyForm />
    </>
  );
}
