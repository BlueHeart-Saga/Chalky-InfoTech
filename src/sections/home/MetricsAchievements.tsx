'use client';

import { motion } from 'framer-motion';
import CountUp from '@/components/CountUp';

const STATS = [
  { value: 98, suffix: "%", label: "Placement Success Rate" },
  { value: 250, suffix: "K+", label: "Vetted Candidates" },
  { value: 45, suffix: "+", label: "Global Locations" },
  { value: 18, suffix: " Days", label: "Average Time-to-Hire" }
];

export default function MetricsAchievements() {
  return (
    <section className="py-24 bg-[#7A1F5C] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-4xl md:text-6xl font-bold mb-4">
                <CountUp
                  to={stat.value}
                  duration={2}
                />
                {stat.suffix}
              </p>
              <div className="h-1 w-12 bg-[#D14D72] mx-auto mb-4" />
              <p className="text-white/70 font-bold uppercase tracking-widest text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Clouds Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[50px] sm:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,120 L1200,80 C1150,80 1150,40 1100,40 C1050,40 1050,60 1000,60 C950,60 950,20 900,20 C850,20 850,70 800,70 C750,70 750,30 700,30 C650,30 650,80 600,80 C550,80 550,40 500,40 C450,40 450,60 400,60 C350,60 350,20 300,20 C250,20 250,70 200,70 C150,70 150,30 100,30 C50,30 50,80 0,80 Z" fill="#f5f0e8"></path>
        </svg>
      </div>
    </section>
  );
}
