'use client';

import Image from 'next/image';
import Link from 'next/link';

import VisionImg from '@/assets/About Us/Vision Mission,skill/vision.png';
import MissionImg from '@/assets/About Us/Vision Mission,skill/Mission.png';
import ClientRelationImg from '@/assets/About Us/Vision Mission,skill/Client relation.png';
import SkilledWorkforceImg from '@/assets/About Us/Vision Mission,skill/skilled workforce.png';

interface Block {
  title: string;
  tag: string;
  desc: React.ReactNode;
  image: any;
  accent: string;
  accentLight: string;
  link: string;
  align: 'left' | 'right';
}

const blocks: Block[] = [
  {
    title: 'Our Vision',
    tag: '01',
    desc: <>At Chalky Infotech, we envision becoming a globally trusted <Link href="/services" className="font-semibold underline underline-offset-2" style={{ color: '#7A1F5C' }}>technology recruitment</Link> and workforce solutions partner — supporting organizations through continuous innovation and long-term <Link href="/services/permanent-hiring" className="font-semibold underline underline-offset-2" style={{ color: '#7A1F5C' }}>talent acquisition</Link> methodologies that bridge the gap between human potential and enterprise success.</>,
    image: VisionImg,
    accent: '#7A1F5C',
    accentLight: '#f8f2fb',
    link: '/services',
    align: 'left',
  },
  {
    title: 'Our Mission',
    tag: '02',
    desc: <>Our mission is to empower businesses by connecting them with exceptional technology professionals. Through our consultative approach and <Link href="/services/managed-services" className="font-semibold underline underline-offset-2" style={{ color: '#C2185B' }}>scalable workforce solutions</Link>, we drive measurable, long-lasting business impact for every partner we serve.</>,
    image: MissionImg,
    accent: '#C2185B',
    accentLight: '#fceef4',
    link: '/services/managed-services',
    align: 'right',
  },
  {
    title: 'Client Relationship',
    tag: '03',
    desc: <>We build trusted, strategic partnerships by deeply understanding your organizational goals and unique workforce challenges, delivering tailored <Link href="/services/contract-staffing" className="font-semibold underline underline-offset-2" style={{ color: '#7A1F5C' }}>hiring outcomes</Link> that align with your culture and long-term growth objectives.</>,
    image: ClientRelationImg,
    accent: '#7A1F5C',
    accentLight: '#f8f2fb',
    link: '/contact',
    align: 'left',
  },
  {
    title: 'Skilled Workforce',
    tag: '04',
    desc: <>We specialize in assembling future-ready technical teams across <Link href="/industries/it-technology" className="font-semibold underline underline-offset-2" style={{ color: '#C2185B' }}>cloud computing, DevOps</Link>, AI, and software engineering. Our specialist-led selection process ensures every candidate thrives in modern digital environments.</>,
    image: SkilledWorkforceImg,
    accent: '#C2185B',
    accentLight: '#fceef4',
    link: '/industries/it-technology',
    align: 'right',
  },
];

// IMAGE dimensions
const IMG_W = 290;
const IMG_H = 320;
// How much of the image bleeds OUTSIDE the card
const BLEED = IMG_W * 0.52;

export default function MissionVision() {
  return (
    <>
      <style>{`
        @keyframes mv-rise {
          from { opacity: 0; transform: translateY(44px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mv-block { opacity: 0; animation: mv-rise 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .mv-img-inner { transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease; }
        .mv-block:hover .mv-img-inner { transform: rotate(0deg) scale(1.04) !important; box-shadow: 0 32px 64px rgba(0,0,0,0.2) !important; }
      `}</style>

      <section className="bg-[#f5f0e8] overflow-hidden" style={{ padding: '40px 0 72px 0' }} aria-label="Mission Vision Values">
        <div className="w-[82%] mx-auto flex flex-col" style={{ gap: '36px' }}>

          {blocks.map((block, index) => {
            const isLeft = block.align === 'left';
            /*
              Image is absolutely positioned relative to the outer row wrapper.
              It sits at the left or right edge of the card, centered vertically,
              with BLEED px hanging outside the card.
            */
            return (
              <div
                key={index}
                className="mv-block"
                style={{
                  position: 'relative',
                  animationDelay: `${index * 0.13}s`,
                  /*
                    Give horizontal room for the bleed so the image
                    doesn't get clipped by the section overflow.
                  */
                  paddingLeft:  isLeft ? `${BLEED}px` : '0',
                  paddingRight: isLeft ? '0' : `${BLEED}px`,
                  marginTop: '8px',
                  marginBottom: '8px',
                }}
              >
                {/* ── White Card ─────────────────────────────────────────── */}
                <div
                  style={{
                    position: 'relative',
                    background: '#ffffff',
                    borderRadius: '28px',
                    boxShadow: '0 6px 40px rgba(0,0,0,0.07)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    overflow: 'visible',
                    /*
                      Reserve space on the image side so text doesn't
                      run under the half-inside portion of the image.
                      Half the image width sits inside the card.
                    */
                    paddingTop: '44px',
                    paddingBottom: '44px',
                    paddingLeft:  isLeft ? `${IMG_W - BLEED + 24}px` : '48px',
                    paddingRight: isLeft ? '48px' : `${IMG_W - BLEED + 24}px`,
                  }}
                >
                  {/* Subtle tinted gradient on image side */}
                  <div
                    style={{
                      position: 'absolute', top: 0, bottom: 0,
                      left:  isLeft ? 0 : 'auto',
                      right: isLeft ? 'auto' : 0,
                      width: '38%',
                      background: `linear-gradient(${isLeft ? '90deg' : '270deg'}, ${block.accentLight} 0%, transparent 100%)`,
                      borderRadius: isLeft ? '28px 0 0 28px' : '0 28px 28px 0',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Text content */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Eyebrow */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <div style={{ width: '18px', height: '2px', borderRadius: '2px', background: block.accent }} />
                      <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: block.accent }}>
                        Chalky Infotech
                      </span>
                    </div>

                    {/* Title */}
                    <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 1.9rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.15, marginBottom: '10px' }}>
                      {block.title}
                    </h2>

                    {/* Divider */}
                    <div style={{ width: '28px', height: '2px', borderRadius: '2px', background: block.accent, marginBottom: '16px' }} />

                    {/* Description */}
                    <p style={{ fontSize: 'clamp(0.86rem, 1.1vw, 0.94rem)', color: '#5a5a5a', lineHeight: 1.85, marginBottom: '20px' }}>
                      {block.desc}
                    </p>

                    {/* Link */}
                    <Link
                      href={block.link}
                      className="inline-flex items-center gap-1.5 group"
                      style={{ fontSize: '13px', fontWeight: 700, color: block.accent, textDecoration: 'none' }}
                    >
                      <span className="group-hover:underline underline-offset-2">Explore more</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* ── Image — half inside, half outside the card ─────── */}
                  {/*
                    Positioned absolutely relative to the white card.
                    Centered vertically. Pushed left/right so BLEED amount hangs outside.
                  */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      left:  isLeft ? `-${BLEED}px` : 'auto',
                      right: isLeft ? 'auto' : `-${BLEED}px`,
                      width: `${IMG_W}px`,
                      zIndex: 20,
                    }}
                  >
                    {/* Glow */}
                    <div style={{
                      position: 'absolute', inset: '10px',
                      borderRadius: '22px',
                      background: block.accent,
                      opacity: 0.12,
                      filter: 'blur(24px)',
                      pointerEvents: 'none',
                    }} />

                    {/* Tilted image */}
                    <div
                      className="mv-img-inner"
                      style={{
                        width: `${IMG_W}px`,
                        height: `${IMG_H}px`,
                        borderRadius: '22px',
                        overflow: 'hidden',
                        position: 'relative',
                        transform: isLeft ? 'rotate(-4deg)' : 'rotate(4deg)',
                        boxShadow: `0 20px 52px rgba(0,0,0,0.16), 0 4px 14px ${block.accent}25`,
                        transformOrigin: 'center center',
                      }}
                    >
                      <Image
                        src={block.image}
                        alt={block.title}
                        fill
                        sizes={`${IMG_W}px`}
                        className="object-cover"
                        priority={index === 0}
                      />
                      {/* Bottom fade */}
                      <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        height: '35%',
                        background: `linear-gradient(to top, ${block.accent}55, transparent)`,
                        pointerEvents: 'none',
                      }} />
                    </div>

                    {/* Modern ring accent around image */}
                    <div style={{
                      position: 'absolute',
                      inset: '-6px',
                      borderRadius: '28px',
                      border: `2px solid ${block.accent}22`,
                      pointerEvents: 'none',
                      zIndex: -1,
                    }} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
