'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const INDUSTRIES_LIST = [
  {
    id: 'tech',
    title: 'Technology & Digital',
    desc: 'Supporting digital transformation initiatives through specialized recruitment solutions across software engineering, cloud operations, infrastructure, and emerging technology environments.',
    areas: ['Software Development', 'Cloud Operations', 'Digital Platforms', 'Transformation Projects'],
    challenges: ['Talent scarcity in niche tech', 'Rapidly evolving tech stacks'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    href: '/industries/it-technology'
  },
  {
    id: 'finance',
    title: 'Finance & Banking',
    desc: 'Connecting global financial institutions with top-tier professionals in fintech, risk management, compliance, and core investment banking operations.',
    areas: ['Fintech Innovation', 'Risk & Compliance', 'Investment Operations', 'Financial Analytics'],
    challenges: ['Complex regulatory landscape', 'Security & trust protocols'],
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=800&auto=format&fit=crop',
    href: '/industries/banking-finance'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    desc: 'Specialized talent acquisition for clinical research, pharmaceutical development, and high-impact healthcare administration roles.',
    areas: ['Clinical Research', 'Pharma Operations', 'Medical Administration', 'Biotech Innovation'],
    challenges: ['Specialized medical vetting', 'Compliance with healthcare laws'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    href: '/industries/healthcare-life-sciences'
  },
  {
    id: 'education',
    title: 'Education & Training',
    desc: 'Bridging academia and industry through expert recruitment for EdTech platforms, training centers, and academic institutions.',
    areas: ['EdTech Platforms', 'Training & Development', 'Academic Leadership', 'Skill Development'],
    challenges: ['Curriculum alignment', 'Educational technology shift'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=800&auto=format&fit=crop',
    href: '/industries/education'
  },
  {
    id: 'retail',
    title: 'Retail & Commerce',
    desc: 'Optimizing the modern consumer journey with specialists in omnichannel retail, supply chain logistics, and e-commerce platform management.',
    areas: ['Omnichannel Strategy', 'Logistics & Supply Chain', 'E-commerce Platforms', 'Retail Operations'],
    challenges: ['Demand volatility', 'Digital-first retail shift'],
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=800&auto=format&fit=crop',
    href: '/industries/retail-ecommerce'
  },
  {
    id: 'manufacturing',
    title: 'Energy & Manufacturing',
    desc: 'Delivering engineering excellence and operational leadership for Industry 4.0 ecosystems and sustainable energy infrastructure.',
    areas: ['Industry 4.0 Systems', 'Process Engineering', 'Renewable Infrastructure', 'Operational Excellence'],
    challenges: ['Technical skill gap', 'Legacy systems integration'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    href: '/industries/manufacturing'
  }
];

export default function FeaturedIndustryExpertise() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Core Specialization
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Global <span className="text-[#7A1F5C]">Industry Blocks</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            We operate through specialized industry units that speak your language and understand your specific workforce challenges.
          </p>
        </div>

        <div className="space-y-32 lg:space-y-48">
          {INDUSTRIES_LIST.map((ind, i) => (
            <div key={ind.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <Image src={ind.image} alt={ind.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-3xl lg:text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">{ind.title}</h3>
                <p className="text-[#8A8A8A] text-lg leading-relaxed mb-10">{ind.desc}</p>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-[#7A1F5C] uppercase tracking-widest border-b border-[#7A1F5C]/10 pb-2">Key Workforce Areas</p>
                    {ind.areas.map((area) => (
                      <div key={area} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[#7A1F5C] flex-shrink-0" />
                        <span className="text-sm text-[#555] font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <p className="text-[11px] font-bold text-[#7A1F5C] uppercase tracking-widest border-b border-[#7A1F5C]/10 pb-2">Sector Challenges</p>
                    {ind.challenges.map((challenge) => (
                      <div key={challenge} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C] mt-2 flex-shrink-0" />
                        <span className="text-sm text-[#8A8A8A]">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={ind.href} className="inline-flex items-center gap-2 bg-[#7A1F5C] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#4A1238] transition-all duration-300 shadow-lg shadow-[#7A1F5C]/20 hover:-translate-y-1">
                  Explore {ind.title} Solutions <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

