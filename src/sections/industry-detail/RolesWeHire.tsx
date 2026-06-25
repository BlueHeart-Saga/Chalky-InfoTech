'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  industryLabel: string;
  roles: string[];
}

import role1 from '@/assets/Industries details page/0984b78e-a3cd-4140-bb92-25c667bcdb64 2.png';
import role2 from '@/assets/Industries details page/22887846-ad6a-430a-b2cf-4b8978d1f49b 2.png';
import role3 from '@/assets/Industries details page/3d1aa0a5-7fb6-49fb-8323-c7dffbfe7dea 2.png';
import role4 from '@/assets/Industries details page/4c5646f2-d225-44c1-ae8a-bdc3d5ee4608 1.png';

const ROLE_IMAGES = [
  role1.src,
  role2.src,
  role3.src,
  role4.src,
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

const getSerratedPath = (points = 36, rOuter = 48, rInner = 44) => {
  let pathD = '';
  for (let i = 0; i < points; i++) {
    const angle1 = (i * 2 * Math.PI) / points;
    const angle2 = ((i + 0.5) * 2 * Math.PI) / points;
    const x1 = 50 + rOuter * Math.cos(angle1);
    const y1 = 50 + rOuter * Math.sin(angle1);
    const x2 = 50 + rInner * Math.cos(angle2);
    const y2 = 50 + rInner * Math.sin(angle2);
    if (i === 0) {
      pathD += `M ${x1.toFixed(2)} ${y1.toFixed(2)}`;
    } else {
      pathD += ` L ${x1.toFixed(2)} ${y1.toFixed(2)}`;
    }
    pathD += ` L ${x2.toFixed(2)} ${y2.toFixed(2)}`;
  }
  pathD += ' Z';
  return pathD;
};

const SERRATED_PATH = getSerratedPath(36, 48, 44);

export default function RolesWeHire({ industryLabel, roles }: Props) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE - Beautiful Premium Image Collage */}
          <div className="w-full lg:w-[45%] flex justify-center py-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-[280px] h-[280px] xs:w-[360px] xs:h-[360px] sm:w-[420px] sm:h-[420px]"
            >
              {/* Sparkles decoration in bottom-left */}
              <div className="absolute -left-6 bottom-4 sm:-left-10 sm:bottom-8 z-0 pointer-events-none">
                {/* Large Sparkle */}
                <motion.svg
                  animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  viewBox="0 0 100 100"
                  className="w-10 h-10 text-[#7A1F5C] fill-[#7A1F5C] opacity-80"
                >
                  <path d="M 50 0 C 50 35 65 50 100 50 C 65 50 50 65 50 100 C 50 65 35 50 0 50 C 35 50 50 35 50 0 Z" />
                </motion.svg>
                {/* Medium Sparkle */}
                <motion.svg
                  animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, -20, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  viewBox="0 0 100 100"
                  className="w-6 h-6 text-[#DBCB89] fill-[#DBCB89] opacity-90 absolute -left-6 -top-10"
                >
                  <path d="M 50 0 C 50 35 65 50 100 50 C 65 50 50 65 50 100 C 50 65 35 50 0 50 C 35 50 50 35 50 0 Z" />
                </motion.svg>
                {/* Small Sparkle */}
                <motion.svg
                  animate={{ scale: [0.85, 1.15, 0.85], rotate: [0, 25, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  viewBox="0 0 100 100"
                  className="w-4 h-4 text-[#7A1F5C] fill-[#7A1F5C] opacity-70 absolute left-8 -bottom-4"
                >
                  <path d="M 50 0 C 50 35 65 50 100 50 C 65 50 50 65 50 100 C 50 65 35 50 0 50 C 35 50 50 35 50 0 Z" />
                </motion.svg>
              </div>

              {/* 2x2 collage grid */}
              <div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
                {/* Card 1: Top-Left */}
                <div className="relative w-full h-full">
                  <div className="absolute -top-2.5 -left-2.5 w-full h-full bg-[#7A1F5C] rounded-tl-[60px] xs:rounded-tl-[80px] sm:rounded-tl-[100px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl -z-10 opacity-90" />
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative w-full h-full overflow-hidden rounded-tl-[60px] xs:rounded-tl-[80px] sm:rounded-tl-[100px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border-2 border-white shadow-md cursor-pointer group bg-[#7A1F5C]/10 aspect-square"
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-tl-[60px] xs:rounded-tl-[80px] sm:rounded-tl-[100px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
                      <Image
                        src={ROLE_IMAGES[0]}
                        alt="Pre-screened Candidate"
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Card 2: Top-Right */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative w-full h-full overflow-hidden rounded-tr-[60px] xs:rounded-tr-[80px] sm:rounded-tr-[100px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl border-2 border-white shadow-md cursor-pointer group bg-[#DBCB89]/20 aspect-square"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-tr-[60px] xs:rounded-tr-[80px] sm:rounded-tr-[100px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl">
                    <Image
                      src={ROLE_IMAGES[1]}
                      alt="Pre-screened Candidate"
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </motion.div>

                {/* Card 3: Bottom-Left */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative w-full h-full overflow-hidden rounded-bl-[60px] xs:rounded-bl-[80px] sm:rounded-bl-[100px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border-2 border-white shadow-md cursor-pointer group bg-[#C2DDE5]/30 aspect-square"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-bl-[60px] xs:rounded-bl-[80px] sm:rounded-bl-[100px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                    <Image
                      src={ROLE_IMAGES[2]}
                      alt="Pre-screened Candidate"
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </motion.div>

                {/* Card 4: Bottom-Right */}
                <div className="relative w-full h-full">
                  <div className="absolute -bottom-2.5 -right-2.5 w-full h-full bg-[#1E0013] rounded-br-[60px] xs:rounded-br-[80px] sm:rounded-br-[100px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl -z-10 opacity-90" />
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative w-full h-full overflow-hidden rounded-br-[60px] xs:rounded-br-[80px] sm:rounded-br-[100px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl border-2 border-white shadow-md cursor-pointer group bg-[#7A1F5C]/20 aspect-square"
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-br-[60px] xs:rounded-br-[80px] sm:rounded-br-[100px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
                      <Image
                        src={ROLE_IMAGES[3]}
                        alt="Pre-screened Candidate"
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Center Seal Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                {/* Rotating outer scalloped seal & text bezel */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                    <path
                      d={SERRATED_PATH}
                      fill="#7A1F5C"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.4)"
                      strokeWidth="1"
                      strokeDasharray="3, 3"
                    />
                    <path
                      id="textCircle"
                      d="M 50 16 A 34 34 0 1 1 49.9 16"
                      fill="none"
                    />
                    <text className="text-[7.5px] font-extrabold tracking-[0.18em] fill-white uppercase">
                      <textPath href="#textCircle" startOffset="0%">
                        Roles We Hire • Chalky InfoTech •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Stationary inner part */}
                <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-inner z-10 border border-[#7A1F5C]/15">
                  <LucideIcons.ArrowUpRight size={20} className="text-[#7A1F5C]" />
                </div>
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
