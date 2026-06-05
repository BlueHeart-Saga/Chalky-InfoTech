'use client';
import { motion } from 'framer-motion';
import { Mail, Star } from 'lucide-react';

const team = [
  {
    name: 'Saravana Karthikeyan',
    role: 'CEO & Founder',
    quote: "Technology should empower, not complicate.",
    email: 'info@chalkyinfo.com',
  },
  {
    name: 'Manjula Bashkar',
    role: 'Manual Cloud Security Specialist',
    quote: "Innovation is solving today's problems with tomorrow's solutions.",
    email: 'info@chalkyinfo.com',
  },
  {
    name: 'Himanshu Mudgal',
    role: 'Head of Client Success',
    quote: "Client success is our ultimate metric.",
    email: 'info@chalkyinfo.com',
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

        {/* Employee Spotlight Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10 items-stretch max-w-[1200px] mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col relative overflow-hidden group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Star className="text-gray-700" size={20} strokeWidth={2} />
                  <span className="font-semibold text-gray-900 text-[15px]">Leadership Spotlight</span>
                </div>
              </div>

              {/* Content: Name & Role */}
              <div className="text-center mb-8 relative z-10">
                <h3 className="text-xl font-medium text-gray-900 mb-1 tracking-tight">{member.name}</h3>
                <p className="text-gray-500 font-normal text-[14px]">{member.role}</p>
              </div>

              {/* Avatar Area - Premium Concentric-Ring Setup */}
              <div className="relative w-44 h-44 mx-auto mb-8 flex items-center justify-center">
                {/* Background Rotating Decorative Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#7A1F5C]/20 animate-[spin_40s_linear_infinite]" />
                
                {/* Glowing Aura */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#7A1F5C] to-[#C2185B] opacity-10 blur-xl group-hover:opacity-25 transition-opacity duration-500" />

                {/* Outer Glassmorphic Border */}
                <div className="absolute inset-1 rounded-full p-[3px] bg-gradient-to-tr from-[#7A1F5C]/20 via-[#C2185B]/40 to-[#7A1F5C]/20 group-hover:bg-gradient-to-tr group-hover:from-[#7A1F5C] group-hover:to-[#C2185B] transition-all duration-500 rounded-full">
                  <div className="w-full h-full bg-white rounded-full" />
                </div>

                {/* Main Avatar Circle */}
                <div className="relative z-10 w-[78%] h-[78%] rounded-full p-1 bg-white border border-[#EFE7DD] shadow-md flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-[#7A1F5C] to-[#4A1238] rounded-full overflow-hidden flex items-center justify-center shadow-inner relative group-hover:scale-[1.03] transition-transform duration-500">
                    {/* Subtle decorative highlight inside initials circle */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                    
                    {/* Profile Initials */}
                    <span className="text-4xl font-extrabold text-[#FAF8F5] tracking-tight">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer text */}
              <div className="text-center mt-auto pb-2 flex flex-col items-center">
                <p className="text-gray-600 font-medium text-[13px] mb-6 italic">"{member.quote}"</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 w-full bg-[#7A1F5C] text-white rounded-xl text-sm font-bold hover:bg-[#5a1543] transition-colors shadow-sm"
                >
                  <Mail size={16} /> Connect Me
                </a>
              </div>
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
