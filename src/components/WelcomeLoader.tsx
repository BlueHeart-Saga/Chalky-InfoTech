'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WelcomeLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-[9999] bg-[#FAF8F5] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle Premium Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[600px] h-[600px] rounded-full bg-[#7A1F5C]/5 blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center max-w-5xl px-4 w-full">
        {/* Professional Logo */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Chalky InfoTech Logo"
            width={110}
            height={110}
            priority
            className="object-contain drop-shadow-sm"
          />
        </motion.div>

        {/* Emphasized Brand Name */}
        <div className="overflow-hidden flex flex-col items-center text-center w-full">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[90px] font-black text-[#7A1F5C] tracking-tight mb-6"
          >
            Chalky InfoTech
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1A1A1A]/70 max-w-3xl leading-relaxed"
          >
            The Recruitment Company Specialist for IT Staffing
          </motion.p>
        </div>

        {/* Minimalist Elegant Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 w-64 md:w-80 h-[2px] bg-[#7A1F5C]/10 rounded-full overflow-hidden relative"
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
