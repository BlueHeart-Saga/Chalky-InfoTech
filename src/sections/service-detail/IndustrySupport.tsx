'use client';

import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

interface Props {
  industries: string[];
}

export default function IndustrySupport({ industries }: Props) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">Sector Reach</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-8 leading-tight">
              Supported <span className="text-[#7A1F5C]">Industries</span>
            </h2>
            <p className="text-[#8A8A8A] text-lg leading-relaxed mb-10">
              We deliver specialized recruitment expertise across multiple global sectors, ensuring deep understanding of industry-specific requirements and cultures.
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-6 py-3 rounded-full bg-[#F5F0E8] border border-[#EFE7DD] text-[#1A1A1A] font-bold text-sm hover:bg-[#7A1F5C] hover:text-white hover:border-[#7A1F5C] transition-all duration-300 cursor-default"
                >
                  {ind}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="relative aspect-video rounded-[3rem] bg-[#2D0F22] flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C2185B 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="relative z-10 text-center">
                   <Globe2 size={80} className="text-[#D14D72] mx-auto mb-6 animate-pulse" />
                   <p className="text-white font-extrabold text-2xl tracking-widest uppercase">Global Industry Reach</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

