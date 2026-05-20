'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import adv1 from '@/assets/Industries/The Advantage/815a3a38-d66a-41d4-b8b1-c54146717993 1.png';
import adv2 from '@/assets/Industries/The Advantage/8edcb80a-f697-4d37-b5c7-d05827ed67be 1.png';
import adv3 from '@/assets/Industries/The Advantage/8fa7790a-ae9c-4bfa-8dd6-7b2e641d341d 1.png';
import adv4 from '@/assets/Industries/The Advantage/a49f354a-c505-419b-9f83-cbe98cb75354 1.png';
import adv5 from '@/assets/Industries/The Advantage/cd7ffe70-633a-431a-bde3-5b6af8499611 1.png';
import adv6 from '@/assets/Industries/The Advantage/e298c14c-3c28-4c18-98b4-e25b61f2df03 1.png';

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

export default function WhyBusinessesTrustUs() {
  return (
    <section className="py-24 bg-[#F5F0E8]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {REASONS.map((reason, i) => (
            <Link key={i} href={reason.link} className="block h-[320px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-[#EBEBEB] h-full cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Area - Top */}
                <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
                  <Image 
                    src={reason.image} 
                    alt={reason.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                {/* Content Area - Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#EBEBEB] group-hover:bg-white p-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10">
                  <h4 className="text-base font-semibold text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#7A1F5C] transition-colors">{reason.title}</h4>
                  
                  {/* Hidden content that fades in on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow pt-2 flex flex-col">
                     <p className="text-[#4A4A4A] text-xs leading-relaxed mb-4">{reason.desc}</p>
                     <span className="inline-flex items-center gap-2 text-[#7A1F5C] font-semibold text-xs mt-auto">
                        Explore Advantage <ArrowRight size={14} />
                     </span>
                  </div>

                  {/* Bottom label that fades out on hover */}
                  <span className="absolute bottom-6 left-6 text-[#8A8A8A] text-[10px] uppercase tracking-wider group-hover:opacity-0 transition-opacity duration-300 font-bold">Chalky InfoTech</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

