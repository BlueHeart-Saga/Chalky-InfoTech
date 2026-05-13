'use client';
import { ShieldCheck, Lightbulb, Activity, HeartHandshake, Zap, Users } from 'lucide-react';

const values = [
  { icon: ShieldCheck, title: 'Integrity', desc: 'Unwavering ethics and honesty in every client and candidate interaction.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously refining our search methodologies with data-driven insights.' },
  { icon: Activity, title: 'Transparency', desc: 'Clear, open communication throughout the entire recruitment lifecycle.' },
  { icon: HeartHandshake, title: 'Client Success', desc: 'Your long-term organizational growth is our primary metric for success.' },
  { icon: Zap, title: 'Speed', desc: 'Agile delivery of top-tier talent without compromising on quality.' },
  { icon: Users, title: 'Collaboration', desc: 'Working as a seamless extension of your internal HR and technical teams.' },
];

export default function CoreValues() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Core Values</span>
          <h2 className="text-4xl font-extrabold text-[#111827] mb-4">The Principles That Drive Us</h2>
          <p className="text-[#4B5563] text-lg">We believe that how we work is just as important as the results we deliver.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#7A1F5C]/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F8F5F0] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#7A1F5C]/10 transition-all duration-300">
                <v.icon className="w-6 h-6 text-[#7A1F5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">{v.title}</h3>
              <p className="text-[#4B5563] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    
      {/* Smooth Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.44,118.9,158.8,111.9,232.48,87.6,263.3,77.5,292.8,66.7,321.39,56.44Z" fill="#1A0A14"></path>
        </svg>
      </div>
    </section>
  );
}
