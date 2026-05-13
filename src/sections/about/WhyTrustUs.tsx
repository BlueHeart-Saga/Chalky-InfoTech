'use client';
import { Rocket, Star, Globe, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const reasons = [
  { icon: Rocket, title: 'Fast Hiring Cycles', desc: 'Optimized pipelines reducing time-to-hire by 40% against industry averages.' },
  { icon: Star, title: 'Specialized Talent', desc: 'Niche networks accessing passive candidates unavailable on standard job boards.' },
  { icon: Globe, title: 'Global Support', desc: 'Cross-border hiring capabilities paired with localized compliance knowledge.' },
  { icon: Clock, title: '24/7 Coordination', desc: 'Dual-shore delivery teams ensuring continuous candidate engagement.' },
  { icon: CheckCircle, title: 'Quality Screening', desc: 'Multi-tiered technical and cultural assessments prior to any submission.' },
  { icon: TrendingUp, title: 'Scalable Solutions', desc: 'Adaptable models from executive retained searches to volume RPO engagements.' },
];

export default function WhyTrustUs() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Enterprise Reliability</span>
          <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">Why Enterprises Trust Us</h2>
          <p className="text-[#8A8A8A] text-lg">We are the silent engine behind the growth of over 500 technology-driven organizations worldwide.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A1F5C] to-[#C2185B] flex items-center justify-center shadow-md">
                  <r.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">{r.title}</h3>
              </div>
              <p className="text-[#8A8A8A] leading-relaxed">{r.desc}</p>
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
