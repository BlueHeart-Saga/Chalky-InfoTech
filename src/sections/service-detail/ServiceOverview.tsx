'use client';

import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap } from 'lucide-react';

interface Props {
  title: string;
  description: string;
}

export default function ServiceOverview({ title, description }: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">Service Overview</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-8 leading-tight">
              {title}
            </h2>
            <p className="text-[#8A8A8A] text-lg leading-relaxed border-l-4 border-[#7A1F5C] pl-8">
              {description}
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Technical Alignment', icon: Zap, desc: 'Ensuring deep skill matching.' },
              { title: 'Strategic Partnership', icon: Target, desc: 'Aligning with business goals.' },
              { title: 'Quality Assurance', icon: ShieldCheck, desc: 'Rigorous vetting protocols.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F5F0E8] rounded-3xl p-8 border border-[#EFE7DD] hover:shadow-xl hover:shadow-[#7A1F5C]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <item.icon size={22} className="text-[#7A1F5C]" />
                </div>
                <h4 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h4>
                <p className="text-xs text-[#8A8A8A]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

