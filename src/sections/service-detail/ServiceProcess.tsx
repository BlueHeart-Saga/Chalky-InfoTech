'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RECRUITMENT_STEPS } from '@/constants';
import * as LucideIcons from 'lucide-react';

interface Props {
  steps?: {
    title: string;
    desc: string;
    icon?: string;
  }[];
}

const DEFAULT_ICONS = ['Search', 'ShieldCheck', 'UserCheck', 'Rocket', 'Activity', 'Award'];

export default function ServiceProcess({ steps }: Props) {
  // If no steps provided, use the first 4 recruitment steps as fallback to fit the 4-column layout
  const displaySteps = steps || RECRUITMENT_STEPS.slice(0, 4);
  const isFourStep = displaySteps.length === 4;

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[#FAF8F5] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-5">
            Service Workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight tracking-tight">
            How We <span className="text-[#7A1F5C]">Deliver Value</span>
          </h2>
          <p className="text-[#8A8A8A] text-lg leading-relaxed">
            Our streamlined methodology ensures precision, transparency, and rapid delivery at every stage of your engagement.
          </p>
        </div>

        <div className="relative">
          {/* Main Horizontal Timeline Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-[#7A1F5C]/30 to-transparent -translate-y-1/2 z-0" />

          {/* Vertical Timeline Line - Mobile Only */}
          <div className="block lg:hidden absolute left-1/2 top-[5%] bottom-[5%] w-[2px] bg-gradient-to-b from-transparent via-[#7A1F5C]/20 to-transparent -translate-x-1/2 z-0" />

          <div className={`grid grid-cols-1 ${isFourStep ? 'lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'} gap-12 lg:gap-8 relative z-10`}>
            {displaySteps.map((step, i) => {
              const iconName = step.icon || DEFAULT_ICONS[i % DEFAULT_ICONS.length];
              const Icon = (LucideIcons as any)[iconName] || LucideIcons.CheckCircle;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className={`relative flex flex-col ${isEven ? 'lg:flex-col' : 'lg:flex-col-reverse'} items-center text-center group`}
                >
                  
                  {/* The Content Card */}
                  <div className={`bg-white rounded-[32px] p-8 shadow-sm border border-[#EFE7DD] group-hover:shadow-2xl group-hover:border-[#7A1F5C]/30 transition-all duration-500 w-full mb-8 lg:mb-0 ${isEven ? 'lg:mb-16' : 'lg:mt-16'}`}>
                    <div className="lg:hidden w-14 h-14 rounded-2xl bg-[#7A1F5C]/10 text-[#7A1F5C] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7A1F5C] group-hover:text-white transition-colors duration-300 shadow-inner">
                      <Icon size={24} />
                    </div>
                    <h4 className="font-bold text-xl text-[#1A1A1A] mb-4 group-hover:text-[#7A1F5C] transition-colors">{step.title}</h4>
                    <p className="text-[#8A8A8A] text-[15px] leading-relaxed">{step.desc}</p>
                  </div>

                  {/* The Timeline Node (Desktop) */}
                  <div className="relative z-10 hidden lg:flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-[#FAF8F5] shadow-[0_0_0_2px_rgba(122,31,92,0.15)] group-hover:shadow-[0_0_0_4px_rgba(122,31,92,0.3)] flex items-center justify-center transition-all duration-500 group-hover:bg-[#7A1F5C] group-hover:scale-110 cursor-default">
                       <Icon size={24} className="text-[#7A1F5C] group-hover:text-white transition-colors" />
                    </div>
                    
                    {/* Floating Step Number */}
                    <div className={`absolute ${isEven ? '-bottom-10' : '-top-10'} font-black text-[#7A1F5C]/10 text-4xl select-none group-hover:text-[#7A1F5C]/20 transition-colors duration-500`}>
                      0{i + 1}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

