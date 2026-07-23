import { ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <>
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">
            Built on trust, one placement at a time
          </h1>
          <p className="mt-6 text-ivory-dim/85 max-w-2xl mx-auto">
            HM International is an employment consultancy based in Tiruchirappalli, Tamil Nadu,
            connecting skilled candidates with verified employers overseas.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-5xl px-5 py-20 grid gap-12 md:grid-cols-2 items-start">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">Our story</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft/85">
              We started HM International with a simple goal: make overseas employment safe,
              transparent, and achievable for candidates from Tiruchirappalli and the surrounding
              region. Every placement is backed by verified employer partnerships and honest
              guidance at every step.
            </p>
            <h2 className="font-display text-2xl font-semibold text-ink mt-8">Our mission</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft/85">
              To be the most trusted bridge between local talent and overseas opportunity, with
              zero hidden costs and full support from application to deployment.
            </p>
          </div>

          <div className="rounded-2xl bg-ivory-dim border border-gold/15 p-8">
            <ShieldCheck size={28} className="text-gold" />
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">
              Licensed & Registered
            </h3>
            <p className="mt-2 text-sm text-ink-soft/80">
              HM International operates as a licensed recruitment consultancy. Our registration
              details are available on request and displayed at our Tiruchirappalli office.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
