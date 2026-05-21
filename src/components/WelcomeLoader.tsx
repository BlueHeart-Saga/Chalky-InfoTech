'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function WelcomeLoader() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if the user has visited before using localStorage
    const hasVisited = localStorage.getItem('chalky_welcomed_v1');
    if (!hasVisited) {
      setShouldRender(true);
      // Wait for loader to complete before hiding
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('chalky_welcomed_v1', 'true');
      }, 2800);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(false);
      setLoading(false);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-[9999] bg-[#FAF8F5] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Ambient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-[500px] h-[500px] rounded-full bg-[#7A1F5C]/8 blur-[130px] pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.1, 0.9, 1.1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute w-[300px] h-[300px] rounded-full bg-[#C2185B]/6 blur-[90px] pointer-events-none translate-x-[150px] -translate-y-[100px]"
          />

          {/* Loader Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-24 h-24 mb-6 flex items-center justify-center bg-white rounded-3xl border border-gray-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#7A1F5C]/5 to-[#C2185B]/5 blur-sm pointer-events-none" />
              <Image
                src="/logo.png"
                alt="Chalky InfoTech Logo"
                width={64}
                height={64}
                priority
                className="object-contain drop-shadow-[0_4px_8px_rgba(122,31,92,0.15)]"
              />
            </motion.div>

            {/* Brand Name */}
            <div className="overflow-hidden flex flex-col items-center mb-6">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-3xl md:text-4xl font-extrabold text-[#7A1F5C] tracking-tight text-center"
              >
                Chalky <span className="text-[#1A1A1A] font-medium">InfoTech</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#666]/70 mt-2 text-center"
              >
                Global IT Staffing &amp; Consulting
              </motion.p>
            </div>

            {/* Luxury Minimalist Progress Bar */}
            <div className="w-48 h-[2px] bg-[#7A1F5C]/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 2.2,
                  ease: 'easeInOut',
                }}
                className="h-full bg-gradient-to-r from-[#7A1F5C] via-[#C2185B] to-[#7A1F5C] rounded-full"
              />
            </div>

            {/* Micro Tagline */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-[9px] font-bold tracking-widest text-[#7A1F5C]/60 mt-3 uppercase"
            >
              Securing Sector Intelligence
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
