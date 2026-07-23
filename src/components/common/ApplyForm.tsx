import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import type { ApplyFormValues } from '../../types';

const RECIPIENT_EMAIL = 'info@hminternational.example';

const initialValues: ApplyFormValues = {
  fullName: '',
  email: '',
  phone: '',
  jobCategory: '',
  countryPreference: '',
  message: '',
};

export default function ApplyForm() {
  const [values, setValues] = useState<ApplyFormValues>(initialValues);

  const handleChange = (field: keyof ApplyFormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValues((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Job Application - ${values.jobCategory || 'General'}`);
    const body = encodeURIComponent(
      `Full name: ${values.fullName}\n` +
        `Email: ${values.email}\n` +
        `Phone: ${values.phone}\n` +
        `Job category: ${values.jobCategory}\n` +
        `Country preference: ${values.countryPreference}\n\n` +
        `Message:\n${values.message}\n\n` +
        `(Please attach your resume before sending)`
    );
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="apply" className="bg-ivory">
      <div className="mx-auto max-w-2xl px-5 py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-gold text-center mb-3">
          For Job Seekers
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink text-center">
          Apply for a job
        </h2>
        <p className="mt-3 text-center text-sm text-ink-soft/80">
          This opens your email app with your details filled in — attach your resume before you
          send it to us.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
          <input
            required
            placeholder="Full name"
            value={values.fullName}
            onChange={handleChange('fullName')}
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
            required
            type="tel"
            placeholder="Phone number"
            value={values.phone}
            onChange={handleChange('phone')}
            className="rounded-lg border border-gold/25 bg-ivory-dim px-4 py-3 text-sm outline-none focus:border-gold"
          />
          <input
            placeholder="Job category (e.g. Electrician)"
            value={values.jobCategory}
            onChange={handleChange('jobCategory')}
            className="rounded-lg border border-gold/25 bg-ivory-dim px-4 py-3 text-sm outline-none focus:border-gold"
          />
          <input
            placeholder="Preferred country"
            value={values.countryPreference}
            onChange={handleChange('countryPreference')}
            className="sm:col-span-2 rounded-lg border border-gold/25 bg-ivory-dim px-4 py-3 text-sm outline-none focus:border-gold"
          />
          <textarea
            placeholder="Tell us about your experience"
            rows={4}
            value={values.message}
            onChange={handleChange('message')}
            className="sm:col-span-2 rounded-lg border border-gold/25 bg-ivory-dim px-4 py-3 text-sm outline-none focus:border-gold resize-none"
          />

          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink hover:bg-gold-dark hover:text-ivory transition-colors"
          >
            Send application <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
