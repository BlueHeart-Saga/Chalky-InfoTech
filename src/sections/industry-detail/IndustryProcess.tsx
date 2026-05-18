'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Compass, 
  ShieldCheck, 
  UserCheck, 
  CalendarDays, 
  Rocket,
  ChevronRight 
} from 'lucide-react';

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
    <section className="py-24 bg-white overflow-hidden pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Strategic Workflow</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-8">
            Industry-Aligned <span className="text-[#7A1F5C]">Recruitment Journey</span>
          </h2>
          <div className="w-20 h-1 bg-[#7A1F5C] mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Our strategic sector-focused process ensures we identify and deliver high-impact talent that understands your industry's unique challenges.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector Arrow for Desktop */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] z-0 text-gray-200">
                    <ChevronRight size={24} />
                  </div>
                )}

                {/* Circle Icon Container */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border-2 bg-white border-[#7A1F5C]/20 text-[#7A1F5C] group-hover:bg-[#7A1F5C] group-hover:border-[#7A1F5C] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#7A1F5C]/20 group-hover:scale-110">
                    <step.icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#1A1A1A] text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-white">
                    {i + 1}
                  </div>
                </div>

                <div className="px-2">
                  <h4 className="font-semibold text-lg text-[#1A1A1A] mb-3">{step.title}</h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed max-w-[160px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

