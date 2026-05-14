'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'What industries does Chalky Infotech support?',
    answer: 'We provide specialized recruitment support across diverse global sectors including Technology (IT & Cloud), Healthcare & Life Sciences, Banking & Finance, Manufacturing (Industry 4.0), Retail & E-commerce, Education, Energy, and Media & Entertainment.'
  },
  {
    question: 'What recruitment models do you provide?',
    answer: 'We offer a versatile range of hiring frameworks including Permanent Recruitment, Contract Staffing, Temporary Recruitment, Executive Search, On-Site Recruitment Support, and specialized Project-Based Hiring cohorts.'
  },
  {
    question: 'Do you support remote workforce hiring?',
    answer: 'Yes, we specialize in building global borderless teams. We manage the entire remote talent acquisition lifecycle, ensuring cultural alignment and technical competency across international timezones.'
  },
  {
    question: 'How quickly can specialized positions be filled?',
    answer: 'Our average time-to-hire is 18 days. This is achieved through our extensive pre-vetted talent pool of 250,000+ professionals and our specialist mapping technologies.'
  },
  {
    question: 'Do you provide on-site recruitment solutions?',
    answer: 'Absolutely. Our On-Site Recruitment model provides you with dedicated recruiters who work as a seamless extension of your internal HR team, streamlining your entire talent acquisition process.'
  }
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Service <span className="text-[#7A1F5C]">FAQs</span>
          </h2>
          <p className="text-[#8A8A8A]">
            Everything you need to know about our recruitment ecosystem.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === i ? 'border-[#7A1F5C]/30 shadow-xl shadow-[#7A1F5C]/5' : 'border-[#EFE7DD] hover:border-[#7A1F5C]/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold transition-colors ${openIndex === i ? 'text-[#7A1F5C]' : 'text-[#1A1A1A]'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-[#7A1F5C] text-white rotate-180' : 'bg-[#F5F0E8] text-[#7A1F5C]'}`}>
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
                    <div className="px-6 pb-6 text-[#8A8A8A] text-sm leading-relaxed border-t border-[#EFE7DD]/50 pt-4">
                      {faq.answer}
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

