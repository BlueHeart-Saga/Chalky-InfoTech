'use client';

import { motion } from 'framer-motion';
import { Search, Compass, ShieldCheck, UserCheck, CalendarDays, Rocket } from 'lucide-react';

const STEPS = [
  { title: 'Sector Analysis', icon: Search, desc: 'Analyzing your industry-specific goals and culture.' },
  { title: 'Talent Mapping', icon: Compass, desc: 'Identifying top passive talent within your niche.' },
  { title: 'Deep Sourcing', icon: ShieldCheck, desc: 'Activating global sector-specialized networks.' },
  { title: 'Evaluation', icon: UserCheck, desc: 'Rigorous vetting against industry standards.' },
  { title: 'Coordination', icon: CalendarDays, desc: 'Managing the selection process seamlessly.' },
  { title: 'Deployment', icon: Rocket, desc: 'Ensuring long-term sector-aligned retention.' }
];

export default function IndustryProcess() {
  return (
    <section className="py-24 bg-[#F5F0E8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Strategic Workflow</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Industry-Aligned <span className="text-[#7A1F5C]">Recruitment Journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-[45px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#7A1F5C]/0 via-[#7A1F5C]/20 to-[#7A1F5C]/0 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white border border-[#EFE7DD] flex items-center justify-center mb-8 relative z-10 shadow-sm group-hover:shadow-xl group-hover:shadow-[#7A1F5C]/10 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-lg bg-[#7A1F5C] flex items-center justify-center text-white text-[10px] font-extrabold">
                    0{i + 1}
                  </div>
                  <step.icon size={28} className="text-[#7A1F5C]" />
                </div>
                <h3 className="text-xs font-bold text-[#1A1A1A] mb-3 uppercase tracking-wider">{step.title}</h3>
                <p className="text-[#8A8A8A] text-[10px] leading-relaxed max-w-[140px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

