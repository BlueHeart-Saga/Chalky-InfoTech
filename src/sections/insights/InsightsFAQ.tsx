'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

const INSIGHTS_FAQS: FAQ[] = [
  {
    q: "How often are Chalky Infotech's industry insights updated?",
    a: "Our recruitment consultants and market analysts publish new articles, thought leadership reviews, and specialized sector reports weekly. We monitor changing tech trends, compliance benchmarks, and talent pipelines in real-time."
  },
  {
    q: "Can I download your quarterly salary guides and market surveys?",
    a: "Yes! All our comprehensive reports, including the Global Tech Salary Guide and the AI Workforce report, are completely free to access. Simply register via our resource links or sign up for our newsletter to receive direct PDF download keys."
  },
  {
    q: "Are the authors of these articles real recruitment practitioners?",
    a: "Absolutely. Every piece of content is written or thoroughly vetted by our active sector leads, lead technical consultants, and executive recruiters. This ensures our insights reflect real-world market experiences rather than simple high-level theories."
  },
  {
    q: "How can I collaborate or submit a case study transformation?",
    a: "We welcome strategic partnership co-authoring! If you are a client partner and would like to share your scaling success or digital transformation journey with our 10,000+ enterprise readers, please get in touch with our editorial desk via the contact form."
  },
  {
    q: "Can I customize my newsletter subscription to get specific sector alerts only?",
    a: "Yes, you can. When subscribing to our monthly briefings, our newsletter preferences page allows you to select only the industries (e.g., AI & Data Science, Healthcare, Finance) that are directly relevant to your operations."
  }
];

export default function InsightsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative pt-24 pb-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-4">
            Insights & Research <span className="text-[#7A1F5C]">FAQs</span>
          </h2>
        </div>

        <div className="space-y-4">
          {INSIGHTS_FAQS.map((faq, i) => (
            <div 
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === i ? 'border-[#7A1F5C]/30 shadow-xl shadow-[#7A1F5C]/5' : 'border-[#EFE7DD] hover:border-[#7A1F5C]/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold transition-colors text-sm sm:text-base ${openIndex === i ? 'text-[#7A1F5C]' : 'text-[#1A1A1A]'}`}>
                  {faq.q}
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
                    <div className="px-6 pb-6 text-[#8A8A8A] text-sm leading-relaxed pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      {/* Wave Divider to White */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
