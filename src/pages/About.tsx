import { ShieldCheck, Award, Users, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Top Header Section */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4 font-semibold">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Built on trust, one placement at a time
          </h1>
          <p className="mt-6 text-ivory/80 max-w-2xl mx-auto text-base">
            HM International is a premier employment consultancy based in Tiruchirappalli, Tamil Nadu,
            connecting skilled candidates with verified, top-tier employers overseas.
          </p>
        </div>
      </section>

      {/* Main Content & Image Section */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-6xl px-5 grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left Side: Story & Mission */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">Our Story</h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-ink/80">
              We started HM International with a simple goal: make overseas employment safe,
              transparent, and achievable for candidates from Tiruchirappalli and the surrounding
              region. Every placement is backed by verified employer partnerships and honest
              guidance at every step.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mt-8">Our Mission</h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-ink/80">
              To be the most trusted bridge between local talent and global opportunity, with
              zero hidden costs and full support from application to successful deployment.
            </p>

            <div className="mt-8 rounded-2xl bg-gold/10 border border-gold/30 p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck size={32} className="text-gold shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Licensed & Registered
                  </h3>
                  <p className="mt-1 text-sm text-ink/75">
                    HM International operates as a licensed recruitment consultancy. Our registration
                    details are available on request and proudly displayed at our Tiruchirappalli office.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Image & Highlights */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gold/20 group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                alt="HM International Office" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-ivory font-medium text-sm tracking-wide">
                  ✈️ Empowering Careers Globally from Trichy
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-ivory-dim border border-gold/15 p-5 text-center shadow-sm">
                <Globe2 className="mx-auto text-gold mb-2" size={24} />
                <h4 className="font-display text-2xl font-bold text-ink">Gulf & Asia</h4>
                <p className="text-xs text-ink/70 uppercase tracking-wider mt-1">Target Destinations</p>
              </div>
              <div className="rounded-2xl bg-ivory-dim border border-gold/15 p-5 text-center shadow-sm">
                <Users className="mx-auto text-gold mb-2" size={24} />
                <h4 className="font-display text-2xl font-bold text-ink">100%</h4>
                <p className="text-xs text-ink/70 uppercase tracking-wider mt-1">Verified Placements</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}