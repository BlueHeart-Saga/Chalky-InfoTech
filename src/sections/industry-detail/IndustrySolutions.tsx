'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import trustedImg from '@/assets/Industries details page/Trusted By Businesses (2).png';

interface Props {
  services: string[];
}

const ALL_EIGHT_MODELS = [
  'IT Staffing',
  'Executive Search',
  'Contract Staffing',
  'Permanent Hiring',
  'Temporary Recruitment',
  'On-Site Recruitment',
  'Managed Services',
  'Remote Hiring'
];

function getServiceDetail(service: string, index: number) {
  const normalized = service.toLowerCase();
  
  let icon = 'CheckCircle2';
  let desc = 'Strategic recruitment solutions tailored to your operational scale and domain requirements.';
  let badge = 'Talent Partner';
  let bg = 'bg-[#FAF8F5]';
  let iconColor = 'text-[#7A1F5C]';
  let shape = 'rounded-[50%_50%_0_50%]';

  // Shapes staggered based on index (stretching shapes to create organic feel)
  const shapes = [
    'rounded-[50%_50%_0_50%]',
    'rounded-[50%_50%_50%_0%]',
    'rounded-[0_50%_50%_50%]',
    'rounded-[50%_0_50%_50%]',
  ];
  shape = shapes[index % shapes.length];

  // Harmonized background colors matching the Moscow design system guidelines
  const colors = [
    { bg: 'bg-[#C2DDE5]/30', iconColor: 'text-[#7A1F5C]' },
    { bg: 'bg-[#7A1F5C]/10', iconColor: 'text-[#7A1F5C]' },
    { bg: 'bg-[#DBCB89]/20', iconColor: 'text-[#7A1F5C]' },
    { bg: 'bg-[#7A1F5C]/20', iconColor: 'text-[#7A1F5C]' },
    { bg: 'bg-[#C2DDE5]/20', iconColor: 'text-[#7A1F5C]' },
    { bg: 'bg-[#FAF0E6]', iconColor: 'text-[#7A1F5C]' },
    { bg: 'bg-[#DBCB89]/30', iconColor: 'text-[#7A1F5C]' },
    { bg: 'bg-[#7A1F5C]/15', iconColor: 'text-[#7A1F5C]' },
  ];
  const colorSet = colors[index % colors.length];
  bg = colorSet.bg;
  iconColor = colorSet.iconColor;

  if (normalized.includes('it staffing') || normalized.includes('it recruitment')) {
    icon = 'Cpu';
    desc = 'Specialized IT recruitment solutions connecting you with elite software, cloud, and data engineering talent.';
    badge = 'Elite Software Talent';
  } else if (normalized.includes('executive search')) {
    icon = 'Award';
    desc = 'Discreet, high-impact search services for identifying and attracting world-class C-suite leadership.';
    badge = 'Discreet C-Suite Sourcing';
  } else if (normalized.includes('contract staffing')) {
    icon = 'Clock';
    desc = 'Agile contract staffing solutions providing flexible, expert talent to meet your project-based demands.';
    badge = 'Flexible Contractors';
  } else if (normalized.includes('permanent hiring') || normalized.includes('permanent placement') || normalized.includes('permanent recruitment')) {
    icon = 'Users';
    desc = 'Strategic permanent placement services to build your long-term success with high-retention talent.';
    badge = 'High-Retention Staff';
  } else if (normalized.includes('temporary recruitment') || normalized.includes('temporary staffing') || normalized.includes('temporary hiring') || normalized.includes('temporary')) {
    icon = 'Zap';
    desc = 'Rapid-response temporary recruitment services to scale your workforce quickly for high-volume needs.';
    badge = 'Rapid-Response Teams';
  } else if (normalized.includes('on-site') || normalized.includes('on site') || normalized.includes('onsite')) {
    icon = 'MapPin';
    desc = 'Full-cycle on-site solutions delivering dedicated talent partners as a seamless extension of your HR team.';
    badge = 'Dedicated HR Extension';
  } else if (normalized.includes('managed services') || normalized.includes('msp') || normalized.includes('managed')) {
    icon = 'Layers';
    desc = 'End-to-end managed workforce solutions (MSP) for optimizing your talent supply chain and efficiency.';
    badge = 'MSP Supply Chain';
  } else if (normalized.includes('remote hiring') || normalized.includes('remote teams') || normalized.includes('remote recruitment') || normalized.includes('remote')) {
    icon = 'Globe';
    desc = 'Global remote hiring services enabling you to build borderless teams with top-tier international professionals.';
    badge = 'Borderless Professionals';
  }

  return { icon, desc, badge, bg, iconColor, shape };
}

export default function IndustrySolutions({ services }: Props) {
  return (
    <section className="py-24 bg-[#FAF8F5] overflow-hidden relative">
      
      {/* Dynamic inline styles for smooth organic morphing and continuous smooth infinite marquee scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes morph {
          0% { border-radius: 60% 40% 70% 30% / 40% 50% 60% 50%; }
          50% { border-radius: 50% 60% 45% 55% / 55% 45% 65% 35%; }
          100% { border-radius: 60% 40% 70% 30% / 40% 50% 60% 50%; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── PART 1: THE CONSULTANT PROFILE ROW (Mockup Top Part) ── */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-36">
          
          {/* Left Column - Blob Image & Hover Metrics */}
          <div className="w-full lg:w-[45%] flex justify-center relative">
            <div className="relative w-[300px] h-[300px] xs:w-[350px] xs:h-[350px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
              
              {/* Animated Morphing Background Blob */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-[#7A1F5C]/10 to-[#DBCB89]/10 z-0"
                style={{ animation: 'morph 8s ease-in-out infinite' }}
              />
              
              {/* Vetted Consultant Image Wrapper */}
              <div 
                className="relative w-[85%] h-[85%] overflow-hidden shadow-2xl border-8 border-white z-10 transition-all duration-700 hover:scale-[1.02]"
                style={{ animation: 'morph 8s ease-in-out infinite' }}
              >
                <Image
                  src={trustedImg.src}
                  alt="Talent Acquisition Director"
                  fill
                  unoptimized
                  className="object-cover object-top"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
              
              {/* Floating Badge 1 - Top Right */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-2 -right-4 bg-white border border-[#EFE7DD] rounded-2xl px-4 py-2.5 shadow-lg z-20 flex flex-col items-center select-none"
              >
                <span className="text-[#7A1F5C] font-black text-lg leading-none">10k+</span>
                <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider mt-0.5">Vetted Talents</span>
              </motion.div>

              {/* Floating Badge 2 - Mid Left */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -left-10 bg-white border border-[#EFE7DD] rounded-2xl px-4 py-2.5 shadow-lg z-20 flex flex-col items-center select-none"
              >
                <span className="text-[#7A1F5C] font-black text-lg leading-none">98.6%</span>
                <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider mt-0.5">Success Rate</span>
              </motion.div>

              {/* Floating Badge 3 - Bottom Right */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 right-2 bg-white border border-[#EFE7DD] rounded-2xl px-4 py-2.5 shadow-lg z-20 flex flex-col items-center select-none"
              >
                <span className="text-[#7A1F5C] font-black text-lg leading-none">14 Days</span>
                <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider mt-0.5">Avg Delivery</span>
              </motion.div>

            </div>
          </div>

          {/* Right Column - Profile Strategic Text */}
          <div className="w-full lg:w-[55%]">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-extrabold uppercase tracking-widest mb-5">
              Strategic Talent Sourcing
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight tracking-tight">
              Empowering Growth through <span className="text-[#7A1F5C]">Tailored Solutions</span>
            </h2>
            
            <p className="text-[#8A8A8A] text-lg leading-relaxed mb-6 font-medium">
              We leverage an extensive database of pre-screened professionals to deliver exceptional hires who integrate seamlessly into your digital ecosystems.
            </p>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Our consultative approach focuses on aligning technical expertise with company culture. Whether filling a single critical leadership vacancy or scaling an entire agile engineering cohort, our pre-vetted pathways guarantee compliance, security, and long-term retention.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-xl bg-[#7A1F5C] hover:bg-[#68194E] text-white font-extrabold text-xs uppercase tracking-widest shadow-md transition-colors duration-300"
              >
                Hire Talents
              </Link>
              <Link 
                href="/jobs" 
                className="px-8 py-4 rounded-xl border-2 border-[#7A1F5C]/30 hover:border-[#7A1F5C] hover:bg-[#7A1F5C]/5 text-[#7A1F5C] font-extrabold text-xs uppercase tracking-widest transition-all duration-300"
              >
                View Openings
              </Link>
            </div>
          </div>

        </div>

        {/* ── PART 2: THE RECRUITMENT MODELS (Continuous Smooth Scrolling Marquee) ── */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            WHAT WE DO FOR YOU
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Tailored <span className="text-[#7A1F5C]">Recruitment Models</span>
          </h2>
        </div>

      </div>

      {/* Infinite Horizontal Continuous Scrolling Marquee track */}
      <div className="relative w-full overflow-hidden py-16 mt-4">
        {/* Soft edge-blending gradients */}
        <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

        {/* Flex Marquee Track - Duplicated 8 cards (total 16) for seamless infinite looping scroll */}
        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer">
          
          {/* Track 1: First 8 Cards */}
          {ALL_EIGHT_MODELS.map((service, i) => {
            const { icon, desc, badge, bg, iconColor, shape } = getServiceDetail(service, i);
            const ModelIconComponent = (LucideIcons as any)[icon] || LucideIcons.CheckCircle2;

            return (
              <div key={`track1-${i}`} className="w-[320px] flex-shrink-0 px-2 h-full">
                <div
                  className="bg-white text-[#1A1A1A] border border-[#EFE7DD] rounded-[32px] p-8 pt-24 pb-10 text-center hover:shadow-[0_24px_56px_rgba(122,31,92,0.08)] hover:-translate-y-2 transition-all duration-500 relative flex flex-col justify-between min-h-[380px] h-full group"
                >
                  {/* Overlapping Organic Droplet Icon */}
                  <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-28 h-28 ${bg} ${shape} border-4 border-white shadow-lg transition-all duration-500 group-hover:scale-105 z-20 flex items-center justify-center`}>
                    <ModelIconComponent size={38} className={iconColor} />
                  </div>

                  {/* Card Step Number Badge */}
                  <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#FAF8F5] text-gray-400 flex items-center justify-center text-xs font-bold select-none group-hover:bg-[#7A1F5C]/10 group-hover:text-[#7A1F5C] transition-colors duration-300">
                    0{i + 1}
                  </div>

                  {/* Main Card Content */}
                  <div className="flex flex-col items-center flex-grow">
                    {/* Small category tag */}
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#7A1F5C] mb-4 bg-[#7A1F5C]/5 px-3.5 py-1.5 rounded-full select-none">
                      {badge}
                    </span>
                    
                    {/* Service Title */}
                    <h3 className="font-extrabold text-xl mb-3 text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors duration-300">
                      {service}
                    </h3>
                    
                    {/* Service Description */}
                    <p className="text-sm leading-relaxed text-gray-500">
                      {desc}
                    </p>
                  </div>

                  {/* Bottom decorative verification badge */}
                  <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-center gap-2.5 text-gray-400 group-hover:text-[#7A1F5C] transition-colors duration-300">
                    <LucideIcons.CheckCircle2 size={16} />
                    <span className="text-[10px] font-black uppercase tracking-wider select-none">Chalky Secured</span>
                  </div>

                </div>
              </div>
            );
          })}

          {/* Track 2: Identical Duplicated 8 Cards for Flawless Loop */}
          {ALL_EIGHT_MODELS.map((service, i) => {
            const { icon, desc, badge, bg, iconColor, shape } = getServiceDetail(service, i);
            const ModelIconComponent = (LucideIcons as any)[icon] || LucideIcons.CheckCircle2;

            return (
              <div key={`track2-${i}`} className="w-[320px] flex-shrink-0 px-2 h-full">
                <div
                  className="bg-white text-[#1A1A1A] border border-[#EFE7DD] rounded-[32px] p-8 pt-24 pb-10 text-center hover:shadow-[0_24px_56px_rgba(122,31,92,0.08)] hover:-translate-y-2 transition-all duration-500 relative flex flex-col justify-between min-h-[380px] h-full group"
                >
                  {/* Overlapping Organic Droplet Icon */}
                  <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-28 h-28 ${bg} ${shape} border-4 border-white shadow-lg transition-all duration-500 group-hover:scale-105 z-20 flex items-center justify-center`}>
                    <ModelIconComponent size={38} className={iconColor} />
                  </div>

                  {/* Card Step Number Badge */}
                  <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#FAF8F5] text-gray-400 flex items-center justify-center text-xs font-bold select-none group-hover:bg-[#7A1F5C]/10 group-hover:text-[#7A1F5C] transition-colors duration-300">
                    0{i + 1}
                  </div>

                  {/* Main Card Content */}
                  <div className="flex flex-col items-center flex-grow">
                    {/* Small category tag */}
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#7A1F5C] mb-4 bg-[#7A1F5C]/5 px-3.5 py-1.5 rounded-full select-none">
                      {badge}
                    </span>
                    
                    {/* Service Title */}
                    <h3 className="font-extrabold text-xl mb-3 text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors duration-300">
                      {service}
                    </h3>
                    
                    {/* Service Description */}
                    <p className="text-sm leading-relaxed text-gray-500">
                      {desc}
                    </p>
                  </div>

                  {/* Bottom decorative verification badge */}
                  <div className="mt-8 pt-4 border-t border-gray-50 flex items-center justify-center gap-2.5 text-gray-400 group-hover:text-[#7A1F5C] transition-colors duration-300">
                    <LucideIcons.CheckCircle2 size={16} />
                    <span className="text-[10px] font-black uppercase tracking-wider select-none">Chalky Secured</span>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}
