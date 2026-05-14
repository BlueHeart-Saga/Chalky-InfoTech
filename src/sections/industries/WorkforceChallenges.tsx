'use client';

import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle, Layers, Zap, MapPin, Target } from 'lucide-react';

const CHALLENGES = [
  { title: 'Rapid Scaling', icon: TrendingUp, desc: 'Quickly expanding your workforce to meet explosive project demands.' },
  { title: 'Skill Shortages', icon: AlertCircle, desc: 'Identifying rare technical talent in highly competitive markets.' },
  { title: 'High-Volume Hiring', icon: Layers, desc: 'Managing massive recruitment drives with speed and precision.' },
  { title: 'Transformation Hiring', icon: Zap, desc: 'Scaling the specific talent needed for complex digital pivots.' },
  { title: 'Operational Expansion', icon: MapPin, desc: 'Establishing new teams in emerging international territories.' },
  { title: 'Specialized Sourcing', icon: Target, desc: 'Discreet search for niche C-suite and leadership roles.' }
];

export default function WorkforceChallenges() {
  return (
    <section className="py-24 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Solving Complexity
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Workforce Challenges <span className="text-[#7A1F5C]">We Solve</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            We provide strategic talent solutions for the most pressing recruitment obstacles facing modern global organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CHALLENGES.map((challenge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white rounded-xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(122,31,92,0.08)] transition-all duration-300 flex flex-col min-h-[260px] group"
            >
              {/* Left Edge Ribbon Cutout (Matches Section Background) */}
              <div className="absolute left-0 top-[40%] -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-l-[20px] border-l-[#F9F9F9] border-b-[20px] border-b-transparent"></div>

              <div className="flex-grow pl-4 flex flex-col">
                {/* Header (Icon + Title) */}
                <div className="mb-4">
                  <div className="w-10 h-10 flex items-center justify-start text-[#1A1A1A] mb-4">
                    <challenge.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{challenge.title}</h3>
                </div>

                {/* Description */}
                <p className="text-[#555555] text-sm leading-relaxed mb-8">
                  {challenge.desc}
                </p>

                {/* Read More Link */}
                <div className="mt-auto flex justify-end">
                  <a href={`/services`} className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1A1A1A] hover:text-[#7A1F5C] transition-colors">
                    Read more 
                    <span className="w-[22px] h-[22px] rounded-full bg-[#1A1A1A] group-hover:bg-[#7A1F5C] text-white flex items-center justify-center transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

