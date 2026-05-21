'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, Download, MessageSquare } from 'lucide-react';

const FAQS = [
  {
    q: 'Does Chalky Infotech publish a formal CSR report?',
    a: 'Yes. We publish an annual CSR & Sustainability Report covering our four impact pillars: Environment, Diversity & Inclusion, Community, and Governance. Contact us to request a copy.',
  },
  {
    q: 'How does Chalky Infotech measure its carbon footprint?',
    a: 'We conduct an annual Scope 1 & 2 emissions audit using a certified third-party provider, with the results informing our offset commitments and reduction roadmap toward Net Zero by 2030.',
  },
  {
    q: 'What diversity commitments apply to executive searches?',
    a: 'All leadership mandates are subject to our gender-balanced shortlisting policy, requiring at least 40% representation from underrepresented groups. Consultants are trained on structured, bias-mitigated interviewing.',
  },
  {
    q: 'Can our organisation partner with Chalky on community programmes?',
    a: 'Absolutely. We actively seek partnerships with further education colleges, NGOs, and social enterprises for mentorship, pro-bono placements, and digital skills programmes. Reach out via our contact page.',
  },
  {
    q: 'What ethical standards govern your use of AI in recruitment?',
    a: 'We operate a strict Ethical AI Use Policy governing all automated screening tools. No candidate is rejected solely by algorithm  human review is mandatory at every stage.',
  },
];

export default function CSRCTA() {
  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-5">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-5 leading-tight">
              CSR <span className="text-[#7A1F5C]">FAQs</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              Answers to the most common questions about our corporate social responsibility commitments.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-[#EFE7DD] bg-[#FAF8F5] p-6 hover:border-[#7A1F5C]/25 hover:shadow-lg hover:shadow-[#7A1F5C]/5 transition-all duration-300"
              >
                <h4 className="font-bold text-[#1A1A1A] text-base mb-3 group-hover:text-[#7A1F5C] transition-colors duration-300">
                  {faq.q}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] p-10 md:p-14 text-white shadow-2xl shadow-[#7A1F5C]/30"
        >
          {/* Dot shimmer */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
          />
          {/* Orb */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white/90 text-[10px] font-extrabold uppercase tracking-widest mb-5">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Partner With Us on Responsible Recruitment
              </h2>
              <p className="text-white/75 leading-relaxed text-base max-w-md">
                Whether you are a supplier seeking ESG collaboration, an NGO looking for pro-bono support, or a business aligning hiring with sustainability goals  we would love to connect.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#7A1F5C] px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#F5F0E8] transition-all duration-300 shadow-lg"
              >
                <MessageSquare size={16} />
                Talk to Our CSR Team
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300"
              >
                <Download size={16} />
                Request CSR Report PDF
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="mailto:csr@chalkyinfotech.co.uk"
                className="group inline-flex items-center justify-center gap-3 text-white/70 hover:text-white text-sm font-semibold transition-colors duration-300"
              >
                <Mail size={15} />
                csr@chalkyinfotech.co.uk
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
