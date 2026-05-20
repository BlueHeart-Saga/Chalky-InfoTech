'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const METRICS = [
  { value: '100+', label: 'Global Clients', link: '/about' },
  { value: '8+', label: 'Primary Industries', link: '/industries' },
  { value: '500+', label: 'Specialists Placed', link: '/services' },
  { value: '4+ Yrs', label: 'Sector Excellence', link: '/about' },
  { value: '24/7', label: 'Global Coordination', link: '/contact' }
];

export default function IndustryMetrics() {
  return (
    <section className="py-16 bg-[#7A1F5C] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C2185B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 text-center">
          {METRICS.map((metric, i) => (
            <Link key={i} href={metric.link} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <h3 className="text-3xl lg:text-5xl font-extrabold text-white group-hover:scale-105 transition-transform duration-300">{metric.value}</h3>
                <p className="text-[10px] font-bold text-[#EFE7DD]/80 group-hover:text-white uppercase tracking-[0.2em] transition-colors duration-300">{metric.label}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
