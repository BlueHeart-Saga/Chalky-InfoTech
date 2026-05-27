'use client';

import { motion } from 'framer-motion';
import { Target, Users, Zap, BarChart3, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import eco1 from '@/assets/Services/Service-Ecosystem/1.png';
import eco2 from '@/assets/Services/Service-Ecosystem/2.png';
import eco3 from '@/assets/Services/Service-Ecosystem/3.png';
import eco4 from '@/assets/Services/Service-Ecosystem/4.png';

const OVERVIEW_CARDS = [
  {
    icon: Target,
    title: 'Strategic Talent Acquisition',
    desc: 'Aligning top-tier candidates with your specific organizational goals and technical requirements.',
    color: 'from-[#7A1F5C] to-[#4A1238]',
    image: eco1,
    link: '/services/permanent-hiring'
  },
  {
    icon: Users,
    title: 'Workforce Scaling',
    desc: 'Rapidly expanding your capabilities with skilled professionals across diverse disciplines.',
    color: 'from-[#C2185B] to-[#7A1F5C]',
    image: eco2,
    link: '/services/remote-hiring'
  },
  {
    icon: Zap,
    title: 'Agile Staffing Models',
    desc: 'Flexible recruitment solutions designed to adapt to evolving market and business needs.',
    color: 'from-[#D14D72] to-[#C2185B]',
    image: eco3,
    link: '/services/temporary-recruitment'
  },
  {
    icon: BarChart3,
    title: 'Operational Excellence',
    desc: 'Optimizing your hiring process for speed, quality, and long-term retention success.',
    color: 'from-[#4A1238] to-[#2D0F22]',
    image: eco4,
    link: '/services/managed-services'
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-[#F5F0E8]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-16">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">
              Service Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
              Flexible Recruitment Solutions for <span className="text-[#7A1F5C]">Evolving Business Needs</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-[#8A8A8A] text-lg leading-relaxed border-l-4 border-[#7A1F5C] pl-8">
              From <Link href="/services/contract-staffing" className="text-[#7A1F5C] hover:underline font-semibold">contract staffing</Link> and <Link href="/services/permanent-hiring" className="text-[#7A1F5C] hover:underline font-semibold">permanent recruitment</Link> to <Link href="/services/remote-hiring" className="text-[#7A1F5C] hover:underline font-semibold">workforce scaling</Link> and <Link href="/services/on-site-recruitment" className="text-[#7A1F5C] hover:underline font-semibold">on-site hiring support</Link>, Chalky Infotech provides an integrated recruitment ecosystem designed to drive organizational growth and technical innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OVERVIEW_CARDS.map((card, i) => (
            <Link key={i} href={card.link} className="block h-[320px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#EBEBEB] h-full cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Area - Top */}
                <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Area - Bottom (default), Full height (hover) */}
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#EBEBEB] group-hover:bg-white p-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10">
                  <h4 className="text-base font-semibold text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#7A1F5C] transition-colors">{card.title}</h4>

                  {/* Hidden content that fades in on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow pt-2 flex flex-col">
                    <p className="text-[#4A4A4A] text-xs leading-relaxed mb-4">{card.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[#7A1F5C] font-semibold text-xs mt-auto">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>

                  {/* Bottom label that fades out on hover */}
                  <span className="absolute bottom-6 left-6 text-[#8A8A8A] text-[10px] uppercase tracking-wider group-hover:opacity-0 transition-opacity duration-300 font-bold">Services</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
