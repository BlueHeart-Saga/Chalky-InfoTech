'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const LOGOS = [
  '/clients/c1.png', '/clients/c2.png', '/clients/c3.png', '/clients/c4.png', '/clients/c5.png',
  '/clients/c6.jpg', '/clients/c7.png', '/clients/c8.png', '/clients/c9.png', '/clients/c10.png',
  '/clients/ct1.png', '/clients/ct2.png', '/clients/ct3.png'
];

export default function TrustedCompanies() {
  return (
    <section className="py-12 bg-white relative pb-16 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-[#8A8A8A] uppercase tracking-[0.2em]">Trusted by Industry Leaders</p>
      </div>
      
      <div className="flex relative overflow-hidden py-4">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center whitespace-nowrap min-w-full"
        >
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="relative w-40 h-20 hover:scale-110 transition-all duration-500 flex-shrink-0 cursor-pointer">
              <Image 
                src={logo} 
                alt="Trusted Client" 
                fill 
                className="object-contain"
                sizes="160px"
                priority={i < 10}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[30px] sm:h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z" fill="#FDFCF6"></path>
        </svg>
      </div>
    </section>
  );
}
