import { useState } from 'react';

export default function JobSeekers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');

  const overseasJobs = [
    { id: 1, title: 'Civil Engineers & Site Supervisors', category: 'Construction', country: 'UAE / Dubai', openings: '25 Openings', visaType: 'Employment Visa Provided' },
    { id: 2, title: 'Staff Nurses & Healthcare Workers', category: 'Healthcare', country: 'United Kingdom', openings: '40 Openings', visaType: 'Tier-2 Visa Support' },
    { id: 3, title: 'Hotel Management & Hospitality Crew', category: 'Hospitality', country: 'Singapore', openings: '60 Openings', visaType: 'Work Permit' },
    { id: 4, title: 'Electricians, Welders & Pipefitters', category: 'Technical / Oil & Gas', country: 'Qatar', openings: '35 Openings', visaType: 'Company Sponsored Visa' },
    { id: 5, title: 'IT Software & System Engineers', category: 'IT & Tech', country: 'Germany', openings: '15 Openings', visaType: 'EU Blue Card Assistance' },
    { id: 6, title: 'Accountants & Office Admin', category: 'Finance & Admin', country: 'Saudi Arabia', openings: '20 Openings', visaType: 'Work Visa' },
  ];

  const filteredJobs = overseasJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'All' || job.country.includes(selectedCountry);
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="bg-[#FAF7F2] text-gray-900 min-h-screen">
      
      {/* 1. Hero Section (Cream/Beige background matching your Services page) */}
      <section className="border-b border-[#D4AF37]/20 py-20 px-5 text-center bg-[#FAF7F2]">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-3 font-semibold">
            HM International - Overseas Manpower Solutions
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Your Gateway to <span className="text-[#D4AF37]">Global Careers</span>
          </h1>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto mb-8">
            We recruit, process visas, and deploy skilled professionals to top international employers across Gulf, Europe, and Asia.
          </p>

          {/* Search & Filter Box */}
          <div className="bg-[#0B132B] p-4 rounded-2xl border border-[#D4AF37]/40 shadow-2xl flex flex-col md:flex-row gap-4 items-center">
            <input 
              type="text" 
              placeholder="Search job title or role..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:flex-1 rounded-xl border border-[#D4AF37]/30 px-4 py-3 text-sm bg-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
            />
            <select 
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full md:w-auto rounded-xl border border-[#D4AF37]/30 px-4 py-3 text-sm bg-[#111a3a] text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
            >
              <option value="All">All Destinations</option>
              <option value="UAE">UAE / Dubai</option>
              <option value="Kingdom">United Kingdom</option>
              <option value="Singapore">Singapore</option>
              <option value="Qatar">Qatar</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
        </div>
      </section>

      {/* 2. Job Listings Grid Section */}
      <section className="py-16 px-5 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-gray-300 pb-4">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
              Active Overseas Openings
            </h2>
            <p className="text-xs text-gray-600 mt-1">Direct recruitment authorized by overseas client companies.</p>
          </div>
          <span className="text-xs text-[#D4AF37] bg-[#0B132B] px-3 py-1 rounded-full border border-[#D4AF37]/30 font-medium">Verified Agency</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white border border-[#D4AF37]/30 rounded-2xl p-6 shadow-lg hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-full font-medium">
                    {job.category}
                  </span>
                  <span className="text-xs text-gray-600 font-semibold">{job.openings}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D4AF37] transition-colors">{job.title}</h3>
                <p className="text-sm text-[#D4AF37] font-semibold mb-2 flex items-center gap-1">📍 {job.country}</p>
                <p className="text-xs text-gray-600 mb-4">Visa: {job.visaType}</p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Fast Processing</span>
                <button 
                  onClick={() => alert(`Opening application for: ${job.title}`)}
                  className="rounded-full bg-[#0B132B] text-[#D4AF37] px-5 py-2 text-xs font-bold hover:bg-[#D4AF37] hover:text-[#0B132B] transition-all cursor-pointer shadow-md"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Process Section (Matching Services page style) */}
      <section className="py-16 px-5 bg-[#F2ECE1] border-t border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Our Overseas Recruitment Process
            </h2>
            <p className="text-sm text-gray-700">Step-by-step guidance from registration to deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white border border-[#D4AF37]/30 p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#0B132B] text-[#D4AF37] font-bold flex items-center justify-center mb-4">1</div>
              <h4 className="font-bold text-gray-900 mb-1">Registration</h4>
              <p className="text-xs text-gray-600">Submit your resume and details.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/30 p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#0B132B] text-[#D4AF37] font-bold flex items-center justify-center mb-4">2</div>
              <h4 className="font-bold text-gray-900 mb-1">Client Interview</h4>
              <p className="text-xs text-gray-600">Selection by foreign employers.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/30 p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#0B132B] text-[#D4AF37] font-bold flex items-center justify-center mb-4">3</div>
              <h4 className="font-bold text-gray-900 mb-1">Visa Processing</h4>
              <p className="text-xs text-gray-600">Medical and visa documentation.</p>
            </div>
            <div className="bg-white border border-[#D4AF37]/30 p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#0B132B] text-[#D4AF37] font-bold flex items-center justify-center mb-4">4</div>
              <h4 className="font-bold text-gray-900 mb-1">Deployment</h4>
              <p className="text-xs text-gray-600">Flight ticket & overseas placement.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}