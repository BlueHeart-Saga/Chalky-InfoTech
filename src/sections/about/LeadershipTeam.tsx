'use client';
import { ArrowUpRight } from 'lucide-react';

const leaders = [
  { name: 'Ramesh Kumar', role: 'Chief Executive Officer', desc: '20+ years of strategic enterprise workforce planning.', img: 'RK' },
  { name: 'Priya Nair', role: 'Head of Technology Recruitment', desc: 'Ex-FAANG talent acquisition and delivery leader.', img: 'PN' },
  { name: 'James Wilson', role: 'Director, EMEA Operations', desc: 'Expert in scaling European enterprise delivery networks.', img: 'JW' },
  { name: 'Anjali Shah', role: 'Head of Data & AI Practice', desc: 'Specialist in niche technical ecosystems and AI talent.', img: 'AS' },
];

export default function LeadershipTeam() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Leadership</span>
          <h2 className="text-4xl font-extrabold text-[#111827] mb-4">Guided by Experience</h2>
          <p className="text-[#4B5563] text-lg">A leadership team combining deep technical acumen with global enterprise talent strategy.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-3xl bg-[#F8F5F0] border border-[#E5E7EB] mb-6 overflow-hidden relative shadow-sm group-hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A14]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white to-[#F8F5F0]">
                   <span className="text-6xl font-extrabold text-[#E5E7EB] drop-shadow-sm group-hover:scale-110 transition-transform duration-500">{leader.img}</span>
                </div>
                <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors duration-300 text-[#111827] shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-1">{leader.name}</h3>
              <p className="text-[#7A1F5C] text-sm font-bold mb-3 uppercase tracking-wide">{leader.role}</p>
              <p className="text-[#4B5563] leading-relaxed text-sm">{leader.desc}</p>
            </div>
          ))}
        </div>
      </div>
    
      {/* Smooth Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.44,118.9,158.8,111.9,232.48,87.6,263.3,77.5,292.8,66.7,321.39,56.44Z" fill="#7A1F5C"></path>
        </svg>
      </div>
    </section>
  );
}
