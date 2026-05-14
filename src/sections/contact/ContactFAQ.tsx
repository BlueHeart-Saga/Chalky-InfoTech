'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What industries do you specialize in?',
    answer: 'We specialize in providing top-tier talent for the Technology, Finance, Healthcare, Retail, and Manufacturing sectors, with a strong focus on Cloud, DevOps, AI, and Data Engineering roles.',
  },
  {
    question: 'How long does your typical recruitment process take?',
    answer: 'While timelines vary based on role complexity, our proprietary talent network allows us to present qualified candidates within 48 to 72 hours for most technical positions.',
  },
  {
    question: 'Do you operate internationally?',
    answer: 'Yes, Chalky Infotech operates globally with primary hubs in the UK and India. We help organizations build local teams and remote global workforces.',
  },
  {
    question: 'What is your fee structure?',
    answer: 'Our fee structure depends on the engagement model (contingency, retained search, or contract staffing). Please contact us directly for a tailored proposal based on your specific hiring needs.',
  },
  {
    question: 'How do you ensure candidate quality?',
    answer: 'We employ a rigorous multi-stage vetting process that includes technical assessments, cultural fit interviews, and thorough background checks to ensure we only present the top 5% of candidates.',
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[#1A1A1A]"
          >
            Frequently Asked <span className="text-[#7A1F5C]">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8A8A] text-lg"
          >
            Find quick answers to common questions about our services.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[#7A1F5C] shadow-md bg-white' : 'border-[#EFE7DD] bg-[#F9F6F0] hover:border-[#7A1F5C]/30'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-[#7A1F5C]' : 'text-[#1A1A1A]'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#7A1F5C]' : 'text-[#8A8A8A]'}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[#8A8A8A] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
