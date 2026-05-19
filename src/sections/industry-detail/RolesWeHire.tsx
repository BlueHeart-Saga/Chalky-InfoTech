'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  industryLabel: string;
  roles: string[];
}

const ROLE_IMAGES = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600', // professional woman smiling
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600', // professional man in suit
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600', // professional woman leader
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600', // professional man smiling
];

const CARD_STYLES = [
  {
    bg: 'bg-[#7A1F5C]/10',
    shape: 'rounded-[64px_8px_64px_8px]',
  },
  {
    bg: 'bg-[#DBCB89]/20',
    shape: 'rounded-[8px_64px_8px_64px]',
  },
  {
    bg: 'bg-[#C2DDE5]/30',
    shape: 'rounded-[8px_64px_8px_64px]',
  },
  {
    bg: 'bg-[#7A1F5C]/20',
    shape: 'rounded-[64px_8px_64px_8px]',
  },
];

function getRoleDetail(role: string, index: number) {
  const normalized = role.toLowerCase();
  
  let icon = 'UserCheck';
  let desc = 'Top-tier candidates with proven industry experience and rigorous technical vetting.';
  
  if (normalized.includes('developer') || normalized.includes('programmer') || normalized.includes('engineer') || normalized.includes('coder')) {
    icon = 'Code';
    desc = 'Specialists in clean architecture, agile workflows, and modern technology frameworks.';
  } else if (normalized.includes('architect') || normalized.includes('cloud') || normalized.includes('devops')) {
    icon = 'Cloud';
    desc = 'Architecting secure, highly-scalable cloud infrastructure and seamless CI/CD automation pipelines.';
  } else if (normalized.includes('data') || normalized.includes('scientist') || normalized.includes('analyst') || normalized.includes('ai')) {
    icon = 'Database';
    desc = 'Leveraging machine learning models, big data processing, and predictive analytics.';
  } else if (normalized.includes('product') || normalized.includes('manager') || normalized.includes('lead') || normalized.includes('director')) {
    icon = 'Briefcase';
    desc = 'Domain-expert leaders delivering cross-functional alignment and strategic project outcomes.';
  } else if (normalized.includes('security') || normalized.includes('cyber') || normalized.includes('penetration')) {
    icon = 'Shield';
    desc = 'Vetted threat hunters safeguarding enterprise architectures and compliance protocols.';
  } else if (normalized.includes('telecom') || normalized.includes('network') || normalized.includes('rf')) {
    icon = 'Radio';
    desc = 'Specialists in 5G core network architecture and large-scale fiber infrastructures.';
  } else if (normalized.includes('finance') || normalized.includes('risk') || normalized.includes('compliance') || normalized.includes('quant')) {
    icon = 'Coins';
    desc = 'Fintech and compliance professionals vetted for financial crime mitigation and quantitative trading.';
  } else if (normalized.includes('clinical') || normalized.includes('pharma') || normalized.includes('research') || normalized.includes('trial')) {
    icon = 'HeartPulse';
    desc = 'Certified researchers and scientists navigating clinical trials and regulatory drug discovery.';
  } else {
    const fallbacks = [
      { icon: 'UserCheck', desc: 'Pre-screened professionals with domain-specific certifications.' },
      { icon: 'Target', desc: 'Experts driving operational optimization and digital transformation goals.' },
      { icon: 'Zap', desc: 'Dynamic, agile specialists ready to accelerate product delivery timelines.' }
    ];
    const fb = fallbacks[index % fallbacks.length];
    icon = fb.icon;
    desc = fb.desc;
  }
  
  return { icon, desc };
}

export default function RolesWeHire({ industryLabel, roles }: Props) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE - Beautiful 2x2 Organic Flower Image Grid */}
          <div className="w-full lg:w-[45%] flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-6 border-2 border-dashed border-[#7A1F5C]/20 rounded-[56px] w-[340px] h-[340px] xs:w-[400px] xs:h-[400px] sm:w-[450px] sm:h-[450px] flex items-center justify-center bg-[#FAF8F5] shadow-sm"
            >
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                {ROLE_IMAGES.map((img, i) => {
                  const style = CARD_STYLES[i];
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`relative w-full h-full overflow-hidden ${style.bg} ${style.shape} p-2 cursor-pointer shadow-sm`}
                    >
                      <div className={`relative w-full h-full overflow-hidden ${style.shape}`}>
                        <Image
                          src={img}
                          alt="Pre-screened Candidate"
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-700 hover:scale-110"
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Roles List */}
          <div className="w-full lg:w-[55%]">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-extrabold uppercase tracking-widest mb-5">
              Talent Network
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-8 leading-tight tracking-tight">
              Roles We Hire for <span className="text-[#7A1F5C]">{industryLabel}</span>
            </h2>
            
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-200">
              {roles.map((role, i) => {
                const { icon, desc } = getRoleDetail(role, i);
                const IconComponent = (LucideIcons as any)[icon] || LucideIcons.UserCheck;
                const style = CARD_STYLES[i % CARD_STYLES.length];

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-5 group items-start p-2 rounded-2xl hover:bg-[#FAF8F5] transition-colors duration-300"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${style.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <IconComponent size={20} className="text-[#7A1F5C]" />
                    </div>
                    
                    <div className="flex-grow pt-1.5">
                      <h4 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors duration-300 mb-1">
                        {role}
                      </h4>
                      <p className="text-[#8A8A8A] text-sm leading-relaxed max-w-xl">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10">
              <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-[#7A1F5C] uppercase tracking-[0.2em] hover:gap-3 transition-all duration-300 group">
                Explore Job Board <LucideIcons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
