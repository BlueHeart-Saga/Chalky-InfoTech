'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';

interface Capability {
  title: string;
  desc: string;
  icon: string;
}

interface Props {
  title: string;
  description: string;
  capabilities: Capability[];
}

const CARD_STYLES = [
  {
    bg: 'bg-[#7A1F5C] text-white',
    iconBg: 'bg-white/15 text-white',
    descText: 'text-white/80',
    shape: 'rounded-[50px_35px_60px_40px_/_40px_50px_45px_55px]',
  },
  {
    bg: 'bg-[#DBCB89] text-[#1A1A1A]',
    iconBg: 'bg-black/5 text-[#1A1A1A]',
    descText: 'text-black/75',
    shape: 'rounded-[35px_50px_40px_60px_/_50px_40px_55px_45px]',
  },
  {
    bg: 'bg-[#C2DDE5] text-[#1A1A1A]',
    iconBg: 'bg-black/5 text-[#1A1A1A]',
    descText: 'text-black/75',
    shape: 'rounded-[60px_40px_50px_35px_/_45px_55px_40px_50px]',
  },
  {
    bg: 'bg-[#6A1A4E] text-white',
    iconBg: 'bg-white/15 text-white',
    descText: 'text-white/80',
    shape: 'rounded-[40px_60px_35px_50px_/_55px_45px_50px_40px]',
  },
];

export default function IndustryOverview({ title, description, capabilities }: Props) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Block - Two Columns */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">
              Sector Insight
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-8 leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-[#8A8A8A] text-lg leading-relaxed border-l-4 border-[#7A1F5C] pl-8">
              {description}
            </p>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-500 leading-relaxed italic">
              Leveraging specialized sector insights and our <Link href="/about" className="text-[#7A1F5C] hover:underline font-semibold">global recruitment network</Link>, we connect forward-thinking organizations with domain-expert professionals. We focus on identifying candidate suitability, regulatory compliance, and <Link href="/services" className="text-[#7A1F5C] hover:underline font-semibold">organizational alignment</Link>.
            </p>
          </div>
        </div>

        {/* Capabilities Grid - Staggered Unshaped Squircle Cards */}
        <div className={`grid grid-cols-1 ${
          capabilities.length === 4 
            ? 'md:grid-cols-2 lg:grid-cols-4' 
            : capabilities.length === 2 
              ? 'md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto' 
              : 'md:grid-cols-2 lg:grid-cols-3'
        } gap-12 pb-8 relative z-10`}>
          {capabilities.map((cap, i) => {
            const Icon = (LucideIcons as any)[cap.icon] || LucideIcons.Zap;
            const cardStyle = CARD_STYLES[i % CARD_STYLES.length];

            return (
              <Link key={i} href="/services" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`group relative flex flex-col justify-between p-8 pt-12 pb-14 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 min-h-[350px] text-center ${cardStyle.bg} ${cardStyle.shape}`}
                >
                  
                  {/* Upper Content wrapper */}
                  <div className="flex flex-col items-center">
                    {/* Card Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 ${cardStyle.iconBg}`}>
                      <Icon size={26} />
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:opacity-95 transition-opacity">
                      {cap.title}
                    </h4>
                    
                    {/* Description */}
                    <p className={`text-sm leading-relaxed ${cardStyle.descText}`}>
                      {cap.desc}
                    </p>
                  </div>

                  {/* Overlapping Bottom Arrow Pill Button */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300 z-20">
                    <LucideIcons.ArrowRight size={16} className="text-[#7A1F5C] transition-transform group-hover:translate-x-0.5" />
                  </div>
                  
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
