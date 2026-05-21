'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Zap, ShieldCheck, Target, Award, Users } from 'lucide-react';

interface Props {
  benefits: string[];
}

import benefit1 from '@/assets/Services details page/Fast  Project Delivery.png';
import benefit2 from '@/assets/Services details page/Reduced Hiring Risks.png';
import benefit3 from '@/assets/Services details page/Scalabale Teams.png';
import benefit4 from '@/assets/Services details page/Cost Efficiency.png';
import benefit5 from '@/assets/Services details page/Compilance and sedcurity.png';
import benefit6 from '@/assets/Services details page/office-workers-using-finance-graphs 1.png';

const BENEFIT_IMAGES = [
  benefit1.src,
  benefit2.src,
  benefit3.src,
  benefit4.src,
  benefit5.src,
  benefit6.src
];

const ICONS = [Zap, Target, ShieldCheck, Award, Users, Star];

export default function ServiceBenefits({ benefits }: Props) {
  // We take up to 6 benefits
  const displayBenefits = benefits.slice(0, 6);

  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Standardized Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Core Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Strategic <span className="text-[#7A1F5C]">Service Benefits</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            Our specialized approach delivers measurable impact, ensuring your organization achieves peak operational efficiency and talent excellence.
          </p>
        </div>

        {/* Grid with cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayBenefits.map((benefit, i) => {
            const isDark = i % 2 === 0; // Perfect checkerboard for 3 columns
            const rotationClass = i % 2 === 0 ? '-rotate-1 lg:-rotate-2' : 'rotate-1 lg:rotate-2'; // Subtle alternating tilt
            const Icon = ICONS[i % ICONS.length];
            const hasDesc = benefit.includes(':');
            const [title, desc] = hasDesc ? benefit.split(':').map(s => s.trim()) : [benefit, 'We leverage our deep industry insights and global network to ensure this advantage translates into long-term strategic success for your organization.'];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative overflow-hidden rounded-[32px] h-[380px] shadow-2xl transition-all duration-500 group transform ${rotationClass} hover:rotate-0 hover:-translate-y-3 hover:scale-[1.02] hover:z-10 ${isDark ? 'bg-[#1A1A1A] text-white shadow-[#7A1F5C]/20 hover:shadow-[#7A1F5C]/40' : 'bg-white text-[#1A1A1A] shadow-gray-200/50 border border-gray-100 hover:shadow-[#7A1F5C]/20'
                  }`}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={BENEFIT_IMAGES[i % BENEFIT_IMAGES.length]}
                    alt={title}
                    fill
                    unoptimized
                    className={`object-cover object-center transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-50' : 'opacity-20'}`}
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-[#1A1A1A] via-[#1A1A1A]/80' : 'from-white via-white/90'} to-transparent`} />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${isDark ? 'bg-white/10 text-white group-hover:bg-[#7A1F5C]' : 'bg-[#7A1F5C]/10 text-[#7A1F5C] group-hover:bg-[#7A1F5C] group-hover:text-white'
                    }`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold mb-4 leading-tight">{title}</h3>
                  <p className={`${isDark ? 'text-white/70' : 'text-gray-600'} text-sm leading-relaxed max-w-sm`}>
                    {desc}
                  </p>

                  <div className="mt-auto flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
                      Verified Outcome
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

