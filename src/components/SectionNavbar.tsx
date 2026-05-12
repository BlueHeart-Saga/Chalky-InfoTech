'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SectionNavbar({ sections }: { sections: { label: string, id: string }[] }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we passed the hero (approx 400px)
      setIsSticky(window.scrollY > 400);

      // Determine active section
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <AnimatePresence>
      {isSticky && (
        <motion.div
          initial={{ y: -100, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          exit={{ y: -100, opacity: 0, x: '-50%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-4 left-1/2 z-50 bg-white/95 backdrop-blur-xl shadow-xl shadow-[#7A1F5C]/10 border border-gray-200/60 rounded-full px-2 py-2 flex items-center gap-1 overflow-x-auto max-w-[90vw]"
        >
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => {
                const el = document.getElementById(sec.id);
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeSection === sec.id ? 'bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] text-white shadow-md' : 'text-[#8A8A8A] hover:text-[#1A1A1A] hover:bg-[#F5F0E8]'}`}
            >
              {sec.label}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
