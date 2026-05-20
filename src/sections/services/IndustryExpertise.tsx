'use client';

import { motion } from 'framer-motion';
import { Cpu, Radio, HardHat, MonitorPlay, Landmark, Activity, ShoppingCart, Factory, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const INDUSTRIES = [
  { slug: 'it-technology', label: 'IT & Technology', icon: Cpu, desc: 'Driving digital transformation with elite software engineers and full-stack technical specialists.' },
  { slug: 'telecommunications', label: 'Telecommunications', icon: Radio, desc: 'Scaling global connectivity with expert engineers for 5G, network, and satellite infrastructure.' },
  { slug: 'engineering-infrastructure', label: 'Engineering & Infrastructure', icon: HardHat, desc: 'Supporting large-scale engineering, civil, industrial, and technical workforce requirements.' },
  { slug: 'media-digital-services', label: 'Media & Digital Services', icon: MonitorPlay, desc: 'Connecting businesses with talent across digital platforms, content, and technology ecosystems.' },
  { slug: 'banking-finance', label: 'Banking & Finance', icon: Landmark, desc: 'Strategic talent acquisition for global financial institutions, fintech, and regulatory compliance.' },
  { slug: 'healthcare-life-sciences', label: 'Healthcare & Life Sciences', icon: Activity, desc: 'Providing critical expertise for clinical research, pharmaceutical development, and healthcare admin.' },
  { slug: 'retail-ecommerce', label: 'Retail & E-Commerce', icon: ShoppingCart, desc: 'Optimizing the consumer journey with specialists in omnichannel retail and e-commerce platforms.' },
  { slug: 'manufacturing', label: 'Manufacturing', icon: Factory, desc: 'Delivering engineering excellence and operational leadership for Industry 4.0 ecosystems.' }
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
            Our specialized recruitment units possess deep <Link href="/about" className="text-[#7A1F5C] hover:underline font-semibold">technical knowledge</Link> and cultural understanding across major sectors to ensure <Link href="/contact" className="text-[#7A1F5C] hover:underline font-semibold">precision hiring</Link>.
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
              className="h-full"
            >
              <Link 
                href={`/industries/${industry.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#F5F0E8] border border-[#EFE7DD] p-8 hover:shadow-2xl hover:shadow-[#7A1F5C]/20 hover:-translate-y-2 transition-all duration-400 min-h-[320px] h-full"
              >
                {/* Background Accent Circle */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full ${bgColors[i]} opacity-10 -translate-y-6 translate-x-6 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div>
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl ${bgColors[i]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#7A1F5C]/10`}>
                    <industry.icon size={26} className="text-white" />
                  </div>

                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-3 group-hover:text-[#7A1F5C] transition-colors duration-300 leading-tight">
                    {industry.label}
                  </h3>
                  
                  <p className="text-[#8A8A8A] text-xs leading-relaxed mb-6">
                    {industry.desc}
                  </p>
                </div>

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

