'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

interface Props {
  serviceLabel: string;
  features: Feature[];
}

export default function WhyChooseService({ serviceLabel, features }: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">The Advantage</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Why Partner with Us for <span className="text-[#7A1F5C]">{serviceLabel}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => {
            const Icon = (LucideIcons as any)[feature.icon] || LucideIcons.CheckCircle;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 bg-[#F9F9F9] border border-[#EFE7DD] rounded-3xl p-10 hover:bg-white hover:shadow-2xl hover:shadow-[#7A1F5C]/10 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#7A1F5C] group-hover:text-white transition-all duration-500">
                  <Icon size={32} className="text-[#7A1F5C] group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-3 group-hover:text-[#7A1F5C] transition-colors">{feature.title}</h3>
                  <p className="text-[#8A8A8A] leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

