'use client';

import { motion } from 'framer-motion';
import { Cpu, Radio, HardHat, MonitorPlay, Landmark, Activity, ShoppingCart, Factory, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const INDUSTRIES = [
  { slug: 'it-technology', label: 'IT & Technology', icon: Cpu, desc: 'Connecting businesses with skilled software engineers, cloud specialists, and technology professionals for evolving digital needs.' },
  { slug: 'telecommunications', label: 'Telecommunications', icon: Radio, desc: 'Supporting connectivity and communications businesses with experienced talent across 5G, networks, infrastructure, and satellite technologies.' },
  { slug: 'engineering-infrastructure', label: 'Engineering & Infrastructure', icon: HardHat, desc: 'Meeting large-scale workforce requirements with skilled professionals across engineering, civil, industrial, and technical disciplines.' },
  { slug: 'media-digital-services', label: 'Media & Digital Services', icon: MonitorPlay, desc: 'Connecting organisations with professionals across digital platforms, content, creative technology, and online service ecosystems.' },
  { slug: 'banking-finance', label: 'Banking & Finance', icon: Landmark, desc: 'Providing specialist recruitment solutions for financial institutions, fintech businesses, banking operations, and regulatory functions.' },
  { slug: 'healthcare-life-sciences', label: 'Healthcare & Life Sciences', icon: Activity, desc: 'Connecting organisations with experienced professionals across clinical research, pharmaceuticals, healthcare operations, and life sciences.' },
  { slug: 'retail-ecommerce', label: 'Retail & E-Commerce', icon: ShoppingCart, desc: 'Supporting retail and e-commerce businesses with specialists across digital commerce, customer experience, omnichannel operations, and technology.' },
  { slug: 'manufacturing', label: 'Manufacturing', icon: Factory, desc: 'Providing skilled talent across engineering, production, technology, and operational leadership for modern manufacturing environments.' }
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
    <section className="relative pt-24 pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Domain Specialization
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Global <span className="text-[#7A1F5C]">Industry Expertise</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
           Our specialist recruitment teams combine  <Link href="/about" className="text-[#7A1F5C] hover:underline font-semibold">industry knowledge</Link> technical expertise, and market understanding to deliver <Link href="/contact" className="text-[#7A1F5C] hover:underline font-semibold">precision recruitment </Link>across key sectors in the UK and global markets..
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
      {/* Wave Divider to Cream */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#F5F0E8"></path>
        </svg>
      </div>
    </section>
  );
}

