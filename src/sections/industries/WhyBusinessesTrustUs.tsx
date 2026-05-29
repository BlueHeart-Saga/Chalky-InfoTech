'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import adv1 from '@/assets/Industries/Advantage/1.png';
import adv2 from '@/assets/Industries/Advantage/2.png';
import adv3 from '@/assets/Industries/Advantage/3.png';
import adv4 from '@/assets/Industries/Advantage/4.png';
import adv5 from '@/assets/Industries/Advantage/5.png';
import adv6 from '@/assets/Industries/Advantage/6.png';

const REASONS = [
  { 
    title: 'Multi-Industry Expertise', 
    image: adv1, 
    desc: 'Access specialized vertical-market domain experts engineered to navigate distinct industry regulations, operational frameworks, and corporate methodologies.', 
    link: '/industries' 
  },
  { 
    title: 'Scalable Solutions', 
    image: adv2, 
    desc: 'Deploy highly agile workforce frameworks, custom contract arrangements, and end-to-end recruitment capabilities designed to match your corporate scaling requirements.', 
    link: '/services' 
  },
  { 
    title: 'Global Support Hubs', 
    image: adv3, 
    desc: 'Leverage state-of-the-art global search capabilities, borderless offshore structures, and compliance frameworks to locate top-tier international specialists.', 
    link: '/about' 
  },
  { 
    title: 'Sector-Specific Hiring', 
    image: adv4, 
    desc: 'Utilize data-driven recruitment metrics, precise technical mapping, and rigorous qualification methodologies to source domain-specific resources and specialists.', 
    link: '/services/permanent-hiring' 
  },
  { 
    title: 'Rapid Talent Delivery', 
    image: adv5, 
    desc: 'Accelerate your average time-to-hire using optimized global talent pipelines, digital transformation matching platforms, and rapid response staffing protocols.', 
    link: '/services/temporary-recruitment' 
  },
  { 
    title: 'Long-Term Partnerships', 
    image: adv6, 
    desc: 'Establish reliable partnerships committed to organizational growth, talent retention optimization, and building sustainable C-suite & technical teams.', 
    link: '/contact' 
  }
];

const colors = [
  { bg: '#D29ECD', label: 'EXPERTISE' },      // Lime Green
  { bg: '#986b99ff', label: 'SCALABILITY' },    // Peach Orange
  { bg: '#8f458eff', label: 'GLOBAL' },         // Pastel Blue
  { bg: '#F986CD', label: 'SECTOR-SPECIFIC' },// Soft Lavender
  { bg: '#C955A2', label: 'SPEED' },          // Warm Sand/Gold
  { bg: '#EF74A3', label: 'PARTNERSHIP' }     // Soft Mint Green
];

export default function WhyBusinessesTrustUs() {
  return (
    <section className="relative pt-24 pb-32 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            The Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            Why Businesses <span className="text-[#7A1F5C]">Trust Our Team</span>
          </h2>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg leading-relaxed">
            We combine high-tech <Link href="/services" className="text-[#7A1F5C] hover:underline font-semibold">recruitment capabilities</Link> with high-touch human expertise to deliver <Link href="/contact" className="text-[#7A1F5C] hover:underline font-semibold">exceptional talent matches</Link> across global industry hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REASONS.map((reason, i) => {
            const theme = colors[i % colors.length];
            const isEven = i % 2 === 0;
            return (
              <Link key={i} href={reason.link} className="block h-[290px]">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-[32px] h-full cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                  style={{ backgroundColor: theme.bg }}
                >
                  {isEven ? (
                    <>
                      {/* Top-left arrow */}
                      <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 z-20">
                        <ArrowRight className="w-4 h-4 -rotate-45 text-[#1A1A1A]" />
                      </div>

                      {/* Top-right image frame with bottom-left curve */}
                      <div className="absolute top-6 right-6 bottom-6 w-[45%] rounded-[28px] rounded-bl-[90px] overflow-hidden bg-white/20 border border-[#1A1A1A]/10 shadow-sm z-10">
                        <Image 
                          src={reason.image} 
                          alt={reason.title} 
                          fill 
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 30vw"
                        />
                      </div>

                      {/* Bottom-left content */}
                      <div className="absolute bottom-6 left-6 right-[52%] z-20">
                        <span className="inline-block px-3 py-1 rounded-full border border-[#1A1A1A]/15 text-[9px] font-extrabold uppercase tracking-widest mb-3 text-[#1A1A1A]/75">
                          {theme.label}
                        </span>
                        <h3 className="text-lg font-bold text-[#1A1A1A] leading-tight mb-1.5">
                          {reason.title}
                        </h3>
                        <p className="text-[11px] text-[#1A1A1A]/70 font-semibold line-clamp-3 leading-relaxed">
                          {reason.desc}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Top-left content */}
                      <div className="absolute top-6 left-6 right-[52%] z-20">
                        <span className="inline-block px-3 py-1 rounded-full border border-[#1A1A1A]/15 text-[9px] font-extrabold uppercase tracking-widest mb-3 text-[#1A1A1A]/75">
                          {theme.label}
                        </span>
                        <h3 className="text-lg font-bold text-[#1A1A1A] leading-tight mb-1.5">
                          {reason.title}
                        </h3>
                        <p className="text-[11px] text-[#1A1A1A]/70 font-semibold line-clamp-3 leading-relaxed">
                          {reason.desc}
                        </p>
                      </div>

                      {/* Bottom-left arrow */}
                      <div className="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 z-20">
                        <ArrowRight className="w-4 h-4 -rotate-45 text-[#1A1A1A]" />
                      </div>

                      {/* Bottom-right image frame with top-left curve */}
                      <div className="absolute top-6 right-6 bottom-6 w-[45%] rounded-[28px] rounded-tl-[90px] overflow-hidden bg-white/20 border border-[#1A1A1A]/10 shadow-sm z-10">
                        <Image 
                          src={reason.image} 
                          alt={reason.title} 
                          fill 
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 30vw"
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Wave Divider to White */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}

