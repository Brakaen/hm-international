import FaqAccordion from '../components/common/FaqAccordion';
import ApplyForm from '../components/common/ApplyForm';

export default function Faq() {
  return (
    <>
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">
            For Job Seekers
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-ivory-dim/85 max-w-2xl mx-auto">
            Everything candidates commonly ask before applying — documents, timelines, fees, and
            the countries we place in.
          </p>
        </div>
      </section>

      <FaqAccordion />
      {/* <ApplyForm /> */}
    </>
  );
}
