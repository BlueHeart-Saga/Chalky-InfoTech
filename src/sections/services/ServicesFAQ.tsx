'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const FAQS = [
  {
    question: 'What core IT recruitment services does Chalky Infotech provide?',
    answer: 'Chalky Infotech offers a comprehensive suite of IT recruitment services, including permanent placement, contract staffing, and temporary workforce solutions. We specialize in sourcing top-tier talent for roles in software development, cloud computing, cybersecurity, and data science across global markets.',
    answerElement: <>Chalky Infotech offers a comprehensive suite of IT recruitment services, including <Link href="/services/permanent-hiring" className="text-[#7A1F5C] hover:underline font-semibold">permanent placement</Link>, <Link href="/services/temporary-recruitment" className="text-[#7A1F5C] hover:underline font-semibold">contract staffing</Link>, and temporary workforce solutions. We specialize in sourcing top-tier talent for roles in software development, cloud computing, cybersecurity, and data science across global markets.</>
  },
  {
    question: 'How does your contract staffing model support agile project delivery?',
    answer: 'Our contract staffing solutions are designed for agility, allowing organizations to scale their technical teams rapidly for short-term projects or specialized requirements. We maintain a pre-vetted database of IT contractors ready to integrate into your agile workflows immediately.',
    answerElement: <>Our contract staffing solutions are designed for agility, allowing organizations to scale their technical teams rapidly for short-term projects or specialized requirements. We maintain a pre-vetted database of IT contractors ready to integrate into your agile workflows immediately.</>
  },
  {
    question: 'Can you source specialized cloud and DevOps engineering talent globally?',
    answer: 'Yes, we have extensive experience in global talent acquisition for cloud infrastructure and DevOps roles. Whether you need AWS, Azure, or GCP experts, our recruiters utilize advanced mapping technologies to find niche specialists in the UK, India, and beyond.',
    answerElement: <>Yes, we have extensive experience in global talent acquisition for cloud infrastructure and DevOps roles. Whether you need AWS, Azure, or GCP experts, our recruiters utilize advanced mapping technologies to find niche specialists in the UK, India, and beyond.</>
  },
  {
    question: 'What is your process for executive search and leadership hiring in technology?',
    answer: 'Our executive search process is data-driven and highly confidential. We identify and engage high-impact technology leadersfrom CTOs to VPs of Engineeringwho possess both the technical depth and strategic vision to drive organizational growth.',
    answerElement: <>Our executive search process is data-driven and highly confidential. We identify and engage high-impact technology leadersfrom CTOs to VPs of Engineeringwho possess both the technical depth and strategic vision to drive organizational growth.</>
  },
  {
    question: 'How do you ensure candidate quality in high-volume temporary recruitment?',
    answer: 'For high-volume hiring, we implement a rigorous multi-stage screening process that includes technical assessments, cultural fit interviews, and thorough background verification. This ensures that even rapid temporary placements meet our high professional standards.',
    answerElement: <>For high-volume hiring, we implement a rigorous multi-stage screening process that includes technical assessments, cultural fit interviews, and thorough background verification. This ensures that even rapid temporary placements meet our high professional standards.</>
  },
  {
    question: 'What are the benefits of your On-Site recruitment partnership model?',
    answer: 'Our On-Site model provides dedicated recruitment experts who work within your organization. This partnership streamlines communication, deeply aligns hiring with your corporate culture, and significantly reduces overall time-to-hire and cost-per-hire.',
    answerElement: <>Our <Link href="/services/on-site-recruitment" className="text-[#7A1F5C] hover:underline font-semibold">On-Site recruitment partnership model</Link> provides dedicated recruitment experts who work within your organization. This partnership streamlines communication, deeply aligns hiring with your corporate culture, and significantly reduces overall time-to-hire and cost-per-hire.</>
  },
  {
    question: 'Do you support offshore and nearshore workforce development?',
    answer: 'Absolutely. We help organizations build scalable offshore delivery centers and nearshore teams. We handle the entire recruitment lifecycle, from sourcing and screening to onboarding support in cost-effective global talent hubs.',
    answerElement: <>Absolutely. We help organizations build scalable <Link href="/services/remote-hiring" className="text-[#7A1F5C] hover:underline font-semibold">offshore delivery centers</Link> and nearshore teams. We handle the entire recruitment lifecycle, from sourcing and screening to onboarding support in cost-effective global talent hubs.</>
  },
  {
    question: 'How does Chalky Infotech handle international payroll and compliance for remote workers?',
    answer: 'We provide comprehensive guidance and support for global workforce compliance, ensuring that all international hires meet local employment laws, tax requirements, and Right To Work regulations, regardless of where they are located.',
    answerElement: <>We provide comprehensive guidance and support for <Link href="/services/managed-services" className="text-[#7A1F5C] hover:underline font-semibold">global workforce compliance</Link>, ensuring that all international hires meet local employment laws, tax requirements, and Right To Work regulations, regardless of where they are located.</>
  },
  {
    question: 'What is the typical turnaround time for filling niche technical roles?',
    answer: 'While timelines vary by specialty, our average time-to-fill for niche technical roles is 15-21 days. This efficiency is powered by our proactive talent pipelining and deep expertise in specialized technology domains.',
    answerElement: <>While timelines vary by specialty, our average time-to-fill for niche technical roles is 15-21 days. This efficiency is powered by our proactive talent pipelining and deep expertise in specialized technology domains.</>
  }
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-[#ffffff]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
                      {faq.answerElement}
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

