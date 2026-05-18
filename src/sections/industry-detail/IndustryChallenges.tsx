'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface Props {
  challenges: string[];
}

const CARD_STYLES = [
  {
    bg: 'bg-[#7A1F5C]/10',
    border: 'border-[#7A1F5C]/20',
  },
  {
    bg: 'bg-[#DBCB89]/20',
    border: 'border-[#DBCB89]/30',
  },
  {
    bg: 'bg-[#C2DDE5]/30',
    border: 'border-[#C2DDE5]/40',
  },
  {
    bg: 'bg-[#7A1F5C]/20',
    border: 'border-[#7A1F5C]/30',
  },
];

function getChallengeDetail(challenge: string, index: number) {
  const normalized = challenge.toLowerCase();
  
  let icon = 'ShieldAlert';
  let desc = 'Overcoming structural roadblocks through proactive hiring and strategic workforce planning.';
  
  if (normalized.includes('skill') || normalized.includes('talent') || normalized.includes('shortage') || normalized.includes('deficit')) {
    icon = 'UserMinus';
    desc = 'Bridging critical niche expertise gaps with active networking and target sourcing strategies.';
  } else if (normalized.includes('tech') || normalized.includes('obsolescence') || normalized.includes('evolving') || normalized.includes('stack')) {
    icon = 'Cpu';
    desc = 'Keeping pace with rapid digital shifts by vetting for highly agile and adaptable engineering talent.';
  } else if (normalized.includes('remote') || normalized.includes('integration') || normalized.includes('culture') || normalized.includes('align')) {
    icon = 'Users';
    desc = 'Ensuring seamless global communication synergy, team alignment, and robust cultural integration.';
  } else if (normalized.includes('competition') || normalized.includes('scale') || normalized.includes('speed') || normalized.includes('retention')) {
    icon = 'Zap';
    desc = 'Accelerating time-to-hire to secure key leadership and engineering assets before competitors.';
  } else if (normalized.includes('regulatory') || normalized.includes('compliance') || normalized.includes('security') || normalized.includes('trust')) {
    icon = 'ShieldCheck';
    desc = 'Navigating complex global standards and security mandates through pre-vetted compliance experts.';
  } else if (normalized.includes('clinical') || normalized.includes('pharma') || normalized.includes('safety') || normalized.includes('health')) {
    icon = 'HeartPulse';
    desc = 'Meeting high patient-safety regulations and research demands with specialized medical professionals.';
  } else if (normalized.includes('chain') || normalized.includes('logistics') || normalized.includes('supply') || normalized.includes('automation')) {
    icon = 'Truck';
    desc = 'Vetting operational specialists who streamline modern procurement, inventory, and automation pipelines.';
  } else {
    const fallbacks = [
      { icon: 'ShieldAlert', desc: 'Overcoming critical bottlenecks through target headhunting and skill alignment.' },
      { icon: 'Target', desc: 'Navigating domain-specific complexities with certified expert talent.' },
      { icon: 'Award', desc: 'Ensuring absolute regulatory compliance and maximum operational standard benchmarks.' },
      { icon: 'TrendingUp', desc: 'Accelerating digital scaling capability and long-term organizational value.' }
    ];
    const fb = fallbacks[index % fallbacks.length];
    icon = fb.icon;
    desc = fb.desc;
  }
  
  return { icon, desc };
}

export default function IndustryChallenges({ challenges }: Props) {
  return (
    <section className="py-32 bg-[#FAF8F5] overflow-hidden relative">
      
      {/* ── BACKGROUND WAVY DOTTED PATH SVG ── */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[400px] pointer-events-none opacity-20 z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-50,200 C300,80 400,320 720,200 C1040,80 1100,320 1490,200"
            stroke="#7A1F5C"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            fill="none"
          />
          <path
            d="M100,150 C500,350 600,50 1000,250 C1300,350 1400,120 1550,180"
            stroke="#DBCB89"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── INTRO HEADER BLOCK ── */}
        <div className="max-w-3xl mb-24 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-extrabold uppercase tracking-widest mb-5">
            Navigating Complexity
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight tracking-tight">
            Sector <span className="text-[#7A1F5C]">Challenges</span> We Solve
          </h2>
          <p className="text-[#8A8A8A] text-lg max-w-2xl leading-relaxed">
            We identify, mitigate, and overcome critical operational bottlenecks in the industry by connecting you with specialized workforce leaders.
          </p>
        </div>

        {/* ── STAGGERED STAIRCASE CARD GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {challenges.map((challenge, i) => {
            const { icon, desc } = getChallengeDetail(challenge, i);
            const IconComponent = (LucideIcons as any)[icon] || LucideIcons.AlertCircle;
            const style = CARD_STYLES[i % CARD_STYLES.length];

            // Staircase vertical translations based on index
            const staggerClasses = 
              i === 0 
                ? 'lg:translate-y-16' 
                : i === 1 
                  ? 'lg:translate-y-8' 
                  : i === 2 
                    ? 'lg:translate-y-0' 
                    : 'lg:-translate-y-8';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`bg-white rounded-3xl p-8 border border-[#EFE7DD] shadow-[0_12px_36px_rgba(122,31,92,0.03)] hover:shadow-[0_24px_56px_rgba(122,31,92,0.08)] hover:-translate-y-1 transition-all duration-500 relative z-10 group cursor-pointer ${staggerClasses}`}
              >
                {/* Decorative Subtle Number */}
                <span className="absolute top-6 right-6 text-gray-200 text-xs font-black select-none group-hover:text-[#7A1F5C]/10 transition-colors">
                  0{i + 1}
                </span>

                {/* Card Icon Block */}
                <div className={`w-14 h-14 rounded-2xl ${style.bg} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={26} className="text-[#7A1F5C]" />
                </div>
                
                {/* Card Title */}
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#7A1F5C] transition-colors duration-300">
                  {challenge}
                </h4>
                
                {/* Card Description */}
                <p className="text-[#8A8A8A] text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
