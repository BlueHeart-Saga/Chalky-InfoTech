'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          onClick={scrollToTop}
          className="fixed bottom-0 right-8 z-[9999] flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-t-xl shadow-2xl border-x border-t border-white/20 hover:bg-white/20 transition-all duration-300 group"
        >
          {/* <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Go to Top</span> */}
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
            <ArrowUp size={12} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
