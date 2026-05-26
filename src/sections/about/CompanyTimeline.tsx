'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import team1 from '@/assets/About Us/People behind/1.png';
import team2 from '@/assets/About Us/People behind/6.png';
import team3 from '@/assets/About Us/People behind/3.png';
import team4 from '@/assets/About Us/People behind/7.png';
import team5 from '@/assets/About Us/People behind/4.png';
import team6 from '@/assets/About Us/People behind/2.png';
import team7 from '@/assets/About Us/People behind/5.png';
import team8 from '@/assets/About Us/People behind/8.png';

const milestones = [
  {
    year: '2023',
    title: 'Company Founded',
    desc: 'Chalky Infotech was established by a dynamic and passionate founding team to address evolving technology hiring needs with agility and precision. Built as a modern recruitment startup, we combine industry insight with a hands-on approach to support fast-growing organisations.',
  },
  {
    year: '2024',
    title: 'Global Expansion',
    desc: 'As part of our growth journey, we expanded our presence across key European and Asian markets. This strategic move reflects our commitment to supporting clients and talent across high-growth regions.',
  },
  {
    year: '2025',
    title: 'Employee Satisfaction & Culture',
    desc: 'We strengthened employee satisfaction by fostering a positive workplace culture, collaborative teams, and clear growth opportunities. This focus on engagement has contributed to higher retention and improved overall performance.',
  },
  {
    year: '2026',
    title: '100+ Clients Milestone',
    desc: 'We achieved a significant milestone by partnering with over 100 clients across multiple regions. This growth reflects strong market trust and our consistent delivery of high-quality recruitment solutions.',
  },
];

export default function CompanyTimeline() {
  const [active, setActive] = useState(0);

  // Auto-rotation logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % milestones.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(timer);
  }, [active]); // Reset timer when active changes (manual or auto)

  const current = milestones[active];

  return (
    <section className="relative pt-20 pb-24 bg-[#7A1F5C] text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-[#F5F0E8]">Our</span>{' '}
            <span className="text-white">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-6 py-2 rounded-full bg-white/10 border border-white/20 text-[#F5F0E8] text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-8"
          >
            Milestones & Achievements
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#F5F0E8]/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            A timeline of our commitment to excellence, innovation, and building the future of technology recruitment.
          </motion.p>
        </div>

        {/* TOP: Horizontal Year List */}
        <div className="flex justify-center gap-8 md:gap-12 mb-16 md:mb-24">
          {milestones.map((m, i) => (
            <button
              key={m.year}
              onClick={() => setActive(i)}
              className="group flex flex-col items-center gap-3 transition-all duration-300"
            >
              <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${i === active ? 'text-white' : 'text-white/30 group-hover:text-white/60'
                }`}>
                {m.year}
              </span>
              <div className="relative w-2 h-2">
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${i === active ? 'bg-white scale-125 shadow-[0_0_10px_white]' : 'bg-white/20 group-hover:bg-white/40'
                  }`} />
              </div>
            </button>
          ))}
        </div>

        {/* CENTER: High-Impact Content */}
        <div className="relative min-h-[350px] md:min-h-[450px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full"
            >
              {/* Massive Year Background (Centered) */}
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -top-12 md:-top-20">
                <span className="text-[10rem] md:text-[18rem] lg:text-[24rem] font-black leading-none tracking-tighter text-[#F5F0E8] opacity-10">
                  {current.year}
                </span>
              </div>

              {/* Content Overlay (Centered) */}
              <div className="relative z-10 max-w-4xl mx-auto">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight"
                >
                  {current.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="text-base md:text-xl lg:text-2xl text-[#F5F0E8]/80 leading-relaxed font-light mb-12"
                >
                  {current.desc}
                </motion.p>

                {/* Progress Bar Container */}
                <div className="w-24 h-1 bg-white/10 mx-auto rounded-full overflow-hidden">
                  <motion.div
                    key={`bar-${active}`}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-white/60"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── TEAM SECTION: The People Behind Our Success ── */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-3 text-white"
            >
              The People Behind Our Success
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#F5F0E8]/60 text-base"
            >
              200+ passionate professionals dedicated to your success
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { id: 1, line1: 'SARAVANA KARTHIKEYAN', line2: 'CEO & FOUNDER', img: team1 },
              { id: 2, line1: 'MANJULA BASHKAR', line2: 'SECURITY SPECIALIST', img: team2 },
              { id: 3, line1: 'HIMANSHU MUDGAL', line2: 'HEAD OF CLIENT SUCCESS', img: team3 },
              { id: 4, line1: 'PRIYA NAIR', line2: 'HEAD OF TALENT ACQUISITION', img: team4 },
              { id: 5, line1: 'ANJALI SHAH', line2: 'AI RECRUITMENT LEAD', img: team5 },
              { id: 6, line1: 'JAMES WILSON', line2: 'DIRECTOR OF STRATEGY', img: team6 },
              { id: 7, line1: 'RAKESH SHARMA', line2: 'TECHNICAL CONSULTANT', img: team7 },
              { id: 8, line1: 'NEHA GUPTA', line2: 'SENIOR TALENT PARTNER', img: team8 },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center group"
              >
                <div className="relative w-full max-w-[180px] aspect-[4/5] mb-6">
                  {/* Blob Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F06292] to-[#FF8A65] opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                    style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }}
                  />

                  {/* Portrait */}
                  <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }}>
                    <Image
                      src={member.img}
                      alt={member.line1}
                      fill
                      unoptimized
                      className="object-cover filter grayscale brightness-110 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-center text-white/90 leading-tight uppercase flex flex-col items-center">
                  <span>{member.line1}</span>
                  <span className="mt-1 opacity-60">{member.line2}</span>
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,120 L1200,80 C1150,80 1150,40 1100,40 C1050,40 1050,60 1000,60 C950,60 950,20 900,20 C850,20 850,70 800,70 C750,70 750,30 700,30 C650,30 650,80 600,80 C550,80 550,40 500,40 C450,40 450,60 400,60 C350,60 350,20 300,20 C250,20 250,70 200,70 C150,70 150,30 100,30 C50,30 50,80 0,80 Z" fill="#f5f0e8"></path>
        </svg>
      </div>
    </section>
  );
}
