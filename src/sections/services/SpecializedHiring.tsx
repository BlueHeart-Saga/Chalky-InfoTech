'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Layers, Globe, BarChart, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

import comp1 from '@/assets/Services/Complex Requirements/15be4082-486b-4ac1-b897-f78e9585c2cb 1.png';
import comp2 from '@/assets/Services/Complex Requirements/3620a767-5ec1-435f-8eb5-5c2d8e591d5c 1.png';
import comp3 from '@/assets/Services/Complex Requirements/8227ae94-d6d2-483f-b18e-9b683f8690a4 1.png';
import comp4 from '@/assets/Services/Complex Requirements/b4eadcdd-3f13-4420-a869-6f84d43c7ad2 1.png';

const CAPABILITIES = [
  { title: 'High-Volume Recruitment', desc: 'Rapid cohort hiring for large-scale operations.', icon: Layers, image: comp1, link: '/services/temporary-recruitment' },
  { title: 'Specialized Skill Hiring', desc: 'Sourcing rare and niche technical expertise.', icon: Rocket, image: comp2, link: '/services/permanent-hiring' },
  { title: 'Cross-Industry Support', desc: 'Versatile staffing across diverse global sectors.', icon: BarChart, image: comp3, link: '/industries' },
  { title: 'Remote Talent Acquisition', desc: 'Building seamless global borderless teams.', icon: Globe, image: comp4, link: '/services/remote-hiring' }
];

const BULLETS = [
  { text: 'Discreet C-suite & executive searches', link: '/about' },
  { text: 'Digital transformation team pivots', link: '/services' },
  { text: 'Robust high-volume scaling models', link: '/services/temporary-recruitment' },
  { text: 'Sourcing niche technical skillsets', link: '/services/permanent-hiring' },
  { text: 'Cross-industry workforce integration', link: '/industries' },
  { text: 'Compliant borderless remote operations', link: '/services/remote-hiring' },
  { text: 'High-retention permanent placements', link: '/services/permanent-hiring' },
  { text: 'Seamless on-site HR partnerships', link: '/services/on-site-recruitment' }
];

export default function SpecializedHiring() {
  return (
    <section className="py-24 bg-[#F5F0E8]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">
              Advanced Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
              Specialized Talent Acquisition for <span className="text-[#7A1F5C]">Enterprise Scaling</span>
            </h2>
            <p className="text-[#8A8A8A] text-base md:text-lg leading-relaxed mb-8">
              Beyond traditional staffing, we provide institutional maturity, state-of-the-art methodology, and compliant cross-border solutions for high-stakes <Link href="/about" className="text-[#7A1F5C] hover:underline font-semibold">leadership searches</Link> and global <Link href="/contact" className="text-[#7A1F5C] hover:underline font-semibold">engineering scaling</Link>.
            </p>
            
            {/* 8 Bullet points using CheckCircle2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8">
              {BULLETS.map((bullet, i) => (
                <Link key={i} href={bullet.link} className="flex items-center gap-3 group">
                  <CheckCircle2 size={18} className="text-[#7A1F5C] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors duration-300 leading-tight">
                    {bullet.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {CAPABILITIES.map((item, i) => (
              <Link key={i} href={item.link!} className="block h-[320px]">
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
                      src={item.image!} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>

                  {/* Content Area - Bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#EBEBEB] group-hover:bg-white p-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10">
                    <h4 className="text-base font-semibold text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#7A1F5C] transition-colors">{item.title}</h4>
                    
                    {/* Hidden content that fades in on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow pt-2 flex flex-col">
                       <p className="text-[#4A4A4A] text-xs leading-relaxed mb-4">{item.desc}</p>
                       <span className="inline-flex items-center gap-2 text-[#7A1F5C] font-semibold text-xs mt-auto">
                          Learn More <ArrowRight size={14} />
                       </span>
                    </div>

                    {/* Bottom label that fades out on hover */}
                    <span className="absolute bottom-6 left-6 text-[#8A8A8A] text-[10px] uppercase tracking-wider group-hover:opacity-0 transition-opacity duration-300 font-bold">Capability</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

