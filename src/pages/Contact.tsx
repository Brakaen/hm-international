import { MapPin, Clock, Mail, Phone } from 'lucide-react';
import ContactForm from '../components/common/ContactForm';

export default function Contact() {
  return (
    <>
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Let's talk</h1>
          <p className="mt-4 text-ivory-dim/85">
            Job seeker or employer — reach out and we'll respond within 1-2 business days.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-20 grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Visit our office</h2>
            <ul className="space-y-4 text-sm text-ink-soft/85">
              <li className="flex gap-3">
                <MapPin size={20} className="shrink-0 text-gold" />
                3rd Floor, ABS Complex, 38-39, Bharathidasan Salai, Melapudur, Cantonment,
                Tiruchirappalli, Tamil Nadu 620001
              </li>
              <li className="flex gap-3">
                <Clock size={20} className="shrink-0 text-gold" />
                Open today · Closes 7 pm
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="shrink-0 text-gold" />
                <a href="mailto:info@hminternational.example" className="hover:text-gold">
                  info@hminternational.example
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="shrink-0 text-gold" />
                Add phone number here
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gold/20 h-64">
              <iframe
                title="HM International location"
                className="h-full w-full"
                loading="lazy"
                src="https://www.google.com/maps?q=ABS+Complex+Bharathidasan+Salai+Melapudur+Tiruchirappalli&output=embed"
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
