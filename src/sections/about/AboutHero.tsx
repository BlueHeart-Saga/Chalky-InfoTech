'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-[#F8F5F0] to-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6C3BFF]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6 border border-[#7A1F5C]/20">
              <span className="w-2 h-2 rounded-full bg-[#C2185B] animate-pulse" />
              Global Recruitment & Workforce Solutions Partner
            </div>
            <h1 className="text-5xl lg:text-[4rem] font-extrabold text-[#111827] leading-[1.1] mb-6 tracking-tight">
              Building Future-Ready Teams <br/>
              <span className="text-[#7A1F5C]">For Modern Enterprises</span>
            </h1>
            <p className="text-[#4B5563] text-lg mb-8 leading-relaxed max-w-xl">
              Chalky Infotech is a specialist technology recruitment and workforce solutions company helping organizations scale through strategic hiring, digital talent acquisition, and enterprise workforce transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] text-white font-bold shadow-lg hover:shadow-xl hover:shadow-[#7A1F5C]/30 hover:-translate-y-1 transition-all duration-300">
                Explore Services
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-white text-[#111827] font-bold border border-[#E5E7EB] hover:border-[#7A1F5C]/30 hover:bg-[#F8F5F0] transition-all duration-300">
                Contact Our Team
              </Link>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden bg-[#4A1238] shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-[#7A1F5C]/80 to-[#1A0A14]/90 mix-blend-multiply z-10" />
             {/* Abstract Premium Visual */}
             <div className="absolute inset-0 flex items-center justify-center opacity-40 z-20">
                <div className="w-80 h-80 border border-white/20 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute w-56 h-56 border border-white/30 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute w-32 h-32 bg-gradient-to-br from-[#C2185B] to-transparent rounded-full blur-2xl" />
             </div>
             <div className="absolute bottom-8 left-8 right-8 z-30 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
                <p className="text-white/90 font-medium text-lg tracking-wide">"Transforming enterprise capabilities through precision technical hiring."</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
