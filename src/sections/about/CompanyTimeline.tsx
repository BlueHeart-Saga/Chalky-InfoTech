'use client';

const milestones = [
  { year: '2009', title: 'Founded', desc: 'Launched operations focusing on core IT recruitment.' },
  { year: '2015', title: 'Tech Expansion', desc: 'Established dedicated Cloud & DevOps delivery pods.' },
  { year: '2019', title: 'Global Hiring', desc: 'Expanded footprint to support international enterprise clients.' },
  { year: '2022', title: 'Enterprise Partnerships', desc: 'Secured Tier-1 vendor status with leading Fortune 500s.' },
  { year: '2025', title: 'Digital Growth', desc: 'Pioneered AI-driven recruitment and workforce methodologies.' },
];

export default function CompanyTimeline() {
  return (
    <section className="py-20 md:py-28 bg-[#1A0A14] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A0A14] via-[#2D0F22] to-[#4A1238] opacity-80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#F8F5F0] border border-white/20 text-xs font-bold uppercase tracking-widest mb-4">Our Heritage</span>
          <h2 className="text-4xl font-extrabold text-white">Company Journey</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#C2185B] to-transparent opacity-50" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {milestones.map((item, i) => (
              <div key={i} className="relative flex flex-col md:items-center text-left md:text-center group">
                <div className="hidden md:flex w-5 h-5 rounded-full bg-[#1A0A14] border-2 border-[#C2185B] z-10 mb-8 group-hover:bg-[#C2185B] group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(194,24,91,0.5)]" />
                <div className="md:hidden absolute left-0 top-3 w-3 h-3 rounded-full bg-[#C2185B] shadow-[0_0_10px_rgba(194,24,91,0.8)]" />
                <div className="pl-8 md:pl-0">
                  <span className="text-[#7A1F5C] font-extrabold text-3xl tracking-tighter block mb-3">{item.year}</span>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
