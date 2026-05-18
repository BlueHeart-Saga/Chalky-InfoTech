'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SectionNavbar({ sections }: { sections: { label: string, id: string }[] }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsSticky(currentScrollY > 400);

      if (currentScrollY > lastScrollY && currentScrollY > 600) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

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
  }, [sections, lastScrollY]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [isSticky, sections]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isSticky && isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          exit={{ y: -100, opacity: 0, x: '-50%' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 left-1/2 z-50 bg-white/95 backdrop-blur-xl shadow-2xl shadow-[#7A1F5C]/15 border border-gray-200/50 rounded-full px-2 py-1.5 flex items-center max-w-[90vw] group ring-1 ring-black/[0.03]"
        >
          {canScrollLeft && (
            <button 
              onClick={() => scroll('left')}
              className="p-1.5 text-[#7A1F5C] hover:bg-[#F5F0E8] rounded-full transition-colors z-10 mr-1"
            >
              <ChevronLeft size={14} />
            </button>
          )}

          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex items-center gap-1 overflow-x-auto scroll-smooth no-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  const el = document.getElementById(sec.id);
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 120;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeSection === sec.id 
                  ? 'text-[#7A1F5C] bg-[#F5F0E8] shadow-sm' 
                  : 'text-[#1A1A1A] hover:bg-[#F5F0E8]'
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>

          {canScrollRight && (
            <button 
              onClick={() => scroll('right')}
              className="p-1.5 text-[#7A1F5C] hover:bg-[#F5F0E8] rounded-full transition-colors z-10 ml-1"
            >
              <ChevronRight size={14} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
