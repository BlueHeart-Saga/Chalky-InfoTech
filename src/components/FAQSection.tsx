'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import FAQSchema from './FAQSchema';

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  items: FAQ[];
  badge?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  bgWhite?: boolean;
}

export default function FAQSection({
  items,
  badge = 'Common Questions',
  title = 'Frequently Asked Questions',
  subtitle = 'Find quick answers to common queries about our processes and methodologies.',
  id,
  bgWhite = true
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  // Map to FAQSchema format
  const schemaItems = items.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  return (
    <section 
      id={id} 
      className={`relative pt-24 pb-32 overflow-hidden scroll-mt-24 ${
        bgWhite ? 'bg-white' : 'bg-[#F5F0E8]'
      }`}
    >
      {/* Automatic SEO Structured Schema Injection */}
      <FAQSchema items={schemaItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div 
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i 
                  ? 'bg-white border-[#7A1F5C]/30 shadow-xl shadow-[#7A1F5C]/5' 
                  : bgWhite 
                    ? 'bg-white border-[#EFE7DD] hover:border-[#7A1F5C]/20'
                    : 'bg-white/80 border-white/60 hover:border-[#7A1F5C]/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold transition-colors text-sm sm:text-base ${openIndex === i ? 'text-[#7A1F5C]' : 'text-[#1A1A1A]'}`}>
                  {item.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4 ${openIndex === i ? 'bg-[#7A1F5C] text-white rotate-180' : 'bg-[#F5F0E8] text-[#7A1F5C]'}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#8A8A8A] text-sm leading-relaxed pt-4 border-t border-[#7A1F5C]/5">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
