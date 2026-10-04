'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles } from 'lucide-react';

const leader = {
  name: 'Saravana Karthikeyan',
  role: 'CEO & Founder',
  experience: '20+ Years in Enterprise Tech Consulting',
  quote: 'Technology should empower, not complicate. We build teams and solutions that drive true enterprise value.',
  email: 'info@chalkyinfo.com',
  highlights: [
    '20+ Years Enterprise Experience',
    'Global Talent & Offshore Delivery',
    'Digital & Cloud Transformation'
  ]
};

/* 
Commented out per request:
const additionalLeaders = [
  {
    name: 'Manjula Bashkar',
    role: 'Cloud Security Specialist',
    experience: '10+ years in Digital Transformation & Cloud Security',
    quote: 'Innovation is solving today\'s problems with tomorrow\'s solutions.',
    accent: '#C59B27',
  },
  {
    name: 'Himanshu Mudgal',
    role: 'DevOps Engineer',
    experience: '10+ years in DevOps Engineering',
    quote: 'Client success is our ultimate metric.',
    accent: '#7A1F5C',
  }
];
*/

export default function LeadershipTeam() {
  return (
    <section className="relative py-10 md:py-14 bg-[#F5F0E8] overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #7A1F5C 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      {/* Ambient background light blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#7A1F5C]/10 via-[#C2185B]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Leadership Vision Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles size={13} className="text-[#7A1F5C]" />
            Leadership Vision
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-2 tracking-tight"
        >
          Executive <span className="text-[#7A1F5C]">Leadership</span>
        </motion.h2>

        {/* Founder Name & Title (Open Layout - No Card Box) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 mb-5"
        >
          {/* Premium Circular Initials Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#7A1F5C] to-[#5A1744] text-white flex items-center justify-center shadow-xl shadow-[#7A1F5C]/20 ring-4 ring-white mx-auto mb-3">
            <span className="text-xl sm:text-2xl font-extrabold tracking-wider select-none">
              SK
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-1">
            {leader.name}
          </h3>
          <p className="text-xs sm:text-sm font-extrabold text-[#7A1F5C] uppercase tracking-widest mb-0.5">
            {leader.role}
          </p>
          <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {leader.experience}
          </p>
        </motion.div>

        {/* Executive Quote (Inline Start & End Quotation Marks) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-3xl mx-auto my-4 text-center"
        >
          <blockquote className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold italic leading-relaxed px-2">
            <span className="text-2xl sm:text-3xl font-serif text-[#7A1F5C] mr-1 select-none font-normal">“</span>
            {leader.quote}
            <span className="text-2xl sm:text-3xl font-serif text-[#7A1F5C] ml-1 select-none font-normal">”</span>
          </blockquote>
        </motion.div>

        {/* Highlight Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-4"
        >
          {leader.highlights.map((item, idx) => (
            <span 
              key={idx}
              className="px-4 py-1.5 rounded-xl bg-white/80 border border-[#EFE7DD] text-gray-700 text-xs font-semibold flex items-center gap-2 shadow-sm"
            >
              <ShieldCheck size={14} className="text-[#7A1F5C]" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
