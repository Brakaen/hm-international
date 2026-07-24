// import { ShieldCheck, Award, Users, Globe2, Target, History, UserCheck, Briefcase } from 'lucide-react';
// import { ShieldCheck, Globe2, Target, History, ArrowRight } from 'lucide-react';
import { ShieldCheck, Globe2, Target, History } from 'lucide-react';
export default function About() {
  return (
    <div className="bg-ivory text-ink">
      
      {/* 1. Top Header Section */}
      <section className="bg-ink text-ivory py-20 lg:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 mx-auto max-w-4xl px-5">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4 font-semibold">About HM International</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            Built on trust, one placement at a time
          </h1>
          <p className="mt-6 text-ivory/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Premier employment consultancy based in Tiruchirappalli, Tamil Nadu, bridging local talent with verified top-tier employers overseas.
          </p>
        </div>
      </section>

      {/* 2. Company History & Founding Story */}
      <section className="py-20 border-b border-gold/15">
        <div className="mx-auto max-w-6xl px-5 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm mb-3 uppercase tracking-wider">
              <History size={18} /> Our Legacy
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
              Years of Excellence in Overseas Recruitment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              HM International was founded with a singular vision: to make international career pathways safe, transparent, and accessible for candidates from Tiruchirappalli and across Tamil Nadu. Over the years, we have grown into a dependable name trusted by both overseas corporations and ambitious job seekers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              From meticulous document attestation to pre-departure orientation, we manage the complete lifecycle of overseas deployment with absolute integrity and compliance.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gold/20 group">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
              alt="HM International Office Melapudur Trichy" 
              className="w-full h-85 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-ivory font-medium text-sm tracking-wide">
                📍 Headquartered in Melapudur, Tiruchirappalli
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-ivory-dim/50">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-semibold text-ink">Our Core Purpose</h2>
            <p className="mt-2 text-ink/70 text-sm md:text-base">Guided by transparency, ethics, and long-term career growth.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl bg-white border border-gold/20 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                <Target size={24} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-3">Our Mission</h3>
              <p className="text-ink/80 leading-relaxed text-sm md:text-base">
                To serve as the most trusted bridge between regional skilled workforce and global opportunities, ensuring zero hidden costs, ethical recruitment practices, and comprehensive support from application to successful foreign deployment.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-gold/20 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                <Globe2 size={24} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mb-3">Our Vision</h3>
              <p className="text-ink/80 leading-relaxed text-sm md:text-base">
                To set the benchmark standard for overseas employment consultancy in South India, recognized globally for professional reliability, candidate welfare, and exceptional workforce solutions for international employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. License & Registration Info */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5">
          <div className="rounded-3xl bg-gold/10 border border-gold/30 p-8 md:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gold text-ink flex items-center justify-center shrink-0">
                <ShieldCheck size={36} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-gold">Official Compliance</span>
                <h3 className="font-display text-2xl font-semibold text-ink mt-1">
                  Fully Licensed & Government Registered
                </h3>
                <p className="mt-2 text-sm md:text-base text-ink/80 leading-relaxed">
                  HM International operates strictly under regulatory compliance as a certified recruitment consultancy. Official government registration numbers, licensing credentials, and certifications are fully verified and proudly displayed at our Tiruchirappalli office for complete transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership & Team */}
      <section className="py-20 bg-ivory-dim/50 border-t border-gold/15">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Expert Guidance</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-2">Leadership & Consultant Team</h2>
            <p className="mt-2 text-ink/70 text-sm md:text-base">Experienced professionals dedicated to steering your career in the right direction.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Team Member 1 */}
            <div className="rounded-3xl bg-white border border-gold/20 overflow-hidden shadow-sm text-center p-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-ink font-display text-2xl font-bold mb-4">
                HM
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">Management Team</h3>
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mt-1">Director & Founder</p>
              <p className="mt-4 text-sm text-ink/75 leading-relaxed">
                Spearheading global employer relations and strategic overseas recruitment operations from Trichy.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="rounded-3xl bg-white border border-gold/20 overflow-hidden shadow-sm text-center p-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-ink font-display text-2xl font-bold mb-4">
                VS
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">Visa & Operations</h3>
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mt-1">Head of Documentation</p>
              <p className="mt-4 text-sm text-ink/75 leading-relaxed">
                Overseeing embassy submissions, work permit processing, and end-to-end legal paperwork.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="rounded-3xl bg-white border border-gold/20 overflow-hidden shadow-sm text-center p-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-ink font-display text-2xl font-bold mb-4">
                CS
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">Candidate Support</h3>
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mt-1">Placement Coordinator</p>
              <p className="mt-4 text-sm text-ink/75 leading-relaxed">
                Guiding candidates through skills assessment, interview coordination, and pre-departure briefings.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}