'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RECRUITMENT_STEPS } from '@/constants';
import * as LucideIcons from 'lucide-react';
import { ChevronRight } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white overflow-hidden pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-8">
            Recruitment <span className="text-[#7A1F5C]">Lifecycle</span> Flow
          </h2>
          <div className="w-20 h-1 bg-[#7A1F5C] mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Our end-to-end <Link href="/services" className="text-[#7A1F5C] font-medium hover:underline transition-all">talent acquisition</Link> journey ensures precision and quality at every stage.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-4">
            {RECRUITMENT_STEPS.map((item, i) => {
              const Icon = (LucideIcons as any)[item.icon] || LucideIcons.CheckCircle;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Connector Arrow for Desktop */}
                  {i < RECRUITMENT_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] z-0 text-gray-200">
                      <ChevronRight size={24} />
                    </div>
                  )}

                  {/* Circle Icon Container */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border-2 bg-white border-[#7A1F5C]/20 text-[#7A1F5C] group-hover:bg-[#7A1F5C] group-hover:border-[#7A1F5C] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#7A1F5C]/20 group-hover:scale-110">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#1A1A1A] text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-white">
                      {i + 1}
                    </div>
                  </div>

                  <div className="px-2">
                    <h4 className="font-semibold text-lg text-[#1A1A1A] mb-3">{item.title}</h4>
                    <p className="text-gray-500 text-[13px] leading-relaxed max-w-[160px] mx-auto">
                      {item.desc}
                    </p>
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
