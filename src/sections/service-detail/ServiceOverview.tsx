'use client';

import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
}

const FEATURE_CARDS = [
  {
    title: 'Technical Alignment',
    icon: Zap,
    desc: 'Ensuring deep skill matching through rigorous technical assessment.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Strategic Partnership',
    icon: Target,
    desc: 'Aligning recruitment strategies with your long-term business goals.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Quality Assurance',
    icon: ShieldCheck,
    desc: 'Strict vetting protocols to ensure only the highest quality talent.',
    image: 'https://images.unsplash.com/photo-1454165833767-1296b3ae0f0e?q=80&w=800&auto=format&fit=crop'
  }
];

export default function ServiceOverview({ title, description }: Props) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">Service Overview</span>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-8 leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-[#8A8A8A] text-lg leading-relaxed border-l-4 border-[#7A1F5C] pl-8">
              {description}
            </p>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-500 leading-relaxed italic">
              Our approach combines deep industry knowledge with innovative recruitment methodologies to ensure we deliver not just candidates, but long-term value to your organization. We focus on cultural fit as much as technical excellence.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid - Poster Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-[#F5F0E8] h-[380px] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Area - Top */}
              <div className="absolute top-0 left-0 w-full h-[65%] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Area - Bottom (default), Full height (hover) */}
              <div className="absolute bottom-0 left-0 w-full h-[35%] bg-[#F5F0E8] group-hover:bg-white p-8 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10 border-t border-[#EFE7DD]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-[#7A1F5C] group-hover:text-white transition-all">
                    <card.icon size={20} className="text-[#7A1F5C] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors">{card.title}</h4>
                </div>

                {/* Hidden content that fades in on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow pt-2 flex flex-col">
                  <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">{card.desc}</p>
                  <div className="inline-flex items-center gap-2 text-[#7A1F5C] font-extrabold text-xs uppercase tracking-widest mt-auto border-b-2 border-[#7A1F5C]/20 pb-1 w-fit group-hover:border-[#7A1F5C] transition-all">
                    Methodology <ArrowRight size={14} />
                  </div>
                </div>

                {/* Bottom label that fades out on hover */}
                <span className="absolute bottom-8 left-8 text-[#8A8A8A] text-[10px] uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300 font-extrabold">Excellence</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

