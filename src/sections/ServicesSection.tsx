'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SERVICES } from '@/constants';
import { ArrowUpRight, Code2, TrendingUp, GraduationCap, HeartPulse, ShoppingBag, Globe, Film, Zap, Cloud, Brain } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2, TrendingUp, GraduationCap, HeartPulse, ShoppingBag, Globe, Film, Zap, Cloud, Brain
};

export default function ServicesSection() {
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
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-4">
            Specialist Recruitment
            <span className="block text-[#7A1F5C]">
              Across Every Sector
            </span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-base leading-relaxed">
            From cutting-edge technology roles to specialist finance positions, we deliver bespoke talent solutions across 10 key sectors.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <motion.div key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}>
                <Link href={`/services/${service.slug}`}
                  className="group flex flex-col h-full bg-[#F5F0E8] hover:bg-gradient-to-br hover:from-[#7A1F5C] hover:to-[#C2185B] rounded-2xl p-6 transition-all duration-400 hover:shadow-xl hover:shadow-[#7A1F5C]/25 hover:-translate-y-1 border border-[#EFE7DD] hover:border-transparent">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center mb-5 transition-all duration-300 shadow-sm group-hover:shadow-none">
                    <Icon size={22} className="text-[#7A1F5C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] group-hover:text-white text-base mb-2 transition-colors duration-300">{service.label}</h3>
                  <p className="text-[#8A8A8A] group-hover:text-white/70 text-sm leading-relaxed flex-1 transition-colors duration-300">{service.desc}</p>
                  <div className="flex items-center gap-1 mt-4 text-[#7A1F5C] group-hover:text-white text-sm font-semibold transition-colors duration-300">
                    Learn more <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12">
          <Link href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-[#7A1F5C]/40 hover:scale-105 transition-all duration-300">
            View All Services <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
