'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const REASONS = [
  { title: 'Multi-Industry Expertise', image: '/whychoose/models.png', desc: 'Deep domain knowledge across diverse global sectors.' },
  { title: 'Scalable Solutions', image: '/whychoose/scalable.png', desc: 'Flexible hiring models that grow with your business.' },
  { title: 'Global Support Hubs', image: '/whychoose/network.png', desc: 'International reach with local market intelligence.' },
  { title: 'Sector-Specific Hiring', image: '/whychoose/process.png', desc: 'Precision talent mapping for your unique industry needs.' },
  { title: 'Rapid Talent Delivery', image: '/whychoose/delivery.png', desc: 'Optimized pipelines ensuring high-speed placements.' },
  { title: 'Long-Term Partnerships', image: '/whychoose/support.png', desc: 'Committed to your organizational growth success.' }
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
            We combine high-tech recruitment tools with high-touch human expertise to deliver exceptional outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REASONS.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-[#EBEBEB] h-[320px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
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

              {/* Content Area - Bottom (default), Full height (hover) */}
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
          ))}
        </div>
      </div>
    </section>
  );
}

