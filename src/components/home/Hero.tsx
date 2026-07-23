import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-ivory">
      
      {/* Background Video Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/airplane.mp4" type="video/mp4" />
        </video>
        
        {/* Soft Dim Overlay for text readability */}
        <div className="absolute inset-0 bg-ink/40 backdrop-blur-[0.5px]"></div>
      </div>

      {/* faint gold texture overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.05] bg-[radial-gradient(circle_at_20%_20%,var(--color-gold)_0,transparent_45%)]" />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-5 pt-24 pb-20 md:pt-32 md:pb-28">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold-light mb-5 font-semibold drop-shadow-sm">
          Employment Consultant · Tiruchirappalli
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.1] max-w-2xl text-ivory drop-shadow-md">
          We take your career <span className="text-gold-light italic">overseas</span>, one
          careful placement at a time.
        </h1>
        <p className="mt-6 max-w-xl text-ivory/90 text-base md:text-lg drop-shadow">
          HM International connects skilled candidates with trusted employers across the Gulf and
          Southeast Asia — full support from documentation to your first day at work.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink hover:bg-gold-light transition-colors shadow-lg"
          >
            Request Manpower <ArrowRight size={16} />
          </Link>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full border border-gold-light/60 bg-ink/30 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-ivory hover:border-gold-light hover:bg-gold-light/25 transition-colors shadow-lg"
          >
            Apply for a Job
          </a>
        </div>

        {/* Signature element: flight path landing at destination */}
        <div className="mt-20 md:mt-24" aria-hidden="true">
          <svg viewBox="0 0 700 140" className="w-full max-w-2xl h-auto drop-shadow-lg">
            <path
              id="flightPath"
              d="M 20 110 C 180 10, 420 10, 660 60"
              fill="none"
              stroke="var(--color-gold-light)"
              strokeOpacity="0.7"
              strokeWidth="2.5"
              strokeDasharray="3 8"
              strokeLinecap="round"
            />
            <circle cx="20" cy="110" r="5.5" fill="var(--color-gold-light)" />
            <text x="10" y="132" fill="var(--color-ivory)" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600" className="drop-shadow">
              Tiruchirappalli
            </text>

            <g>
              <circle cx="660" cy="60" r="6" fill="var(--color-gold)" />
              <circle cx="660" cy="60" r="11" fill="none" stroke="var(--color-gold)" strokeWidth="2">
                <animate attributeName="r" values="6;18;6" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0;0.9" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </g>
            <text x="600" y="42" fill="var(--color-gold-light)" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600" className="drop-shadow">
              Abroad
            </text>

            <g>
              <path
                d="M0 0 L14 5 L0 10 L3 5 Z"
                fill="var(--color-gold-light)"
                transform="translate(-7,-5)"
              >
                <animateMotion dur="3.2s" repeatCount="indefinite" rotate="auto" path="M 20 110 C 180 10, 420 10, 660 60" />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}