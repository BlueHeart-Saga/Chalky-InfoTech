'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Zap, Layers, Globe, BarChart, Rocket, ArrowRight } from 'lucide-react';

const CAPABILITIES = [
  { title: 'Leadership Hiring', icon: ShieldCheck, desc: 'Identifying C-suite and senior management talent.' },
  { title: 'Digital Transformation', icon: Zap, desc: 'Scaling teams for complex technology pivots.' },
  { title: 'High-Volume Recruitment', desc: 'Rapid cohort hiring for large-scale operations.', icon: Layers, image: '/services/contract.png' },
  { title: 'Specialized Skill Hiring', desc: 'Sourcing rare and niche technical expertise.', icon: Rocket, image: '/services/permanent.png' },
  { title: 'Cross-Industry Support', desc: 'Versatile staffing across diverse global sectors.', icon: BarChart, image: '/services/onsite.png' },
  { title: 'Remote Talent Acquisition', desc: 'Building seamless global borderless teams.', icon: Globe, image: '/services/managed.png' }
];

export default function SpecializedHiring() {
  return (
    <section className="py-24 bg-[#F5F0E8]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">
              Advanced Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-8 leading-tight">
              Specialized Hiring for <span className="text-[#7A1F5C]">Complex Requirements</span>
            </h2>
            <p className="text-[#8A8A8A] text-lg leading-relaxed mb-10">
              Beyond standard recruitment, we possess the institutional maturity to handle high-stakes leadership searches and massive workforce transformations across international borders.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {CAPABILITIES.slice(0, 2).map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#EFE7DD]">
                    <item.icon size={22} className="text-[#7A1F5C]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
                    <p className="text-xs text-[#8A8A8A] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {CAPABILITIES.slice(2).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#EBEBEB] h-[320px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Area - Top */}
                <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
                  <Image 
                    src={item.image!} 
                    alt={item.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                {/* Content Area - Bottom (default), Full height (hover) */}
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#EBEBEB] group-hover:bg-white p-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10">
                  <h4 className="text-base font-semibold text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#7A1F5C] transition-colors">{item.title}</h4>
                  
                  {/* Hidden content that fades in on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow pt-2 flex flex-col">
                     <p className="text-[#4A4A4A] text-xs leading-relaxed mb-4">{item.desc}</p>
                     <span className="inline-flex items-center gap-2 text-[#7A1F5C] font-semibold text-xs mt-auto">
                        Learn More <ArrowRight size={14} />
                     </span>
                  </div>

                  {/* Bottom label that fades out on hover */}
                  <span className="absolute bottom-6 left-6 text-[#8A8A8A] text-[10px] uppercase tracking-wider group-hover:opacity-0 transition-opacity duration-300 font-bold">Capability</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

