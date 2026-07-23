import { COUNTRIES } from '../../data/siteData';

export default function Countries() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#0B132B] text-center">
          Countries we place candidates in
        </h2>
        
        {/* Grid layout for proper structured alignment */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
          {COUNTRIES.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-3 rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 shadow-sm hover:border-amber-500 transition-colors"
            >
              <span className="text-xl" aria-hidden="true">{c.flagEmoji}</span>
              <span className="truncate">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}