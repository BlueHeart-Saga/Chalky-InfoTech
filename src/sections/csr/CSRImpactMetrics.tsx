'use client';

import { motion } from 'framer-motion';
import { BarChart3, Recycle, Users2, HeartHandshake, Globe2, Sprout } from 'lucide-react';

const METRICS = [
  {
    icon: Recycle,
    category: 'Environment',
    accent: '#7A1F5C',
    items: [
      { label: 'Paperless Operations', value: '100%', progress: 100 },
      { label: 'Travel Footprint Reduction', value: '60%', progress: 60 },
      { label: 'Carbon Offset Coverage', value: '80%', progress: 80 },
      { label: 'Renewable Energy Use', value: '45%', progress: 45 },
    ],
  },
  {
    icon: Users2,
    category: 'Diversity & Inclusion',
    accent: '#C2185B',
    items: [
      { label: 'Women in Leadership Shortlists', value: '40%', progress: 40 },
      { label: 'Consultants DEI Trained', value: '100%', progress: 100 },
      { label: 'Diverse Hires (FY2024)', value: '62%', progress: 62 },
      { label: 'Under-represented Candidates', value: '35%', progress: 35 },
    ],
  },
  {
    icon: HeartHandshake,
    category: 'Community',
    accent: '#7A1F5C',
    items: [
      { label: 'Graduates Mentored (2024)', value: '52', progress: 85 },
      { label: 'Volunteer Days Taken', value: '96', progress: 70 },
      { label: 'Pro-bono Placements', value: '14', progress: 55 },
      { label: 'College Partnerships Active', value: '3', progress: 60 },
    ],
  },
  {
    icon: Globe2,
    category: 'Governance & Ethics',
    accent: '#C2185B',
    items: [
      { label: 'Compliant Engagements', value: '100%', progress: 100 },
      { label: 'Suppliers ESG Screened', value: '100%', progress: 100 },
      { label: 'Whistleblower Cases Resolved', value: '100%', progress: 100 },
      { label: 'Suppliers Paid ≤30 Days', value: '97%', progress: 97 },
    ],
  },
];

export default function CSRImpactMetrics() {
  return (
    <section id="metrics" className="py-24 bg-[#F5F0E8] relative overflow-hidden">
      {/* Orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C2185B]/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-5">
            <BarChart3 size={11} /> Impact at a Glance
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
            Measuring What <span className="text-[#7A1F5C]">Matters</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Transparency is core to our CSR ethos. These metrics reflect our real-world progress against each of our four impact areas as of FY2024.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {METRICS.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="bg-white rounded-3xl p-8 border border-[#EFE7DD] hover:border-[#7A1F5C]/20 hover:shadow-xl hover:shadow-[#7A1F5C]/8 transition-all duration-400"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${block.accent}15` }}
                >
                  <block.icon size={20} style={{ color: block.accent }} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-lg">{block.category}</h3>
              </div>

              {/* Progress bars */}
              <div className="space-y-6">
                {block.items.map((item, j) => (
                  <div key={j}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 font-medium">{item.label}</span>
                      <span
                        className="text-sm font-extrabold"
                        style={{ color: block.accent }}
                      >
                        {item.value}
                      </span>
                    </div>
                    <div className="h-2 bg-[#EFE7DD] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.08 + 0.3, duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${block.accent}, #C2185B)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-xs mt-10 font-medium"
        >
          All metrics reflect Chalky Infotech's internal reporting for FY2024. Updated annually. Full methodology available on request.
        </motion.p>
      </div>
    </section>
  );
}
