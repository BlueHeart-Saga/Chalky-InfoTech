'use client';

import { motion } from 'framer-motion';
import { Globe2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import OfficeLocations from '../contact/OfficeLocations';

const supportRegions = [
  {
    id: 'uk-ops',
    title: 'United Kingdom Operations',
    subtitle: 'London, UK',
    type: 'Strategic Hub',
    desc: 'Centralized strategy and client partnership management operating from our London headquarters.',
    image: 'https://images.unsplash.com/photo-1513635269975-59693e0cd156?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'india-hubs',
    title: 'India Talent Hubs',
    subtitle: 'Chennai & Thoothukudi',
    type: 'Delivery Center',
    desc: 'Deep technical sourcing and engineering delivery centers driving scalable recruitment operations.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b1f74d5d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'global-hiring',
    title: 'Global Hiring Coordination',
    subtitle: '15+ Countries',
    type: 'International Reach',
    desc: 'Managed recruitment processes acting seamlessly across international timezones and markets.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'remote-workforce',
    title: 'Remote Workforce Solutions',
    subtitle: 'Borderless',
    type: 'Distributed Teams',
    desc: 'Fully compliant borderless hiring designed for building high-performing distributed teams.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop',
  }
];

export default function GlobalWorkforceSupport() {
  return (
    <>
      <section className="py-24 bg-[#ffffff]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#7A1F5C] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              International Reach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
              Global <span className="text-[#7A1F5C]">Workforce Support</span>
            </h2>
            <p className="text-[#8A8A8A] text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              We provide seamless cross-border recruitment and workforce management, connecting UK and Indian centers of excellence with global talent opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {supportRegions.map((region, i) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#EFE7DD] shadow-lg shadow-[#7A1F5C]/5 hover:-translate-y-1.5 transition-transform duration-300"
              >
                {/* Image Header */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#7A1F5C]/10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 lg:p-8">

                  {/* Plum accent bar */}
                  <div className="w-8 h-1 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] mb-5 rounded-full" />

                  {/* Region type label */}
                  <p className="text-[#7A1F5C] text-[10px] font-bold uppercase tracking-widest mb-1">
                    {region.type}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 tracking-tight leading-snug">
                    {region.title}
                    <span className="block text-sm font-normal text-[#8A8A8A] mt-1">{region.subtitle}</span>
                  </h3>

                  {/* Description */}
                  <div className="flex items-start gap-3 mb-8 flex-1">
                    <Globe2 size={16} className="text-[#7A1F5C] mt-0.5 flex-shrink-0" />
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {region.desc}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#7A1F5C] border border-[#7A1F5C]/30 bg-[#FAFAFA] px-5 py-2.5 rounded-full w-fit hover:bg-[#7A1F5C] hover:text-white hover:border-[#7A1F5C] transition-all duration-300 mt-auto"
                  >
                    Learn More <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Embed Office Locations section directly underneath */}
      <OfficeLocations />
    </>
  );
}

