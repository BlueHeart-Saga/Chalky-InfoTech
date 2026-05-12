'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Ready to Build Your Dream Team?",
  subtitle = "Partner with Chalky Infotech and gain access to elite talent across technology, finance, healthcare and more.",
  primaryLabel = "Start Hiring Today",
  primaryHref = "/contact",
  secondaryLabel = "Find Jobs",
  secondaryHref = "/jobs",
}: CTASectionProps) {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#FFF5F8] to-[#FFE8F0]">
      
      {/* Smooth Top Wave Transition (Matches section above: bg-white) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 text-white">
        <svg className="relative block w-full h-[30px] md:h-[60px]" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path 
            d="M0,0 V40 Q360,80 720,40 T1440,40 V0 Z" 
            fill="currentColor" 
          />
        </svg>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-[#7A1F5C]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-[#C2185B]/5 blur-3xl pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6 border border-[#7A1F5C]/20">
            Let&apos;s Work Together
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-[#555555] text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href={primaryHref}
              className="group flex items-center justify-center gap-2 bg-[#7A1F5C] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-[#7A1F5C]/30 hover:shadow-2xl hover:shadow-[#7A1F5C]/40 hover:-translate-y-1 transition-all duration-300">
              {primaryLabel}
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link href={secondaryHref}
              className="flex items-center justify-center gap-2 border-2 border-[#7A1F5C] text-[#7A1F5C] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#7A1F5C]/5 transition-all duration-300">
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>



    </section>
  );
}
