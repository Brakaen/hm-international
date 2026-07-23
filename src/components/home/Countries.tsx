import { COUNTRIES } from '../../data/siteData';

export default function Countries() {
  return (
    <section className="bg-ivory-dim">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink text-center">
          Countries we place candidates in
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {COUNTRIES.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-2 rounded-full bg-ivory border border-gold/20 px-5 py-2.5 text-sm text-ink-soft"
            >
              <span className="text-lg" aria-hidden="true">{c.flagEmoji}</span>
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
