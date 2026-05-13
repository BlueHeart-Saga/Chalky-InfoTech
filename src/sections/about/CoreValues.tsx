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
          <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">The Principles That Drive Us</h2>
          <p className="text-[#8A8A8A] text-lg">We believe that how we work is just as important as the results we deliver.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#7A1F5C]/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F5F0E8] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#7A1F5C]/10 transition-all duration-300">
                <v.icon className="w-6 h-6 text-[#7A1F5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{v.title}</h3>
              <p className="text-[#8A8A8A] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    
      {/* Unique Wave Divider: Layered Steps */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect x="0" y="0" width="1200" height="120" fill="transparent" />
          <path d="M0,60 L200,80 L400,40 L600,100 L800,50 L1000,90 L1200,60 L1200,120 L0,120 Z" opacity=".1" fill="#1A0A14" />
          <path d="M0,80 L200,100 L400,60 L600,110 L800,70 L1000,100 L1200,80 L1200,120 L0,120 Z" fill="#1A0A14" />
        </svg>
      </div>
    </section>
  );
}
