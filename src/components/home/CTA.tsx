import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="bg-gold">
      <div className="mx-auto max-w-6xl px-5 py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink max-w-lg">
          Ready to take the next step, at home or abroad?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-ivory hover:bg-ink-soft transition-colors"
          >
            Request Manpower
          </Link>
          <a
            href="#apply"
            className="rounded-full border border-ink px-7 py-3.5 text-sm font-medium text-ink hover:bg-ink hover:text-ivory transition-colors"
          >
            Apply for a Job
          </a>
        </div>
      </div>
    </section>
  );
}
