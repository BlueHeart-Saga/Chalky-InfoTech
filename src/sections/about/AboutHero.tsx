'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import RotatingText from '@/components/RotatingText';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-48 bg-[#F5F0E8] overflow-hidden">
      {/* WhatsApp-style pattern background matching Home Hero */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'url("/hero-pattern.png")', backgroundSize: '400px 400px', backgroundRepeat: 'repeat' }} />

      {/* Subtle Glows matching Home Hero */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C2185B]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7A1F5C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge Style matching Home Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7A1F5C]/5 border border-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-10">
            <span className="w-2 h-2 rounded-full bg-[#C2185B] animate-pulse" />
            GLOBAL RECRUITMENT & WORKFORCE PARTNER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full font-semibold text-[#1A1A1A] leading-[1.1] mb-10 flex flex-col items-center px-4"
          >
            <span className="block text-[#1A1A1A]/90 text-[clamp(1rem,3vw,2.5rem)] mb-2 sm:mb-4 font-bold tracking-tight">
              Building Future-Ready Teams
            </span>
            <div className="w-full max-w-full flex justify-center">
              <RotatingText
                texts={[
                  'Strategic Talent Partners',
                  'Global Workforce Experts',
                  'Technology Hiring Leaders',
                  'Enterprise Growth Catalysts',
                  'Digital Transformation Teams',
                  'Specialist Skill Network',
                  'Future-Proof Recruitment',
                  'High-Performance Culture',
                  'Borderless Hiring Solutions',
                  'Scalable Talent Strategy'
                ]}
                mainClassName="inline-flex whitespace-nowrap flex-nowrap text-[#7A1F5C] py-1 sm:py-2 drop-shadow-lg text-center justify-center font-extrabold text-[clamp(1.25rem,5vw,5.5rem)] leading-none tracking-tighter"
                splitBy="words"
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                staggerDuration={0.05}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-2"
                transition={{ type: "spring", damping: 28, stiffness: 180 }}
                rotationInterval={3500}
              />
            </div>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-[#8A8A8A] text-sm sm:text-base md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-medium px-4">
            Chalky Infotech is a specialist <Link href="/services" className="text-[#7A1F5C] hover:underline transition-all">technology recruitment</Link> and workforce solutions company helping organizations scale through strategic hiring, <Link href="/services/contract-staffing" className="text-[#7A1F5C] hover:underline transition-all">digital talent acquisition</Link>, and <Link href="/services/managed-services" className="text-[#7A1F5C] hover:underline transition-all">enterprise workforce transformation</Link>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4">
            <Link href="/services" className="group flex items-center justify-center gap-2 bg-[#7A1F5C] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:shadow-[#7A1F5C]/40 hover:scale-105 transition-all duration-300">
              Explore Services <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#F5F0E8] text-[#1A1A1A] px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-sm sm:text-base hover:bg-white transition-all duration-300 border border-[#EFE7DD] shadow-sm">
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Waves Brush Divider matching Home Hero */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
        <svg className="relative block w-full h-[60px] sm:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C150,90 350,10 550,30 C750,50 950,100 1200,60 L1200,120 Z" fill="#ffffff"></path>
          <path d="M50,110 C200,80 300,20 450,25" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          <path d="M480,30 C600,45 800,90 1000,70" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="15 8" opacity="0.6" />
          <path d="M850,85 C950,100 1050,110 1150,85" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <path d="M150,95 C250,60 350,20 450,25" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 12" opacity="0.7" />
          <path d="M1020,70 C1080,60 1140,55 1200,50" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
