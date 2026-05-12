'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '@/constants';

const imageMap: Record<string, string> = {
  technology: '/industries/technology.png',
  finance: '/industries/finance.png',
  healthcare: '/industries/healthcare.png',
  education: '/industries/education.png',
  retail: '/industries/retail.png',
  media: '/industries/media.png',
  energy: '/industries/energy.png',
  manufacturing: '/industries/manufacturing.png',
};

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? INDUSTRIES.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === INDUSTRIES.length - 1 ? 0 : prev + 1));

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, [activeIndex]); // Re-bind when activeIndex changes to prevent double jumping if user clicks

  return (
    <section className="py-24 bg-white relative pb-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            <span className="text-[#7a1f5c]">Industry</span> <span className="text-[#1A1A1A]">Specialisations</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We recognize that each industry has its own nuances in terms of management style, hiring practices and compensation norms. To provide clients with specialized search solutions, Chalky Infotech has developed expertise in the following industries.
          </p>
        </div>

        <div className="relative h-[500px] flex items-center justify-center w-full">
          {/* Left Arrow */}
          <button onClick={handlePrev} className="absolute left-0 md:left-4 lg:left-10 z-30 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm focus:outline-none">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>

          {/* Right Arrow */}
          <button onClick={handleNext} className="absolute right-0 md:right-4 lg:right-10 z-30 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm focus:outline-none">
            <ArrowRight size={20} className="text-gray-600" />
          </button>

          {/* Carousel */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {INDUSTRIES.map((industry, index) => {
              let diff = index - activeIndex;
              // Handle wrap-around for endless loop feel
              if (diff > INDUSTRIES.length / 2) diff -= INDUSTRIES.length;
              if (diff < -INDUSTRIES.length / 2) diff += INDUSTRIES.length;

              const isCenter = diff === 0;
              const isVisible = Math.abs(diff) <= 2;

              if (!isVisible) return null;

              const xOffset = diff * 220; // Increased spacing for a cleaner look
              const scale = isCenter ? 1.4 : 1 - Math.abs(diff) * 0.15;
              const opacity = isCenter ? 1 : 1 - Math.abs(diff) * 0.4;
              const zIndex = 10 - Math.abs(diff);

              return (
                <motion.div
                  key={industry.slug}
                  animate={{ x: xOffset, scale, opacity, zIndex }}
                  transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  className="absolute flex flex-col items-center justify-center group"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`relative flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 shadow-sm overflow-hidden
                    ${isCenter ? 'w-32 h-32 bg-[#C2185B]/5' : 'w-24 h-24 bg-gray-100'}
                  `}>
                    <Image 
                      src={imageMap[industry.slug] || '/industries/technology.png'} 
                      alt={industry.label} 
                      fill 
                      className={`object-cover transition-all duration-500 ${isCenter ? 'opacity-100 scale-110' : 'opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-70'}`}
                      sizes="(max-width: 768px) 100vw, 150px"
                    />

                    {isCenter && (
                      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-10" viewBox="0 0 100 100">
                        {/* Background Track */}
                        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                        {/* Animated Progress Ring */}
                        <motion.circle 
                          cx="50" cy="50" r="48" 
                          fill="none" 
                          stroke="#C2185B"
                          strokeWidth="3" 
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 4, ease: "linear" }}
                          key={activeIndex} 
                        />
                      </svg>
                    )}
                  </div>
                  
                  {isCenter && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-[105%] mt-4 text-center w-[350px]"
                    >
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{industry.label}</h3>
                      
                      {/* Only show on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <p className="text-sm text-gray-500 mb-6 px-4 leading-relaxed line-clamp-2">
                          {`Delivering specialized technology and talent solutions specifically tailored for the ${industry.label} sector.`}
                        </p>
                        <Link href={`/industries/${industry.slug}`} className="inline-flex items-center gap-2 bg-[#7A1F5C] text-white px-8 py-3 rounded-full text-xs font-semibold hover:bg-[#C2185B] transition-all duration-300 shadow-md">
                          Learn More <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                  
                  {!isCenter && (
                    <div className="absolute top-[110%] mt-2 text-center w-32 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-xs font-semibold text-gray-500">{industry.label}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[30px] sm:h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z" fill="#F5F0E8"></path>
        </svg>
      </div>
    </section>
  );
}
