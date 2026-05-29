'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import client1 from '@/assets/Services/Our-Sucess-Team/1.png';
import client2 from '@/assets/Services/Our-Sucess-Team/2.png';
import client3 from '@/assets/Services/Our-Sucess-Team/3.png';

const PROFILES = [
  {
    name: "Strategic Advisors",
    role: "Business Alignment",
    image: client1,
    bgColor: "bg-[#3F2B36]",
    textColor: "text-white",
    height: "h-[380px] md:h-[420px]"
  },
  {
    name: "Delivery Partners",
    role: "Talent Acquisition",
    image: client2,
    bgColor: "bg-[#E53888]",
    textColor: "text-white",
    height: "h-[420px] md:h-[480px]"
  },
  {
    name: "Success Managers",
    role: "Retention & Growth",
    image: client3,
    bgColor: "bg-[#F88DCD]",
    textColor: "text-white",
    height: "h-[380px] md:h-[420px]"
  }
];

export default function ClientSuccessApproach() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-white">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.5
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
              Our Success Team
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
              Meet our <span className="text-[#7A1F5C]">Success Partners</span>
            </h2>
            <p className="text-[#8A8A8A] max-w-2xl mx-auto text-lg">
              We believe in nurturing deep operational understanding and providing a space where <Link href="/about" className="text-[#7A1F5C] hover:underline font-semibold">strategic hiring thrives</Link>. Our dedicated success partners bring new perspectives, innovative talent strategies, and unstoppable energy to <Link href="/contact" className="text-[#7A1F5C] hover:underline font-semibold">your global team</Link>.
            </p>
          </motion.div>

          {/* Decorative Accents pointing to center */}
          <div className="hidden md:block absolute bottom-0 left-[15%] transform translate-y-12">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12">
              <path d="M10 0L30 40L0 25L10 0Z" fill="#3F2B36" />
              <path d="M30 40L40 10L20 30L30 40Z" fill="#E53888" />
            </svg>
          </div>
          <div className="hidden md:block absolute bottom-0 right-[15%] transform translate-y-12 scale-x-[-1]">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12">
              <path d="M10 0L30 40L0 25L10 0Z" fill="#3F2B36" />
              <path d="M30 40L40 10L20 30L30 40Z" fill="#E53888" />
            </svg>
          </div>
        </div>

        {/* Profiles Section */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-6 md:gap-8 max-w-5xl mx-auto mt-16 md:mt-24">
          {PROFILES.map((profile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`w-full md:w-1/3 ${profile.height} ${profile.bgColor} rounded-t-[100px] md:rounded-t-[160px] pt-8 md:pt-10 px-6 flex flex-col items-center text-center relative overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-500`}
            >
              <div className="z-10 relative">
                <h3 className={`text-xl md:text-2xl font-extrabold uppercase tracking-widest mb-1 ${profile.textColor}`}>{profile.name}</h3>
                <p className={`text-sm md:text-base font-medium opacity-90 ${profile.textColor}`}>{profile.role}</p>
              </div>

              {/* Image filling the bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[65%] sm:h-[70%]">
                <Image 
                  src={profile.image} 
                  alt={profile.name} 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
      {/* Wave Divider to Cream */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
