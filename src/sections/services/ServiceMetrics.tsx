'use client';

import { motion } from 'framer-motion';

const METRICS = [
  { value: '500+', label: 'Elite Professionals Placed' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '18 Days', label: 'Average Time-to-Hire' },
  { value: '3+', label: 'Global Industry Sectors' },
  { value: '24/7', label: 'Specialist Support' }
];

export default function ServiceMetrics() {
  return (
    <section className="py-16 bg-[#7A1F5C] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C2185B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-center">
          {METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <h3 className="text-3xl lg:text-5xl font-extrabold text-white">{metric.value}</h3>
              <p className="text-[10px] font-bold text-[#D14D72] uppercase tracking-[0.2em]">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
