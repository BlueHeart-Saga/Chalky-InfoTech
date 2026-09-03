'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
  { src: '/clients/ct1.png', name: 'ct1' },
  { src: '/clients/ct2.png', name: 'ct2' },
  { src: '/clients/ct3.png', name: 'ct3' },
];

export default function TrustedCompanies() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Top Premium Curved Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-[1px]">
        <svg className="relative block w-full h-[40px] sm:h-[70px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 900,90 1200,0 L1200,0 L0,0 Z" fill="#F5F0E8"></path>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[11px] font-semibold uppercase tracking-widest mb-4">
            OUR TRUSTED PARTNERS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-[#666] max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-normal">
            We partner with ambitious companies across global technology, finance, healthcare, and engineering sectors to deliver high-impact workforce solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 pt-10 border-t border-[#F0F0F0]">
          {CLIENT_LOGOS.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 10) * 0.04 }}
              className="bg-white h-[90px] sm:h-[100px] flex items-center justify-center rounded-xl p-4 sm:p-5 border border-[#F0F0F0] hover:shadow-xl hover:shadow-[#7A1F5C]/5 hover:border-[#7A1F5C]/40 hover:-translate-y-1 transition-all duration-300 group"
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

      {/* Bottom Premium Curved Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[40px] sm:h-[70px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C300,30 900,30 1200,120 L1200,120 L0,120 Z" fill="#F5F0E8"></path>
        </svg>
      </div>
    </section>
  );
}
