'use client';

import { motion } from 'framer-motion';
import { Target, BarChart3, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import insight1 from '@/assets/Industries/Sector Insights/49f4a132-7ab4-41ea-93de-93b959d51e50 1.png';
import insight2 from '@/assets/Industries/Sector Insights/6e36d0d6-6565-4687-bf3d-dd7f9c496a9b 1.png';
import insight3 from '@/assets/Industries/Sector Insights/a0ca8f89-9ecc-4c85-94d7-a880fe752de0 1.png';
import insight4 from '@/assets/Industries/Sector Insights/c0064780-9c65-4a9d-a8b4-93f6577f5f02 1.png';

const INDUSTRY_CARDS = [
  {
    icon: Target,
    title: 'Precision Mapping',
    desc: 'Targeting exact skill sets across complex, specialized industry environments.',
    image: insight1
  },
  {
    icon: BarChart3,
    title: 'Market Analytics',
    desc: 'Leveraging intelligence to navigate competitive global talent landscapes.',
    image: insight2
  },
  {
    icon: ShieldCheck,
    title: 'Compliance First',
    desc: 'Ensuring rigorous candidate vetting and regulatory adherence.',
    image: insight3
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    desc: 'Accelerated hiring timelines for critical, high-stakes business pivots.',
    image: insight4
  }
];

export default function IndustriesOverview() {
  return (
    <section className="py-24 bg-[#F5F0E8]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header split section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-16">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">
              Sector Insight
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
              A Consultative Approach to <span className="text-[#7A1F5C]">Industry Specialization</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-[#8A8A8A] text-lg leading-relaxed border-l-4 border-[#7A1F5C] pl-8">
              Every sector operates with unique workforce requirements, complex operational challenges, and distinct hiring expectations. At Chalky Infotech, our consultative approach helps organizations secure <Link href="/services" className="text-[#7A1F5C] hover:underline font-semibold">specialized talent</Link> and implement <Link href="/about" className="text-[#7A1F5C] hover:underline font-semibold">agile recruitment strategies</Link> aligned with long-term growth.
            </p>
          </div>
        </div>

        {/* 4-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRY_CARDS.map((card, i) => (
            <Link key={i} href="/about" className="block h-[320px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white h-full cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Area - Top */}
                <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                {/* Content Area - Bottom (default), Full height (hover) */}
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white group-hover:bg-white p-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10">
                  <h4 className="text-base font-semibold text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#7A1F5C] transition-colors">{card.title}</h4>
                  
                  {/* Hidden content that fades in on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow pt-2 flex flex-col">
                     <p className="text-[#4A4A4A] text-xs leading-relaxed mb-4">{card.desc}</p>
                     <span className="inline-flex items-center gap-2 text-[#7A1F5C] font-semibold text-xs mt-auto">
                        Learn More <ArrowRight size={14} />
                     </span>
                  </div>

                  {/* Bottom label that fades out on hover */}
                  <span className="absolute bottom-6 left-6 text-[#8A8A8A] text-[10px] uppercase tracking-wider group-hover:opacity-0 transition-opacity duration-300 font-bold">Approach</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

