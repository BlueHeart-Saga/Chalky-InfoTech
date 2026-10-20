'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import team1 from '@/assets/about/People-behind/1.png';
import team2 from '@/assets/about/People-behind/6.png';
import team3 from '@/assets/about/People-behind/3.png';
import team4 from '@/assets/about/People-behind/7.png';
import team5 from '@/assets/about/People-behind/4.png';
import team6 from '@/assets/about/People-behind/2.png';
import team7 from '@/assets/about/People-behind/5.png';
import team8 from '@/assets/about/People-behind/8.png';

const teamMembers = [
  { id: 1, line1: 'SARAVANA KARTHIKEYAN', line2: 'CEO & FOUNDER', img: team1 },
  { id: 2, line1: 'MANJULA BASHKAR', line2: 'SECURITY SPECIALIST', img: team2 },
  { id: 3, line1: 'HIMANSHU MUDGAL', line2: 'HEAD OF CLIENT SUCCESS', img: team3 },
  { id: 4, line1: 'PRIYA NAIR', line2: 'HEAD OF TALENT ACQUISITION', img: team4 },
  { id: 5, line1: 'ANJALI SHAH', line2: 'AI RECRUITMENT LEAD', img: team5 },
  { id: 6, line1: 'JAMES WILSON', line2: 'DIRECTOR OF STRATEGY', img: team6 },
  { id: 7, line1: 'RAKESH SHARMA', line2: 'TECHNICAL CONSULTANT', img: team7 },
  { id: 8, line1: 'NEHA GUPTA', line2: 'SENIOR TALENT PARTNER', img: team8 },
];

interface TeamGridProps {
  /**
   * When true (default), the component renders its own <section> with the
   * plum background, dot pattern and bottom wave — matching the About page.
   * When false, only the inner content is rendered, so it can be embedded
   * inside an existing section without duplicating the background / wave.
   */
  standalone?: boolean;
  className?: string;
  /**
   * Fill color of the bottom wave. Should match the next section's background
   * color so the transition is seamless. Defaults to the cream used on the
   * About page (#f5f0e8).
   */
  waveColor?: string;
}

export default function TeamGrid({
  standalone = true,
  className = '',
  waveColor = '#f5f0e8',
}: TeamGridProps) {
  const content = (
    <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center ${className}`}>
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
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center group"
          >
            <div className="relative w-full max-w-[180px] aspect-[4/5] mb-6">
              {/* Cream Blob Background behind each photo */}
{/* Cream Blob Background behind each photo (always visible) */}
<div
  className="absolute inset-0 bg-[#F5F0E8] shadow-lg shadow-[#7A1F5C]/20"
  style={{
    clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)',
    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%',
  }}
/>

              {/* Portrait */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }}
              >
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
              <span className="mt-1 opacity-60">{member.line2}</span>
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );

  if (!standalone) {
    return content;
  }

  return (
    <section className="relative pt-20 pb-24 bg-[#7A1F5C] text-white overflow-hidden">
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {content}

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L1200,120 L1200,80 C1150,80 1150,40 1100,40 C1050,40 1050,60 1000,60 C950,60 950,20 900,20 C850,20 850,70 800,70 C750,70 750,30 700,30 C650,30 650,80 600,80 C550,80 550,40 500,40 C450,40 450,60 400,60 C350,60 350,20 300,20 C250,20 250,70 200,70 C150,70 150,30 100,30 C50,30 50,80 0,80 Z"
            fill={waveColor}
          />
        </svg>
      </div>
    </section>
  );
}