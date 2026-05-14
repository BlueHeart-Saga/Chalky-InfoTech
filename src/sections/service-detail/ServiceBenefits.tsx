'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  benefits: string[];
}

export default function ServiceBenefits({ benefits }: Props) {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Core Advantages</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Why Choose Our <span className="text-[#7A1F5C]">Solutions</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-[#EFE7DD] flex items-center gap-5 hover:shadow-2xl hover:shadow-[#7A1F5C]/5 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5F0E8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A1F5C] group-hover:text-white transition-all duration-300">
                <CheckCircle2 size={24} className="text-[#7A1F5C] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-[#1A1A1A] font-bold text-sm leading-tight">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

