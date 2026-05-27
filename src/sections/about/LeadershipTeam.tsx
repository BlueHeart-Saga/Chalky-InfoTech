'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Globe, Briefcase } from 'lucide-react';

const leaders = [
  {
    name: 'Saravana Karthikeyan',
    role: 'CEO & Founder',
    experience: '20+ years in tech consulting',
    quote: 'Technology should empower, not complicate.',
    image: '/team/saravana-karthikeyan.png',
    accent: '#C2185B',
    social: { linkedin: '#', twitter: '#' },
    icon: Users,
  },
  {
    name: 'Manjula Bashkar',
    role: 'Cloud Security Specialist',
    experience: '10+ years in Digital Transformation & Cloud Security',
    quote: 'Innovation is solving today\'s problems with tomorrow\'s solutions.',
    image: '/team/manjula-bashkar.png',
    accent: '#C59B27',
    social: { linkedin: '#', twitter: '#' },
    icon: Globe,
  },
  {
    name: 'Himanshu Mudgal',
    role: 'DevOps Engineer',
    experience: '10+ years in DevOps Engineering',
    quote: 'Client success is our ultimate metric.',
    image: '/team/himanshu-mudgal.png',
    accent: '#7A1F5C',
    social: { linkedin: '#', twitter: '#' },
    icon: Briefcase,
  }
];

export default function LeadershipTeam() {
  return (
    <section className="relative pt-12 md:pt-16 pb-24 md:pb-32 bg-[#f5f0e8] overflow-hidden">
      <style>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Subtle background dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #7A1F5C 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      {/* Decorative sparkles */}
      <div className="absolute top-24 left-16 text-[#7A1F5C]/20 text-5xl pointer-events-none select-none">✦</div>
      <div className="absolute top-40 right-24 text-[#C2185B]/20 text-3xl pointer-events-none select-none">✦</div>
      <div className="absolute bottom-32 left-1/4 text-[#7A1F5C]/10 text-6xl pointer-events-none select-none">✦</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-6"
          >
            Our Leaders
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-6 leading-[1.1] tracking-tight"
          >
            Meet Our <br/>
            <span className="text-[#7A1F5C]">Leadership Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8A8A8A] text-lg leading-relaxed"
          >
            A dynamic network of experienced consultants and domain specialists dedicated to delivering high-quality, reliable solutions across Cloud, Recruitment, and Digital Services.
          </motion.p>
        </div>

        {/* Infographic Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-12 md:gap-16 items-stretch">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flip-card h-[450px] relative flex flex-col"
            >
              <div className="flip-card-inner flex-1">
                
                {/* ── FRONT SIDE ── */}
                <div className="flip-card-front p-4 flex flex-col">
                  {/* Left bracket */}
                  <div 
                    className="absolute top-0 bottom-0 left-0 w-12 border-[3px] border-r-0 rounded-l-[32px] pointer-events-none" 
                    style={{ borderColor: leader.accent }}
                  />
                  
                  {/* Right bracket */}
                  <div 
                    className="absolute top-0 bottom-0 right-0 w-12 border-[3px] border-l-0 rounded-r-[32px] pointer-events-none" 
                    style={{ borderColor: leader.accent }}
                  />

                  {/* Central Card with Image */}
                  <div className="relative bg-white rounded-[24px] overflow-hidden flex flex-col h-full z-10 m-2 border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                    {/* Leader Image */}
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-10" />

                    {/* Content overlaid on image */}
                    <div className="relative z-20 mt-auto p-6 flex flex-col items-center text-center">
                      
                      {/* Leader Badge */}
                      <span 
                        className="text-[10px] font-black uppercase tracking-widest mb-2 px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: leader.accent }}
                      >
                        LEADER 0{i + 1}
                      </span>

                      {/* Name */}
                      <h3 className="text-xl font-bold text-white mb-1">
                        {leader.name}
                      </h3>

                      {/* Role */}
                      <p className="text-xs font-semibold text-gray-300 mb-4 uppercase tracking-wider">
                        {leader.role}
                      </p>

                      {/* Info Hint */}
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <span>Hover to View Bio</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                        </svg>
                      </span>

                    </div>
                  </div>
                </div>

                {/* ── BACK SIDE ── */}
                <div className="flip-card-back p-4 flex flex-col">
                  {/* Left bracket */}
                  <div 
                    className="absolute top-0 bottom-0 left-0 w-12 border-[3px] border-r-0 rounded-l-[32px] pointer-events-none" 
                    style={{ borderColor: leader.accent }}
                  />
                  
                  {/* Right bracket */}
                  <div 
                    className="absolute top-0 bottom-0 right-0 w-12 border-[3px] border-l-0 rounded-r-[32px] pointer-events-none" 
                    style={{ borderColor: leader.accent }}
                  />

                  {/* Central White Card with Blurred Image BG */}
                  <div className="relative bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col h-full z-10 m-2 border border-gray-100 items-center text-center justify-between overflow-hidden">
                    
                    {/* Blurred Image Background */}
                    <img 
                      src={leader.image} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover filter blur-[20px] opacity-15 pointer-events-none scale-110"
                    />

                    {/* Back side details */}
                    <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
                      {/* Quote Icon */}
                      <span className="text-5xl font-serif leading-none mt-2" style={{ color: `${leader.accent}40` }}>“</span>
                      
                      {/* Quote */}
                      <p className="text-gray-700 text-sm leading-relaxed font-semibold italic px-2">
                        {leader.quote}
                      </p>
                      
                      <span className="text-5xl font-serif leading-none mb-2" style={{ color: `${leader.accent}40` }}>”</span>

                      {/* Stars rating */}
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, s) => (
                          <span key={s} className="text-amber-400 text-base leading-none">★</span>
                        ))}
                      </div>

                      {/* Experience */}
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">
                        {leader.experience}
                      </p>

                      {/* Connect Link Button */}
                      <Link 
                        href="/contact"
                        className="w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border-[2.5px] hover:shadow-md"
                        style={{
                          borderColor: leader.accent,
                          color: leader.accent,
                          background: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = leader.accent;
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = leader.accent;
                        }}
                      >
                        Connect with Me
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right connector arrow (pointing to the next card, hidden for the last card) */}
              {i < leaders.length - 1 && (
                <div className="hidden lg:flex absolute right-[-28px] top-1/2 -translate-y-1/2 z-20 items-center pointer-events-none">
                  <div style={{ width: '12px', height: '3px', backgroundColor: leader.accent }} />
                  <svg width="12" height="16" viewBox="0 0 12 16" fill={leader.accent}>
                    <path d="M0 0 L8 8 L0 16 Z" />
                  </svg>
                </div>
              )}

              {/* Down connector arrow for mobile layout (hidden for the last card) */}
              {i < leaders.length - 1 && (
                <div className="lg:hidden flex absolute bottom-[-28px] left-1/2 -translate-x-1/2 z-20 flex-col items-center pointer-events-none">
                  <div style={{ width: '3px', height: '12px', backgroundColor: leader.accent }} />
                  <svg width="16" height="12" viewBox="0 0 16 12" fill={leader.accent}>
                    <path d="M0 0 L8 8 L16 0 Z" />
                  </svg>
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0c0,0,166,120,443,57c277-63,339,26,513,26s244-83,244-83v120H0V0z" fill="#7A1F5C" />
        </svg>
      </div>
    </section>
  );
}
