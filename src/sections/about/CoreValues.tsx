'use client';

import { useState } from 'react';
import { ShieldCheck, Lightbulb, Activity, HeartHandshake, TrendingUp, Users } from 'lucide-react';

interface Value {
  icon: React.ElementType;
  title: string;
  desc: string;
  image: any;
  hex: string;
  accent: string;
  variant: 'dark' | 'pink' | 'light';
}

import IntegrityImg from '@/assets/about/core-values/Integrity.png';
import InnovationImg from '@/assets/about/core-values/Innovation.png';
import TransparencyImg from '@/assets/about/core-values/Transparency.png';
import ClientSuccessImg from '@/assets/about/core-values/Client sucees.png';
import SpeedImg from '@/assets/about/core-values/speed.png';
import CollaborationImg from '@/assets/about/core-values/Collaboration.png';

const values: Value[] = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'Unwavering ethics and honesty in every client and candidate interaction.',
    image: IntegrityImg,
    hex: '#5A1040', accent: '#7A1F5C', variant: 'dark',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Continuously refining our search methodologies with data-driven insights.',
    image: InnovationImg,
    hex: '#C2185B', accent: '#E91E8C', variant: 'pink',
  },
  {
    icon: Activity,
    title: 'Transparency',
    desc: 'Clear, open communication throughout the entire recruitment lifecycle.',
    image: TransparencyImg,
    hex: '#5A1040', accent: '#7A1F5C', variant: 'dark',
  },
  {
    icon: HeartHandshake,
    title: 'Client Success',
    desc: 'Your long-term organizational growth is our primary metric for success.',
    image: ClientSuccessImg,
    hex: '#C2185B', accent: '#E91E8C', variant: 'pink',
  },
  {
    icon: TrendingUp,
    title: 'Speed',
    desc: 'Agile delivery of top-tier talent without compromising on quality.',
    image: SpeedImg,
    hex: '#5A1040', accent: '#7A1F5C', variant: 'dark',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'Working as a seamless extension of your internal HR and technical teams.',
    image: CollaborationImg,
    hex: '#9B3B7A', accent: '#C2185B', variant: 'light',
  },
];

/* Alternating cascade positions */
const cascadeOffset = ['md:mt-0', 'md:mt-12', 'md:mt-0', 'md:mt-12', 'md:mt-0', 'md:mt-12'];

export default function CoreValues() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered !== null ? values[hovered] : null;

  return (
    <section className="relative pt-28 md:pt-36 pb-14 md:pb-16 bg-white overflow-hidden">

      {/* ── Top Wave Divider ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none rotate-180">
        <svg className="relative block w-full" style={{ height: '80px' }}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,80 L0,40 C80,65 160,15 240,42 C320,70 400,18 480,44 C560,70 640,16 720,42 C800,68 880,14 960,40 C1040,66 1120,20 1200,44 L1200,80 Z" fill="#f5f0e8" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
            Core Values
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-4 leading-[1.1] tracking-tight">
            The Principles That <br />
            <span className="text-[#7A1F5C]">Drive Us</span>
          </h2>
          <p className="text-[#8A8A8A] text-lg leading-relaxed">
            We believe that how we work is just as important as the results we deliver.
          </p>
        </div>

        {/* ── Interactive Container ── */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ minHeight: '320px' }}
          onMouseLeave={() => setHovered(null)}
        >

          {/* ════ DEFAULT VIEW: Hexagonal Cascade Flow ════ */}
          <div
            className="transition-all duration-500"
            style={{
              opacity: hovered === null ? 1 : 0,
              transform: hovered === null ? 'scale(1)' : 'scale(0.97)',
              pointerEvents: hovered === null ? 'auto' : 'none',
              position: hovered === null ? 'relative' : 'absolute',
              inset: 0,
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 items-start pt-4 pb-16">
              {values.map((v, i) => (
                <div
                  key={i}
                  className={`group flex flex-col items-center text-center ${cascadeOffset[i]} cursor-pointer`}
                  onMouseEnter={() => setHovered(i)}
                >
                  {/* Hexagon */}
                  <div className="relative mb-4">
                    <div
                      className="w-20 h-20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: v.accent,
                        clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                      }}
                    >
                      <v.icon className="text-white w-8 h-8" strokeWidth={1.5} />
                    </div>
                    {/* Outer glow ring */}
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-opacity duration-300 -z-10"
                      style={{
                        clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                        background: v.accent,
                        transform: 'scale(1.2)',
                      }}
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-[#1A1A1A] mb-1 leading-snug">{v.title}</h3>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed px-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ════ HOVER VIEW: 1 : 5 Split ════ */}
          <div
            className="transition-all duration-500 flex rounded-2xl overflow-hidden"
            style={{
              opacity: hovered !== null ? 1 : 0,
              transform: hovered !== null ? 'scale(1)' : 'scale(1.02)',
              pointerEvents: hovered !== null ? 'auto' : 'none',
              position: hovered !== null ? 'relative' : 'absolute',
              inset: 0,
              height: '400px',
            }}
          >
            {active && (
              <>
                {/* LEFT  Icon panel (flex 1) */}
                <div
                  className="flex flex-col items-center justify-center gap-4 px-4 flex-shrink-0"
                  style={{
                    flex: 1,
                    backgroundColor: active.hex,
                    minWidth: '120px',
                    maxWidth: '160px',
                  }}
                >
                  {/* All 6 icons stacked vertically */}
                  <div className="flex flex-col gap-3 items-center">
                    {values.map((v, i) => {
                      const isThis = i === hovered;
                      return (
                        <div
                          key={i}
                          className="cursor-pointer transition-all duration-300"
                          onMouseEnter={() => setHovered(i)}
                          style={{
                            opacity: isThis ? 1 : 0.45,
                            transform: isThis ? 'scale(1.2)' : 'scale(1)',
                          }}
                        >
                          <div
                            className="flex items-center justify-center shadow-md"
                            style={{
                              width: isThis ? '48px' : '36px',
                              height: isThis ? '48px' : '36px',
                              backgroundColor: isThis ? v.accent : `${v.accent}99`,
                              clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <v.icon
                              className="text-white"
                              style={{
                                width: isThis ? '22px' : '16px',
                                height: isThis ? '22px' : '16px',
                                transition: 'all 0.3s ease',
                              }}
                              strokeWidth={1.5}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>


                </div>

                {/* RIGHT  Full Image (flex 5) */}
                <div className="relative overflow-hidden" style={{ flex: 5 }}>
                  <img
                    src={active.image.src}
                    alt={active.title}
                    key={hovered} /* re-trigger fade on change */
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ animation: 'cvFadeIn 0.4s ease' }}
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${active.hex}cc 0%, transparent 60%)`,
                    }}
                  />
                  {/* Text overlay on image */}
                  <div className="absolute bottom-0 left-0 p-8">
                    <div
                      className="inline-flex items-center justify-center mb-4 shadow-xl"
                      style={{
                        width: '56px', height: '56px',
                        backgroundColor: active.accent,
                        clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                      }}
                    >
                      <active.icon className="text-white w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white text-3xl font-extrabold mb-2 drop-shadow">{active.title}</h3>
                    <p className="text-white/80 text-base leading-relaxed max-w-md drop-shadow">{active.desc}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>



      {/* Fade-in keyframe for image swap */}
      <style>{`
        @keyframes cvFadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
