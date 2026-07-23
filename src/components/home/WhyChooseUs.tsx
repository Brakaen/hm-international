import { ShieldCheck, Handshake, Clock3, Globe2 } from 'lucide-react';

const POINTS = [
  { icon: ShieldCheck, title: 'Licensed & Transparent', text: 'Every fee and process is disclosed upfront, in writing.' },
  { icon: Handshake, title: 'Personal Guidance', text: 'One point of contact from application to deployment.' },
  { icon: Clock3, title: 'Fast Processing', text: 'Documentation and visa filing handled without delay.' },
  { icon: Globe2, title: 'Trusted Employers', text: 'Verified partners across the Gulf and Southeast Asia.' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink text-center">
          Why candidates choose <span className="text-gold">HM International</span>
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center px-2">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ink-soft/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
