'use client';

import { motion } from 'framer-motion';
import { Cpu, Activity, Landmark, GraduationCap, ShoppingCart, Factory, Zap, Play, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const INDUSTRIES = [
  { slug: 'technology', label: 'Technology', icon: Cpu, desc: 'Software, Cloud, AI & Data Engineering.' },
  { slug: 'healthcare', label: 'Healthcare', icon: Activity, desc: 'Medical, Biotech & Pharmaceutical.' },
  { slug: 'finance', label: 'Finance & Banking', icon: Landmark, desc: 'Fintech, Compliance & Investment.' },
  { slug: 'education', label: 'Education', icon: GraduationCap, desc: 'EdTech, Training & Administration.' },
  { slug: 'retail', label: 'Retail & E-commerce', icon: ShoppingCart, desc: 'Omnichannel & Logistics.' },
  { slug: 'manufacturing', label: 'Manufacturing', icon: Factory, desc: 'Industry 4.0 & Operations.' },
  { slug: 'energy', label: 'Energy & Utilities', icon: Zap, desc: 'Renewables & Infrastructure.' },
  { slug: 'media', label: 'Media & Entertainment', icon: Play, desc: 'Digital Media & Broadcasting.' }
];

const bgColors = [
  'bg-[#7A1F5C]',
  'bg-[#C2185B]',
  'bg-[#D14D72]',
  'bg-[#4A1238]',
  'bg-[#7A1F5C]',
  'bg-[#C2185B]',
  'bg-[#D14D72]',
  'bg-[#4A1238]'
];

export default function IndustryExpertise() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Domain Specialization
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Global <span className="text-[#7A1F5C]">Industry Expertise</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            Our specialized recruitment units possess deep technical and cultural knowledge across major global sectors to ensure precision hiring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link 
                href={`/industries/${industry.slug}`}
                className="group relative block overflow-hidden rounded-3xl bg-[#F5F0E8] border border-[#EFE7DD] p-8 hover:shadow-2xl hover:shadow-[#7A1F5C]/20 hover:-translate-y-2 transition-all duration-400"
              >
                {/* Background Accent Circle */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full ${bgColors[i]} opacity-10 -translate-y-6 translate-x-6 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl ${bgColors[i]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#7A1F5C]/10`}>
                  <industry.icon size={26} className="text-white" />
                </div>

                <h3 className="font-bold text-[#1A1A1A] text-lg mb-3 group-hover:text-[#7A1F5C] transition-colors duration-300">
                  {industry.label}
                </h3>
                
                <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">
                  {industry.desc}
                </p>

                <div className="flex items-center gap-2 text-[#7A1F5C] font-semibold text-sm">
                  Explore <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
