'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Mail } from 'lucide-react';

const team = [
  {
    name: 'Saravana Karthikeyan',
    role: 'CEO & Founder',
    experience: '20+ Years in Enterprise Tech Consulting',
    quote: 'Technology should empower, not complicate. We build teams and solutions that drive true enterprise value.',
    email: 'info@chalkyinfo.com',
    highlights: [
      'Enterprise Tech Strategy',
      'Global Talent & Offshore Delivery',
      'Digital & Cloud Transformation',
    ],
  },
  /* 
  {
    name: 'Manjula Bashkar',
    role: 'Cloud Security Specialist',
    experience: '10+ Years in Cloud Security & Testing',
    quote: 'Innovation is solving today\'s problems with tomorrow\'s solutions.',
    email: 'info@chalkyinfo.com',
    highlights: ['Cloud Security', 'AppSec Vetting', 'Quality Assurance'],
  },
  {
    name: 'Himanshu Mudgal',
    role: 'Head of Client Success',
    experience: '10+ Years in DevOps & Operations',
    quote: 'Client success is our ultimate metric.',
    email: 'info@chalkyinfo.com',
    highlights: ['Client Success', 'DevOps & SRE', 'Workforce Alignment'],
  },
  */
];

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

export default function ContactTeam() {
  return (
    <section className="relative py-16 md:py-24 bg-[#F5F0E8] overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #7A1F5C 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      {/* Ambient background light blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#7A1F5C]/10 via-[#C2185B]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles size={13} className="text-[#7A1F5C]" />
              Executive Desk
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-3 tracking-tight"
          >
            Talk to the <span className="text-[#7A1F5C]">Leadership Team</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#555555] text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
          >
            Reach out directly to our leadership team for specialised inquiries, strategic partnerships, and talent solutions.
          </motion.p>
        </div>

        {/* Open Executive Presentation (No Outer Box Wrap or Heavy Borders) */}
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center w-full"
            >
              {/* Premium Circular Initials Badge */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#7A1F5C] to-[#5A1744] text-white flex items-center justify-center shadow-xl shadow-[#7A1F5C]/20 ring-4 ring-white mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-wider select-none">
                  {getInitials(member.name)}
                </span>
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-1">
                {member.name}
              </h3>
              
              <p className="text-xs sm:text-sm font-extrabold text-[#7A1F5C] uppercase tracking-widest mb-0.5">
                {member.role}
              </p>

              {member.experience && (
                <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  {member.experience}
                </p>
              )}

              {/* Executive Quote */}
              {member.quote && (
                <blockquote className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold italic leading-relaxed my-3 max-w-2xl px-2">
                  <span className="text-2xl sm:text-3xl font-serif text-[#7A1F5C] mr-1 select-none font-normal">“</span>
                  {member.quote}
                  <span className="text-2xl sm:text-3xl font-serif text-[#7A1F5C] ml-1 select-none font-normal">”</span>
                </blockquote>
              )}

              {/* Highlights (Clean Soft Pills - No Box/Borders) */}
              {member.highlights && member.highlights.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-4 mb-8">
                  {member.highlights.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-1.5 rounded-full bg-white/70 text-gray-700 text-xs font-semibold flex items-center gap-2 shadow-xs"
                    >
                      <ShieldCheck size={14} className="text-[#7A1F5C]" />
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Button */}
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#7A1F5C] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#7A1F5C]/20 hover:bg-[#5E1847] hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Mail size={16} />
                Contact {member.name.split(' ')[0]} Directly
              </a>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
