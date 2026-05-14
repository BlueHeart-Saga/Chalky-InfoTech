'use client';

import { motion } from 'framer-motion';

interface Step {
  title: string;
  desc: string;
}

interface Props {
  steps: Step[];
}

export default function ServiceProcess({ steps }: Props) {
  return (
    <section className="py-24 bg-[#F5F0E8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Our Workflow</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6">
            A Seamless <span className="text-[#7A1F5C]">Delivery Process</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-[45px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#7A1F5C]/0 via-[#7A1F5C]/20 to-[#7A1F5C]/0 hidden lg:block" />

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${steps.length} gap-10`}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white border border-[#EFE7DD] flex items-center justify-center mb-8 relative z-10 shadow-sm group-hover:shadow-xl group-hover:shadow-[#7A1F5C]/10 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-lg bg-[#7A1F5C] flex items-center justify-center text-white text-[10px] font-extrabold">
                    0{i + 1}
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7A1F5C]" />
                </div>
                <h3 className="text-sm font-bold text-[#1A1A1A] mb-3 uppercase tracking-wider">{step.title}</h3>
                <p className="text-[#8A8A8A] text-[11px] leading-relaxed max-w-[160px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

