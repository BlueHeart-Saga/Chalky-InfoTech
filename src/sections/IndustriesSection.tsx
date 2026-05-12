'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { INDUSTRIES } from '@/constants';
import { Cpu, Landmark, Activity, BookOpen, ShoppingCart, Play, Zap, Factory, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Cpu, Landmark, Activity, BookOpen, ShoppingCart, Play, Zap, Factory
};

const gradients = [
  'from-[#7A1F5C] to-[#C2185B]',
  'from-[#C2185B] to-[#D14D72]',
  'from-[#4A1238] to-[#7A1F5C]',
  'from-[#D14D72] to-[#C2185B]',
  'from-[#7A1F5C] to-[#4A1238]',
  'from-[#C2185B] to-[#7A1F5C]',
  'from-[#4A1238] to-[#C2185B]',
  'from-[#D14D72] to-[#7A1F5C]',
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-tight mb-4">
            Expertise Across
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7A1F5C] to-[#C2185B]">
              Every Industry
            </span>
          </h2>
          <p className="text-[#8A8A8A] max-w-xl mx-auto text-base">
            We bring specialist knowledge to 8+ major industries, delivering talent that makes an immediate impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, i) => {
            const Icon = iconMap[ind.icon] || Cpu;
            return (
              <motion.div key={ind.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}>
                <Link href={`/industries/${ind.slug}`}
                  className="group relative overflow-hidden flex flex-col items-center justify-center text-center h-44 rounded-2xl bg-[#F5F0E8] border border-[#EFE7DD] hover:border-transparent transition-all duration-400 hover:shadow-xl hover:shadow-[#7A1F5C]/20">
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`} />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-white/20 flex items-center justify-center shadow-sm transition-all duration-300">
                      <Icon size={26} className="text-[#7A1F5C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="font-bold text-sm text-[#1A1A1A] group-hover:text-white transition-colors duration-300">{ind.label}</p>
                    <ArrowUpRight size={14} className="text-[#7A1F5C] group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
