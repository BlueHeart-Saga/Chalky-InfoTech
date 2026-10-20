'use client';

import { motion } from 'framer-motion';
import {
  Target, ShieldCheck, Zap, ArrowRight,
  CheckCircle2, BarChart3, TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import techAlignImg from '@/assets/Services-details-page/1.png';
import stratPartImg from '@/assets/Services-details-page/2.png';
import qaImg from '@/assets/Services-details-page/3.png';

interface Props {
  overview: {
    advantageHeadingLabel: string;
advantageTitle: string;
advantageDescription: string;
    headingLabel: string;
    title: string;
    description: string;
    trustStats: {
      value: string;
      label: string;
    }[];
    featureCards: {
      title: string;
      headline: string;
      description: string;
      
      tag: string;
    }[];
    differentiators: string[];
    whyChooseTitle: string;
    whyChooseDescription: string;
    partnershipDescription: string;
   
    outcomesTitle: string;
    outcomesDescription: string;
    bottomAdvantageTitle: string;
bottomAdvantageDescription: string;
bottomOutcomesTitle: string;
bottomOutcomesDescription: string;
  };
  serviceLabel?: string;
}

/* Split "Intro para\n\n• A: desc\n• B: desc" into parts */
function parseDesc(desc: string) {
  const [introPart = '', ...rest] = desc.split('\n\n');
  const bullets = rest
    .join('\n')
    .split('\n')
    .map(l => l.replace(/^[•\-]\s*/, '').trim())
    .filter(Boolean);
  return { intro: introPart, bullets };
}


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});
function highlightServiceName(text: string, serviceName: string) {
  if (!serviceName) return text;

  const index = text.toLowerCase().indexOf(serviceName.toLowerCase());

  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + serviceName.length);
  const after = text.slice(index + serviceName.length);

  return (
    <>
      {before}
      <span className="text-[#7A1F5C]">{match}</span>
      {after}
    </>
  );
}

export default function ServiceOverview({
  overview,
  serviceLabel,
}: Props) {
  const svc = serviceLabel || 'Service';

  const {
    headingLabel,
    title,
    description,
    trustStats,
    featureCards,
    differentiators,
    whyChooseTitle,
    whyChooseDescription,
    partnershipDescription,
    advantageHeadingLabel,
    advantageTitle,
    advantageDescription,
    outcomesTitle,
    outcomesDescription,
      bottomAdvantageTitle,
  bottomAdvantageDescription,
  bottomOutcomesTitle,
  bottomOutcomesDescription,
    
  } = overview;

  const { intro, bullets } = parseDesc(description);

  const cardIcons = [Zap, Target, ShieldCheck];

  return (
    <article className="bg-white overflow-hidden">
      <section className="py-24" aria-labelledby="overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Balanced two-column prose ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">

            {/* LEFT — heading + service-specific content */}
            <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
              <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest">
                {svc} Overview
              </span>

              {/* SEO heading: includes service name */}
              <h2
                id="overview-heading"
                className="text-2xl md:text-[2.15rem] font-bold text-[#1A1A1A] leading-snug tracking-tight"
              >
                <span className="text-[#7A1F5C]">{headingLabel}:</span>{' '}
                {title}
              </h2>

              {/* Intro paragraph */}
              <p className="text-[#4A4A4A] text-base leading-relaxed border-l-4 border-[#7A1F5C] pl-5">
                {intro}
              </p>

              {/* Parsed bullet pillars */}
              {bullets.length > 0 && (
                <ul className="flex flex-col gap-4 mt-6" role="list">
                  {bullets.map((b, i) => {
                    const colonIdx = b.indexOf(':');
                    const label = colonIdx > -1 ? b.slice(0, colonIdx) : b;
                    const body  = colonIdx > -1 ? b.slice(colonIdx + 1).trim() : '';
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-[#7A1F5C]/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={12} className="text-[#7A1F5C]" />
                        </span>
                        <span className="text-sm text-[#3A3A3A] leading-relaxed">
                          <strong className="font-semibold text-[#1A1A1A]">{label}</strong>
                          {body ? `: ${body}` : ''}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </motion.div>

            {/* RIGHT — company philosophy + differentiators */}
            <motion.div {...fadeUp(0.1)} className="flex flex-col gap-6">
             {/* SEO sub-heading: includes service name */}
<h3
  className="text-xl md:text-2xl font-bold text-[#1A1A1A] leading-snug"
  dangerouslySetInnerHTML={{ __html: whyChooseTitle }}
/>
<div
  className="text-[#4A4A4A] text-sm leading-relaxed"
  dangerouslySetInnerHTML={{
    __html: whyChooseDescription,
  }}
/>

              <div
  className="text-[#4A4A4A] text-sm leading-relaxed"
  dangerouslySetInnerHTML={{
    __html: partnershipDescription,
  }}
/>

              {/* Differentiators */}
              <div className="rounded-2xl bg-[#F9F5F0] border border-[#EFE7DD] p-6">
                <p className="text-xs font-bold text-[#7A1F5C] uppercase tracking-widest mb-4">
                  What sets our {svc} services apart
                </p>
                <ul className="flex flex-col gap-3" role="list">
                  {differentiators.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#3A3A3A]">
                      <CheckCircle2 size={14} className="text-[#7A1F5C] mt-0.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* ── Trust Stats ── */}
          <motion.div
            {...fadeUp(0.15)}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 p-8 rounded-3xl bg-gradient-to-br from-[#F9F5F0] to-[#F5EEE8] border border-[#EFE7DD]"
          >
            {trustStats.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <span className="text-3xl font-bold text-[#7A1F5C] tracking-tight">{s.value}</span>
                <span className="text-xs text-[#6A6A6A] font-medium uppercase tracking-wide leading-snug">{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* ── Feature Cards ── */}
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-8 sr-only">
            Our {svc} Methodology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
           {featureCards.map((card, i) => {
  const Icon = cardIcons[i % cardIcons.length];

  return (
    <motion.div
      key={i}
      {...fadeUp(0.1 + i * 0.08)}
      role="listitem"
    >
                <Link href="/services" className="block h-[420px]">
                  <div className="group relative overflow-hidden rounded-3xl bg-[#F5F0E8] h-full cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
                    <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
                      <Image
  src={
    i === 0
      ? techAlignImg
      : i === 1
      ? stratPartImg
      : qaImg
  }
  alt={`${card.headline} — Chalky Infotech ${svc}`}
  fill
  unoptimized
  className="object-cover transition-transform duration-700 group-hover:scale-110"
  sizes="(max-width: 768px) 100vw, 33vw"
/>
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#7A1F5C] text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {card.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#F5F0E8] group-hover:bg-white p-7 flex flex-col transition-all duration-500 ease-in-out group-hover:h-full z-10 border-t border-[#EFE7DD]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-[#7A1F5C] transition-all">
                          <Icon
  size={18}
  className="text-[#7A1F5C] group-hover:text-white transition-colors"
/>
                        </div>
                        <div>
                          <p className="text-[10px] text-[#9A9A9A] uppercase tracking-widest font-bold">{card.title}</p>
                          <h4 className="text-base font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors leading-tight">
                            {card.headline}
                          </h4>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow flex flex-col pt-1">
                        <p className="text-[#4A4A4A] text-sm leading-relaxed mb-5">{card.description}</p>
                        <div className="inline-flex items-center gap-2 text-[#7A1F5C] font-extrabold text-xs uppercase tracking-widest mt-auto border-b-2 border-[#7A1F5C]/20 pb-1 w-fit group-hover:border-[#7A1F5C] transition-all">
                          Explore Methodology <ArrowRight size={13} />
                        </div>
                      </div>
                      <span className="absolute bottom-6 left-7 text-[#8A8A8A] text-[10px] uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300 font-extrabold">
                        Our Standard
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
           )})}
          </div>

          {/* ── Bottom SEO editorial ── */}
         <motion.div
  {...fadeUp(0.2)}
  className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#EFE7DD] pt-16"
>
  <div>
    <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
      <TrendingUp size={18} className="text-[#7A1F5C]" />
      {bottomAdvantageTitle}
    </h3>

    <div
      className="text-[#555] text-sm leading-relaxed space-y-4"
      dangerouslySetInnerHTML={{
        __html: bottomAdvantageDescription,
      }}
    />
  </div>

  <div>
    <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
      <BarChart3 size={18} className="text-[#7A1F5C]" />
      {bottomOutcomesTitle}
    </h3>

    <div
      className="text-[#555] text-sm leading-relaxed space-y-4"
      dangerouslySetInnerHTML={{
        __html: bottomOutcomesDescription,
      }}
    />
  </div>
</motion.div>
        </div>
      </section>
    </article>
  );
}
