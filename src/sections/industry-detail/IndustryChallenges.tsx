'use client';

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface Props {
  challenges: string[];
}

export default function IndustryChallenges({ challenges }: Props) {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Navigating Complexity</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Sector <span className="text-[#7A1F5C]">Challenges</span> We Solve
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-[#EFE7DD] hover:bg-[#7A1F5C] group transition-all duration-500 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5F0E8] flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-500">
                <AlertCircle size={24} className="text-[#7A1F5C] group-hover:text-white transition-colors duration-500" />
              </div>
              <p className="text-[#1A1A1A] font-bold text-sm leading-tight group-hover:text-white transition-colors">{challenge}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

