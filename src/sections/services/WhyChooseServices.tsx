'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Hexagon, Triangle, Circle, Square } from 'lucide-react';
import Link from 'next/link';

import adv1 from '@/assets/Services/Advantage/1.png';
import adv2 from '@/assets/Services/Advantage/2.png';
import adv3 from '@/assets/Services/Advantage/3.png';
import adv4 from '@/assets/Services/Advantage/4.png';

export default function WhyChooseServices() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Standardized Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            The Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Why Partner with <span className="text-[#7A1F5C]">Chalky Infotech?</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            We combine high-tech recruitment tools with high-touch human expertise to deliver premium, <Link href="/services" className="text-[#7A1F5C] hover:underline font-semibold">enterprise-grade talent solutions</Link> built on <Link href="/about" className="text-[#7A1F5C] hover:underline font-semibold">industry-best methodologies</Link>.
          </p>
        </div>

        {/* 2x2 Grid with smaller footprint and cross rotation */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Dark (Global Brands) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[24px] bg-black text-white h-[380px] shadow-2xl shadow-[#7A1F5C]/20 hover:shadow-[#7A1F5C]/40 group rotate-[-1deg] hover:rotate-0 transition-all duration-500"
          >
            <div className="absolute inset-0 z-0">
              <Image 
                src={adv1} 
                alt="City Skyscrapers" 
                fill 
                className="object-cover object-bottom opacity-60 group-hover:scale-105 transition-transform duration-700" 
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-3">Global brands</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                We have experience working with global corporate clients and top-tier brands in <Link href="/industries/retail-ecommerce" className="text-white underline hover:text-[#D14D72] font-semibold">logistics</Link>, <Link href="/industries/it-technology" className="text-white underline hover:text-[#D14D72] font-semibold">tech</Link>, <Link href="/industries/manufacturing" className="text-white underline hover:text-[#D14D72] font-semibold">energy</Link>, and global consulting.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-6 opacity-90">
                <span className="font-serif text-red-500 text-xl font-bold italic">J&J</span>
                <span className="bg-pink-600 text-white w-6 h-6 flex items-center justify-center font-black text-sm rounded-sm">T</span>
                <span className="font-serif text-white text-[10px] border border-white px-1.5 py-0.5 leading-tight text-center">THE<br/>GLOBE</span>
                <span className="font-black text-green-500 text-xl tracking-tighter">bp</span>
                <span className="font-bold text-white text-lg tracking-widest">BOSS</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Light (Exceptional Standards) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-[24px] bg-white text-[#1A1A1A] h-[380px] shadow-xl shadow-[#7A1F5C]/15 border border-[#7A1F5C]/5 hover:shadow-2xl hover:shadow-[#7A1F5C]/30 group rotate-[1.5deg] hover:rotate-0 transition-all duration-500"
          >
            <div className="absolute inset-0 z-0">
              <Image 
                src={adv2} 
                alt="Team working" 
                fill 
                className="object-cover object-bottom opacity-70 group-hover:scale-105 transition-transform duration-700" 
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-transparent" />
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-3">Exceptional standards</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                From rapidly growing Series A and B startups with a high <Link href="/services/it-staffing" className="text-[#7A1F5C] underline hover:text-[#D14D72] font-semibold">engineering talent bar</Link> to hedge funds and global investors - we exceed expectations by delivering <Link href="/services/executive-search" className="text-[#7A1F5C] underline hover:text-[#D14D72] font-semibold">executive leadership</Link>.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-6 text-gray-800">
                <Hexagon className="w-6 h-6 fill-blue-500 stroke-none opacity-80" />
                <Circle className="w-6 h-6 fill-red-500 stroke-none opacity-80" />
                <Triangle className="w-6 h-6 fill-green-500 stroke-none opacity-80 transform rotate-180" />
                <Square className="w-6 h-6 fill-purple-500 stroke-none opacity-80" />
                <Hexagon className="w-6 h-6 fill-orange-500 stroke-none opacity-80" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Light (Client Satisfaction) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-[24px] bg-white text-[#1A1A1A] h-[380px] shadow-xl shadow-[#7A1F5C]/15 border border-[#7A1F5C]/5 hover:shadow-2xl hover:shadow-[#7A1F5C]/30 group rotate-[1deg] hover:rotate-0 transition-all duration-500 md:-translate-y-4"
          >
            <div className="absolute inset-0 z-0">
              <Image 
                src={adv3} 
                alt="Celebration" 
                fill 
                className="object-cover object-bottom opacity-50 group-hover:scale-105 transition-transform duration-700" 
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-transparent" />
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-3">High client satisfaction</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Our reliability is attested by our years on the market and excellent client satisfaction on independent, external review portals. Ready to partner? <Link href="/contact" className="text-[#7A1F5C] underline hover:text-[#D14D72] font-semibold">Contact our team</Link> today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-8">
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Reviewed On</div>
                  <div className="font-black text-xl flex items-center gap-2 mb-1">
                    Clutch
                    <div className="flex text-yellow-400">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">5/5 | 37 reviews</div>
                </div>
                
                <div className="pt-1 sm:pt-0">
                  <div className="font-black text-xl flex items-center gap-2 mb-2 mt-4">
                    <span className="bg-gray-800 text-white w-5 h-5 flex items-center justify-center rounded text-xs">F</span> 
                    GoodFirms
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                    <div className="flex text-yellow-400">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                    5/5
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Dark (Recruiters) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-[24px] bg-black text-white h-[380px] shadow-2xl shadow-[#7A1F5C]/20 hover:shadow-[#7A1F5C]/40 group rotate-[-1.5deg] hover:rotate-0 transition-all duration-500 md:-translate-y-4"
          >
            <div className="absolute inset-0 z-0">
              <Image 
                src={adv4} 
                alt="Large Team" 
                fill 
                className="object-cover object-bottom opacity-60 group-hover:scale-105 transition-transform duration-700" 
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-3">Over 40 tech recruiters</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                We can hire up to 5 developers in the first month and 100 within a year, scaling perfectly to your growth requirements with our <Link href="/services/temporary-recruitment" className="text-white underline hover:text-[#D14D72] font-semibold">temporary recruitment</Link> and <Link href="/services/remote-hiring" className="text-white underline hover:text-[#D14D72] font-semibold">remote talent models</Link>.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

