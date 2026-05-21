'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'What industry-specific recruitment solutions does Chalky Infotech offer?',
    answer: 'Chalky Infotech provides specialized recruitment solutions across high-growth sectors including IT, Fintech, Healthcare, Manufacturing, and Retail. Each industry vertical is managed by consultants with deep domain expertise to ensure precise candidate-role alignment.'
  },
  {
    question: 'How do you support the unique hiring needs of the Fintech and Banking sector?',
    answer: 'Our Fintech recruitment team understands the intersection of finance and technology. We source specialists in blockchain, quantitative analysis, cybersecurity, and regulatory compliance to support modern digital banking ecosystems.'
  },
  {
    question: 'What is your expertise in Healthcare and Life Sciences recruitment?',
    answer: 'We help healthcare organizations hire skilled professionals in medical technology, clinical research, and specialized nursing. Our processes focus on high-quality care and adherence to strict healthcare regulatory standards.'
  },
  {
    question: 'How does Chalky Infotech support digital transformation in the Retail and E-commerce industry?',
    answer: 'We source the talent behind digital commercefrom e-commerce platform developers and supply chain logistics experts to digital marketing specialistsensuring your retail business stays competitive in an online-first market.'
  },
  {
    question: 'Can you provide specialized workforce solutions for the Manufacturing and Industry 4.0 sectors?',
    answer: 'Yes, we source engineering and operational talent for the modern manufacturing era, including specialists in automation, IoT integration, robotics, and lean manufacturing processes.'
  },
  {
    question: 'What role does your agency play in sourcing talent for the Energy and Power industries?',
    answer: 'We support the global energy transition by recruiting technical experts in renewable energy, power engineering, and smart grid technology, helping organizations build sustainable future-ready teams.'
  },
  {
    question: 'How do you handle recruitment for the Media, Entertainment, and Creative sectors?',
    answer: 'Our creative recruitment specialists focus on the unique needs of the media industry, sourcing talent for content production, digital broadcasting, and interactive media technology.'
  },
  {
    question: 'Do you offer specialized staffing for the Education and EdTech sectors?',
    answer: 'We support educational institutions and EdTech startups by recruiting both academic professionals and the developers behind modern digital learning platforms and educational software.'
  },
  {
    question: 'How does your global network benefit companies in niche industry verticals?',
    answer: 'Our international reach allows us to find rare, highly-specialized talent that may not be available locally. We bridge the talent gap in niche industries by connecting global expertise with local business needs.'
  }
];

export default function IndustriesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Industry <span className="text-[#7A1F5C]">FAQs</span>
          </h2>
          <p className="text-[#8A8A8A]">
            Everything you need to know about our sector specialization.
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

