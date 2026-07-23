import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import type { ContactFormValues } from '../../types';

const RECIPIENT_EMAIL = 'info@hminternational.example';

const initialValues: ContactFormValues = { name: '', email: '', phone: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);

  const handleChange = (field: keyof ContactFormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValues((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${values.name || 'Website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\nMessage:\n${values.message}`
    );
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <input
        required
        placeholder="Your name / Company name"
        value={values.name}
        onChange={handleChange('name')}
        className="rounded-lg border border-gold/25 bg-ivory-dim px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <input
        required
        type="email"
        placeholder="Email address"
        value={values.email}
        onChange={handleChange('email')}
        className="rounded-lg border border-gold/25 bg-ivory-dim px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <input
        type="tel"
        placeholder="Phone number"
        value={values.phone}
        onChange={handleChange('phone')}
        className="rounded-lg border border-gold/25 bg-ivory-dim px-4 py-3 text-sm outline-none focus:border-gold"
      />
      <textarea
        required
        rows={5}
        placeholder="Your message or manpower requirement (role, headcount, country, timeline)"
        value={values.message}
        onChange={handleChange('message')}
        className="rounded-lg border border-gold/25 bg-ivory-dim px-4 py-3 text-sm outline-none focus:border-gold resize-none"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink hover:bg-gold-dark hover:text-ivory transition-colors"
      >
        Send message <Send size={16} />
      </button>
    </form>
  );
}
