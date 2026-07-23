import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/siteData';

export default function Testimonials() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink text-center">
          Stories from the field
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.id} className="rounded-2xl bg-ivory-dim p-7">
              <Quote className="text-gold" size={22} />
              <blockquote className="mt-4 text-sm text-ink-soft leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-ink">
                {t.name}
                <span className="block font-normal text-ink-soft/70">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
