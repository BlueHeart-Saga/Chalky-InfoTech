'use client';

import { motion } from 'framer-motion';
import {
  Target, ShieldCheck, Zap, ArrowRight,
  CheckCircle2, BarChart3, TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import techAlignImg from '@/assets/Services details page/Technical Alignment.png';
import stratPartImg from '@/assets/Services details page/Strategic Partnership.png';
import qaImg from '@/assets/Services details page/Quality Assurance.png';

interface Props {
  title: string;
  description: string;
  serviceLabel?: string;
  slug?: string;
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

const TRUST_STATS = [
  { value: '98%', label: 'Placement Success Rate' },
  { value: '48h', label: 'Average Talent Match' },
  { value: '500+', label: 'Enterprises Served' },
  { value: '12+', label: 'Industries Covered' },
];

const FEATURE_CARDS = [
  {
    title: 'Technical Alignment',
    icon: Zap,
    headline: 'Precision Skill Matching',
    desc: 'Every candidate is assessed through our 3-layer vetting framework — technical challenge, live advisory interview, and code quality review — ensuring production-ready professionals from day one.',
    image: techAlignImg.src,
    tag: 'Vetting',
  },
  {
    title: 'Strategic Partnership',
    icon: Target,
    headline: 'Business-First Recruitment',
    desc: 'Our consultants act as strategic talent advisors, aligning every search with your long-term roadmap, culture, and growth objectives to deliver hires that drive measurable business outcomes.',
    image: stratPartImg.src,
    tag: 'Advisory',
  },
  {
    title: 'Quality Assurance',
    icon: ShieldCheck,
    headline: 'Zero-Compromise Standards',
    desc: 'From background verification to multi-stage competency evaluation and cultural fit profiling, our QA protocols ensure consistently high talent quality across every engagement.',
    image: qaImg.src,
    tag: 'Excellence',
  },
];

const DIFFERENTIATORS = [
  'Domain-specialist recruiters dedicated to your industry vertical',
  'Transparent, compliance-first models — IR35 & EOR ready',
  'Zero replacement fee — we re-engage at no extra cost',
  'UK & India registered for seamless cross-border delivery',
  'Real-time pipeline visibility & weekly performance reports',
  'Contract, Permanent, Temp, On-Site & Remote hiring models',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
});

export default function ServiceOverview({ title, description, serviceLabel }: Props) {
  const svc = serviceLabel || 'Service';
  const { intro, bullets } = parseDesc(description);

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
                <span className="text-[#7A1F5C]">{svc}:</span>{' '}
                {title}
              </h2>

              {/* Intro paragraph */}
              <p className="text-[#4A4A4A] text-base leading-relaxed border-l-4 border-[#7A1F5C] pl-5">
                {intro}
              </p>

              {/* Parsed bullet pillars */}
              {bullets.length > 0 && (
                <ul className="flex flex-col gap-4 mt-1" role="list">
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
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] leading-snug">
                Why Choose Chalky Infotech for{' '}
                <span className="text-[#7A1F5C]">{svc}</span>?
              </h3>

              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                At <strong className="text-[#1A1A1A]">Chalky Infotech</strong>, our{' '}
                <Link href="/services" className="text-[#7A1F5C] font-semibold hover:underline">
                  {svc.toLowerCase()} services
                </Link>{' '}
                are built on a simple belief — recruitment done right is a strategic advantage.
                We combine{' '}
                <Link href="/industries" className="text-[#7A1F5C] font-semibold hover:underline">
                  deep industry knowledge
                </Link>{' '}
                with rigorous assessment science to ensure every hire is an investment, not a risk.
              </p>

              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                With registered operations across the <strong className="text-[#1A1A1A]">UK and India</strong> and
                a talent network spanning 12+ industries, we deliver measurable outcomes at every
                level — from graduate intake to board appointment. We operate as a true extension
                of your team, not a vendor at arm's length.
              </p>

              {/* Differentiators */}
              <div className="rounded-2xl bg-[#F9F5F0] border border-[#EFE7DD] p-6">
                <p className="text-xs font-bold text-[#7A1F5C] uppercase tracking-widest mb-4">
                  What sets our {svc} apart
                </p>
                <ul className="flex flex-col gap-3" role="list">
                  {DIFFERENTIATORS.map((d, i) => (
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
            {TRUST_STATS.map((s, i) => (
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
            {FEATURE_CARDS.map((card, i) => (
              <motion.div key={i} {...fadeUp(0.1 + i * 0.08)} role="listitem">
                <Link href="/services" className="block h-[420px]">
                  <div className="group relative overflow-hidden rounded-3xl bg-[#F5F0E8] h-full cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500">
                    <div className="absolute top-0 left-0 w-full h-[60%] overflow-hidden">
                      <Image
                        src={card.image}
                        alt={`${card.headline} — Chalky Infotech ${svc}`}
                        fill unoptimized
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#7A1F5C] text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {card.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#F5F0E8] group-hover:bg-white p-7 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:h-full z-10 border-t border-[#EFE7DD]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-[#7A1F5C] transition-all">
                          <card.icon size={18} className="text-[#7A1F5C] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-[10px] text-[#9A9A9A] uppercase tracking-widest font-bold">{card.title}</p>
                          <h4 className="text-base font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors leading-tight">
                            {card.headline}
                          </h4>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex-grow flex flex-col pt-1">
                        <p className="text-[#4A4A4A] text-sm leading-relaxed mb-5">{card.desc}</p>
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
            ))}
          </div>

          {/* ── Bottom SEO editorial ── */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#EFE7DD] pt-16"
          >
            <div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                <TrendingUp size={18} className="text-[#7A1F5C]" />
                The Chalky Infotech {svc} Advantage
              </h3>
              <p className="text-[#555] text-sm leading-relaxed mb-3">
                Organisations across the UK and India choose Chalky Infotech because our{' '}
                {svc.toLowerCase()} methodology blends behavioural analytics, domain-expert
                knowledge, and live market intelligence. We treat every engagement as a long-term
                partnership — not a transactional search.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                From fast-growing SaaS startups to FTSE-listed enterprises, our{' '}
                <Link href="/services" className="text-[#7A1F5C] font-semibold hover:underline">
                  {svc.toLowerCase()} solution
                </Link>{' '}
                is calibrated to your sector, your culture, and the calibre of talent you deserve.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                <BarChart3 size={18} className="text-[#7A1F5C]" />
                Measurable {svc} Outcomes
              </h3>
              <p className="text-[#555] text-sm leading-relaxed mb-3">
                Every {svc.toLowerCase()} engagement is underpinned by clear SLAs, transparent
                reporting, and a structured post-placement support window. We track time-to-hire,
                retention rate, candidate satisfaction, and cost-per-hire continuously.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                Our{' '}
                <Link href="/services" className="text-[#7A1F5C] font-semibold hover:underline">
                  full recruitment services
                </Link>{' '}
                — spanning IT Staffing, Executive Search, Contract &amp; Permanent Hiring, Remote
                Hiring, and Managed Workforce Solutions — scale with your ambitions at every stage
                of growth.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </article>
  );
}
