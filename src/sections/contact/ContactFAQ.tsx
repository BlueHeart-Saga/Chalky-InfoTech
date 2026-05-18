'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How can I contact Chalky Infotech for immediate recruitment support?',
    answer: 'You can reach our recruitment experts via our contact form, email at info@chalkyinfotech.com, or by calling our UK or India offices directly. We respond to all urgent staffing inquiries within 24 hours to ensure rapid requirement delivery.'
  },
  {
    question: 'What information should I provide when requesting a recruitment proposal?',
    answer: 'To provide a tailored proposal, we recommend sharing the job descriptions, expected volume of hires, required technical stack, and your preferred engagement model (permanent, contract, or RPO). The more detail you provide, the faster we can map our talent network.'
  },
  {
    question: 'How long does the typical tech hiring process take with your agency?',
    answer: 'Our streamlined tech hiring process typically takes 15-21 days from the initial requirement briefing to the final offer. For urgent contract roles, we can often present pre-vetted candidates within 48-72 hours.'
  },
  {
    question: 'Do you offer scalable recruitment partnership solutions for startups and enterprises?',
    answer: 'Yes, we provide scalable solutions designed to grow with your business. From seed-stage startups needing their first 10 engineers to global enterprises requiring 100+ specialists for digital transformation, our flexible models adapt to your needs.'
  },
  {
    question: 'What are your staffing agency fees for permanent and contract placements?',
    answer: 'Our fee structure is competitive and based on the industry standard for the specific engagement model (contingency or retained). We provide transparent pricing and volume-based discounts for long-term recruitment partnerships.'
  },
  {
    question: 'How does your global talent acquisition support work for remote hiring?',
    answer: 'We leverage our international hubs to source remote talent across multiple time zones. We assist with cultural alignment, technical vetting, and local compliance to ensure your remote workforce is both skilled and legally integrated.'
  },
  {
    question: 'Can I schedule a workforce consultancy session with your sector experts?',
    answer: 'Absolutely. We offer strategic workforce consultancy to help you plan your hiring roadmap, analyze market salary benchmarks, and optimize your employer branding to attract top-tier technology talent.'
  },
  {
    question: 'What geographic locations does Chalky Infotech support for on-site hiring?',
    answer: 'While we operate globally, we provide dedicated on-site recruitment support primarily in the UK and India. However, we can facilitate on-site partnerships in other regions depending on the scale and duration of the project.'
  },
  {
    question: 'How do you handle data privacy and security during the recruitment lifecycle?',
    answer: 'Security is paramount. We are fully GDPR compliant and utilize secure, encrypted platforms for candidate data management. We ensure that sensitive information is only shared with authorized stakeholders throughout the hiring lifecycle.'
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
