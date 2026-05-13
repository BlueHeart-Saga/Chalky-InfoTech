'use client';
import { motion } from 'framer-motion';
import { STATS } from '@/constants';
import { Shield, Award, Globe, Zap } from 'lucide-react';

const features = [
  { icon: Globe, title: 'Global Reach', desc: 'Operating across UK, India and 15+ countries to source the finest talent.' },
  { icon: Shield, title: 'Trusted Partner', desc: '500+ enterprise clients trust Chalky Infotech for their critical hires.' },
  { icon: Award, title: 'Industry Leaders', desc: 'Recognised as a specialist in technology and digital recruitment.' },
  { icon: Zap, title: 'Fast Turnaround', desc: 'Average time-to-hire of 18 days across all specialist disciplines.' },
];

export default function CompanySection() {
  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">
              About Chalky Infotech
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
              Your Strategic
              <span className="block text-[#7A1F5C]">
                Talent Partner
              </span>
            </h2>
            <p className="text-[#8A8A8A] text-base leading-relaxed mb-4">
              Chalky Infotech is a specialist technology and digital recruitment consultancy with deep expertise across cloud, data, software engineering and digital transformation.
            </p>
            <p className="text-[#8A8A8A] text-base leading-relaxed">
              We work as a strategic extension of your HR function — understanding your culture, your ambitions, and delivering talent solutions that truly fit.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-[#7A1F5C]/10 transition-all duration-300 border border-[#EFE7DD] group">
                <p className="text-4xl font-extrabold text-[#7A1F5C] mb-2">{stat.value}</p>
                <p className="text-[#8A8A8A] text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-[#7A1F5C]/10 hover:-translate-y-1 transition-all duration-300 border border-[#EFE7DD] group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A1F5C] to-[#C2185B] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <f.icon size={22} className="text-white" />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-base mb-2">{f.title}</h3>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
