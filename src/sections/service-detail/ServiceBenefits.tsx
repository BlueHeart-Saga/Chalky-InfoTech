'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Zap, ShieldCheck, Target, Award, Users } from 'lucide-react';

interface Props {
  benefits: string[];
}

const BENEFIT_IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop"
];

const ICONS = [Zap, Target, ShieldCheck, Award];

export default function ServiceBenefits({ benefits }: Props) {
  // We take the first 4 benefits to maintain the high-fidelity 2x2 design
  const displayBenefits = benefits.slice(0, 4);

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

        {/* 2x2 Grid with rotated cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayBenefits.map((benefit, i) => {
            const isDark = i === 0 || i === 3;
            const Icon = ICONS[i % ICONS.length];
            const rotation = i % 2 === 0 ? 'rotate-[-1deg]' : 'rotate-[1.5deg]';
            const translateY = i >= 2 ? 'md:-translate-y-4' : '';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-[32px] h-[380px] shadow-2xl transition-all duration-500 group ${rotation} hover:rotate-0 ${translateY} ${isDark ? 'bg-black text-white shadow-[#7A1F5C]/20 hover:shadow-[#7A1F5C]/40' : 'bg-white text-[#1A1A1A] shadow-[#7A1F5C]/10 border border-[#7A1F5C]/5 hover:shadow-[#7A1F5C]/20'
                  }`}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={BENEFIT_IMAGES[i % BENEFIT_IMAGES.length]}
                    alt={benefit}
                    fill
                    unoptimized
                    className={`object-cover object-center transition-transform duration-700 group-hover:scale-105 ${isDark ? 'opacity-50' : 'opacity-20'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-black via-black/80' : 'from-white via-white/90'} to-transparent`} />
                </div>

                <div className="relative z-10 p-10 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${isDark ? 'bg-white/10 text-white group-hover:bg-[#7A1F5C]' : 'bg-[#7A1F5C]/10 text-[#7A1F5C] group-hover:bg-[#7A1F5C] group-hover:text-white'
                    }`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 leading-tight">{benefit}</h3>
                  <p className={`${isDark ? 'text-white/70' : 'text-gray-600'} text-sm leading-relaxed max-w-sm`}>
                    We leverage our deep industry insights and global network to ensure this advantage translates into long-term strategic success for your organization.
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

