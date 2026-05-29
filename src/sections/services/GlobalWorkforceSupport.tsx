'use client';

import { motion } from 'framer-motion';
import { Globe2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import OfficeLocations from '../contact/OfficeLocations';

import glob1 from '@/assets/Services/Global-WorkForce-Support/1.png';
import glob2 from '@/assets/Services/Global-WorkForce-Support/2.png';
import glob3 from '@/assets/Services/Global-WorkForce-Support/3.png';
import glob4 from '@/assets/Services/Global-WorkForce-Support/4.png';

const supportRegions = [
  {
    id: 'uk-ops',
    title: 'United Kingdom Operations',
    subtitle: 'London, UK',
    type: 'Strategic Hub',
    desc: 'Centralized strategy and client partnership management operating from our London headquarters.',
    image: glob1,
  },
  {
    id: 'india-hubs',
    title: 'India Talent Hubs',
    subtitle: 'Chennai & Thoothukudi',
    type: 'Delivery Center',
    desc: 'Deep technical sourcing and engineering delivery centers driving scalable recruitment operations.',
    image: glob2,
  },
  {
    id: 'global-hiring',
    title: 'Global Hiring Coordination',
    subtitle: '15+ Countries',
    type: 'International Reach',
    desc: 'Managed recruitment processes acting seamlessly across international timezones and markets.',
    image: glob3,
  },
  {
    id: 'remote-workforce',
    title: 'Remote Workforce Solutions',
    subtitle: 'Borderless',
    type: 'Distributed Teams',
    desc: 'Fully compliant borderless hiring designed for building high-performing distributed teams.',
    image: glob4,
  }
];

export default function GlobalWorkforceSupport() {
  return (
    <>
      <section className="relative pt-24 pb-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
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
              We provide seamless cross-border recruitment and workforce management, connecting our <Link href="/about" className="text-[#7A1F5C] hover:underline font-semibold">centers of excellence</Link> in the UK and India with global <Link href="/contact" className="text-[#7A1F5C] hover:underline font-semibold">talent opportunities</Link>.
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
                  <Link
                    href={region.id === 'remote-workforce' ? '/services/remote-hiring' : region.id === 'global-hiring' ? '/services' : '/about'}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#7A1F5C] border border-[#7A1F5C]/30 bg-[#FAFAFA] px-5 py-2.5 rounded-full w-fit hover:bg-[#7A1F5C] hover:text-white hover:border-[#7A1F5C] transition-all duration-300 mt-auto"
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Wave Divider to Humanex BG */}
        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#FAF8F5"></path>
          </svg>
        </div> */}
      </section>

      {/* Embed Office Locations section directly underneath */}
      <OfficeLocations />
    </>
  );
}
