'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const team = [
  {
    name: 'Saravana Karthikeyan',
    role: 'CEO & Founder',
    focus: 'Enterprise Strategy',
    quote: "Technology should empower, not complicate.",
    email: 'info@chalkyinfo.com',
    linkedin: '#',
    bg: 'bg-[#D1FFBD]',
    rotate: '-rotate-[2deg]',
  },
  {
    name: 'Manjula Bashkar',
    role: 'Manual Cloud Security Specialist',
    focus: 'Cloud Security & Testing',
    quote: "Innovation is solving today's problems with tomorrow's solutions.",
    email: 'info@chalkyinfo.com',
    linkedin: '#',
    bg: 'bg-[#FFC0CB]',
    rotate: 'rotate-[2deg]',
  },
  {
    name: 'Himanshu Mudgal',
    role: 'Head of Client Success',
    focus: 'DevOps & Client Success',
    quote: "Client success is our ultimate metric  every relationship we build is a long-term commitment.",
    email: 'info@chalkyinfo.com',
    linkedin: '#',
    bg: 'bg-white',
    rotate: '-rotate-[1deg]',
  },
];

export default function ContactTeam() {
  return (
    <section className="relative pt-12 md:pt-16 pb-32 bg-[#F5F0E8] overflow-hidden">

      {/* Subtle background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #7A1F5C 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative sparkles */}
      <div className="absolute top-24 left-16 text-[#7A1F5C]/20 text-5xl pointer-events-none select-none">✦</div>
      <div className="absolute top-40 right-24 text-[#C2185B]/20 text-3xl pointer-events-none select-none">✦</div>
      <div className="absolute bottom-40 left-1/4 text-[#7A1F5C]/10 text-6xl pointer-events-none select-none">✦</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6"
          >
            Key Contacts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6 leading-[1.1] tracking-tight"
          >
            Talk to the <br />
            <span className="text-[#7A1F5C]">Experts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8A8A] text-lg leading-relaxed"
          >
            Reach out directly to our leadership team for specialised inquiries, strategic partnerships, and talent solutions.
          </motion.p>
        </div>

        {/* Neubrutalist Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 items-stretch">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -5, x: -5, boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)' }}
              className={`
                ${member.bg} ${member.rotate}
                rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300 relative border-2 border-black
                flex flex-col h-full
              `}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-black text-xl leading-none">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-black text-base leading-relaxed mb-8 font-medium italic">
                &ldquo;{member.quote}&rdquo;
              </p>

              {/* Focus tag */}
              <div className="mb-6">
                <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1 rounded-full">
                  {member.focus}
                </span>
              </div>

              {/* Person Row */}
              <div className="mt-auto pt-6 border-t border-black/10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-black shadow-sm flex-shrink-0 bg-black text-white flex items-center justify-center font-bold text-lg tracking-wider">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-black text-lg truncate">{member.name}</p>
                  <p className="text-sm font-semibold text-black/60 truncate uppercase tracking-wider">{member.role}</p>
                </div>
              </div>

              {/* Email button */}
              <a
                href={`mailto:${member.email}`}
                className="mt-6 w-full py-4 rounded-2xl bg-black text-white text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2"
              >
                <Mail size={14} /> Email Me
              </a>

              {/* Sparkle decoration */}
              <div className="absolute -top-4 -right-4 text-black text-4xl animate-pulse">✦</div>
              <div className="absolute -bottom-2 -left-2 text-black/40 text-2xl">✦</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0c0,0,166,120,443,57c277-63,339,26,513,26s244-83,244-83v120H0V0z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
