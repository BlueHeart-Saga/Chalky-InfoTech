'use client';

import { motion } from 'framer-motion';
import { FileText, Search, UserCheck, Star, Users, CheckCircle2, ChevronRight } from 'lucide-react';

const STEPS = [
  { title: 'Requirement', icon: FileText, desc: 'Analysing and defining role-specific needs.' },
  { title: 'Sourcing', icon: Search, desc: 'Targeted talent hunt across global networks.' },
  { title: 'Screening', icon: UserCheck, desc: 'AI-powered technical and soft-skill evaluation.' },
  { title: 'Shortlist', icon: Star, desc: 'Identifying the top-tier candidates for review.' },
  { title: 'Interview', icon: Users, desc: 'Direct behavioral and expert-led assessments.' },
  { title: 'Onboarding', icon: CheckCircle2, desc: 'Ensuring a smooth and productive start.' }
];

export default function RecruitmentProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Our Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            A Seamless <span className="text-[#7A1F5C]">Recruitment Journey</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            Our end-to-end talent acquisition journey ensures precision and quality at every stage.
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

