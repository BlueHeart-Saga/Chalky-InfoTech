'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TrustImg from '@/assets/Services-details-page/Globalsector.png';
import { 
  Globe2, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Users, 
  Briefcase, 
  Building2, 
  Settings, 
  MonitorSmartphone,
  ArrowUpRight 
} from 'lucide-react';

interface Props {
  industries: string[];
  serviceLabel?: string;
}

const RECRUITMENT_SOLUTIONS = [
  { title: 'IT Staffing', icon: MonitorSmartphone, desc: 'Specialized IT recruitment solutions connecting you with elite engineering talent.' },
  { title: 'Executive Search', icon: ShieldCheck, desc: 'Discreet search services for identifying world-class C-suite leadership.' },
  { title: 'Contract Staffing', icon: Clock, desc: 'Agile solutions providing flexible, expert talent for project-based demands.' },
  { title: 'Permanent Hiring', icon: Users, desc: 'Strategic placement services to build your long-term success with high-retention talent.' },
];

const bgColors = [
  'bg-[#7A1F5C]',
  'bg-[#C2185B]',
  'bg-[#D14D72]',
  'bg-[#4A1238]'
];

const CLIENT_LOGOS = [
  { src: '/clients/c30.png', name: 'c30' },
  { src: '/clients/c31.png', name: 'c31' },
  { src: '/clients/c29.png', name: 'c29' },
  { src: '/clients/c1.png', name: 'c1' },
  { src: '/clients/c2.png', name: 'c2' },
  { src: '/clients/c3.png', name: 'c3' },
  { src: '/clients/c4.png', name: 'c4' },
  { src: '/clients/c5.png', name: 'c5' },
  { src: '/clients/c6.jpg', name: 'c6' },
  { src: '/clients/c7.png', name: 'c7' },
  { src: '/clients/c8.png', name: 'c8' },
  { src: '/clients/c9.png', name: 'c9' },
  { src: '/clients/c10.png', name: 'c10' },
  { src: '/clients/c11.jpg', name: 'c11' },
  { src: '/clients/c12.png', name: 'c12' },
  { src: '/clients/c13.png', name: 'c13' },
  { src: '/clients/c14.jpg', name: 'c14' },
  { src: '/clients/c15.png', name: 'c15' },
  { src: '/clients/c16.png', name: 'c16' },
  { src: '/clients/c17.png', name: 'c17' },
  { src: '/clients/c18.png', name: 'c18' },
  { src: '/clients/c19.png', name: 'c19' },
  { src: '/clients/c20.png', name: 'c20' },
  { src: '/clients/c21.webp', name: 'c21' },
  { src: '/clients/c22.png', name: 'c22' },
  { src: '/clients/c23.png', name: 'c23' },
  { src: '/clients/c24.jpg', name: 'c24' },
  { src: '/clients/c25.png', name: 'c25' },
  { src: '/clients/c26.png', name: 'c26' },
  { src: '/clients/c27.png', name: 'c27' },
  { src: '/clients/c28.jpg', name: 'c28' },
];

export default function IndustrySupport({ industries, serviceLabel }: Props) {
  return (
    <section className="pt-24 pb-8 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 pb-20 border-b border-[#F0F0F0]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-6">
              Global Sector Support
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-8 leading-[1.1]">
              Cross-Border <span className="text-[#7A1F5C]">{serviceLabel || 'Service'}</span> & <br/>
              Industry Expertise
            </h2>
            <p className="text-[#8A8A8A] text-lg leading-relaxed mb-10">
              We provide seamless workforce management and specialized recruitment support across international borders, ensuring your organization has the right talent in every major global hub.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {industries.map((ind, i) => (
                <div key={i} className="px-5 py-2 rounded-full bg-[#F5F0E8] border border-[#EFE7DD] text-[#1A1A1A] font-bold text-[11px] uppercase tracking-wider">
                  {ind}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <Image 
              src={TrustImg} 
              alt="Global Trust" 
              className="w-full h-auto max-w-[550px] object-contain hover:scale-[1.02] transition-transform duration-700" 
            />
          </motion.div>
        </div>

        {/* Representative Searches Style Grid */}
        <div id="searches">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6 tracking-tight">
              Trusted by Global Leaders
            </h2>
            <p className="text-[#666] max-w-4xl mx-auto text-lg leading-relaxed">
              We partner with ambitious companies across the financial and technology sectors to deliver high-impact talent solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-16 border-t border-[#F0F0F0]">
            {CLIENT_LOGOS.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 10) * 0.05 }}
                className="bg-white h-[100px] flex items-center justify-center rounded-xl p-5 border border-[#F0F0F0] hover:shadow-2xl hover:shadow-[#7A1F5C]/5 hover:border-[#7A1F5C]/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={client.src} 
                    alt={`Client Partner ${client.name}`} 
                    fill 
                    unoptimized
                    className="object-contain group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

