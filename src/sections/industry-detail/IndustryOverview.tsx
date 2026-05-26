'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { CheckCircle2, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Capability {
  title: string;
  desc: string;
  icon: string;
}

interface Props {
  title: string;
  description: string;
  industryLabel?: string;
  capabilities: Capability[];
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

const DIFFERENTIATORS = [
  'Domain-specialist recruiters with sector-specific knowledge',
  'Compliance-first engagement models — IR35 & EOR ready',
  'Zero replacement fee — we re-engage at no additional cost',
  'UK & India registered for seamless cross-border delivery',
  'Real-time candidate pipeline visibility & weekly reports',
  'Contract, Permanent, Temp, On-Site & Remote hiring models',
];

const CARD_STYLES = [
  {
    bg: 'bg-[#7A1F5C] text-white',
    iconBg: 'bg-white/15 text-white',
    descText: 'text-white/80',
    shape: 'rounded-[50px_35px_60px_40px_/_40px_50px_45px_55px]',
  },
  {
    bg: 'bg-[#DBCB89] text-[#1A1A1A]',
    iconBg: 'bg-black/5 text-[#1A1A1A]',
    descText: 'text-black/75',
    shape: 'rounded-[35px_50px_40px_60px_/_50px_40px_55px_45px]',
  },
  {
    bg: 'bg-[#C2DDE5] text-[#1A1A1A]',
    iconBg: 'bg-black/5 text-[#1A1A1A]',
    descText: 'text-black/75',
    shape: 'rounded-[60px_40px_50px_35px_/_45px_55px_40px_50px]',
  },
  {
    bg: 'bg-[#6A1A4E] text-white',
    iconBg: 'bg-white/15 text-white',
    descText: 'text-white/80',
    shape: 'rounded-[40px_60px_35px_50px_/_55px_45px_50px_40px]',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

export default function IndustryOverview({ title, description, industryLabel, capabilities }: Props) {
  const industry = industryLabel || 'Industry';
  const { intro, bullets } = parseDesc(description);

  return (
    <article className="bg-white overflow-hidden">
      <section className="py-24" aria-labelledby="industry-overview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Balanced two-column prose ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">

            {/* LEFT — industry heading + specific content */}
            <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
              <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest">
                {industry} Sector Overview
              </span>

              {/* SEO heading: service name included */}
              <h2
                id="industry-overview-heading"
                className="text-2xl md:text-[2.15rem] font-bold text-[#1A1A1A] leading-snug tracking-tight"
              >
                <span className="text-[#7A1F5C]">{industry}:</span>{' '}
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
              {/* SEO sub-heading: industry name included */}
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] leading-snug">
                Why Chalky Infotech for{' '}
                <span className="text-[#7A1F5C]">{industry}</span> Recruitment?
              </h3>

              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                At <strong className="text-[#1A1A1A]">Chalky Infotech</strong>, our{' '}
                <Link href="/industries" className="text-[#7A1F5C] font-semibold hover:underline">
                  {industry.toLowerCase()} recruitment expertise
                </Link>{' '}
                is built on a foundation of sector-specific knowledge and rigorous assessment
                science. We combine deep market intelligence with a global talent network to
                deliver professionals who are not just qualified — but truly industry-ready.
              </p>

              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                With registered operations across the{' '}
                <strong className="text-[#1A1A1A]">UK and India</strong> and a talent pipeline
                spanning 12+ industries, we deliver measurable outcomes at every level — from
                specialist contributors to senior leadership. We work as a true extension of your
                team, not a vendor at arm's length.
              </p>

              {/* Differentiators card */}
              <div className="rounded-2xl bg-[#F9F5F0] border border-[#EFE7DD] p-6">
                <p className="text-xs font-bold text-[#7A1F5C] uppercase tracking-widest mb-4">
                  What sets our {industry} practice apart
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

          {/* ── Capability Cards ── */}
          <h3 className="sr-only">{industry} Recruitment Capabilities</h3>
          <div
            className={`grid grid-cols-1 ${
              capabilities.length === 4
                ? 'md:grid-cols-2 lg:grid-cols-4'
                : capabilities.length === 2
                  ? 'md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto'
                  : 'md:grid-cols-2 lg:grid-cols-3'
            } gap-12 pb-8 relative z-10`}
            role="list"
          >
            {capabilities.map((cap, i) => {
              const Icon = (LucideIcons as any)[cap.icon] || LucideIcons.Zap;
              const cardStyle = CARD_STYLES[i % CARD_STYLES.length];

              return (
                <motion.div key={i} {...fadeUp(0.1 + i * 0.08)} role="listitem">
                  <Link href="/services" className="block">
                    <div
                      className={`group relative flex flex-col justify-between p-8 pt-12 pb-14 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 min-h-[350px] text-center ${cardStyle.bg} ${cardStyle.shape}`}
                    >
                      {/* Upper content */}
                      <div className="flex flex-col items-center">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 ${cardStyle.iconBg}`}>
                          <Icon size={26} />
                        </div>
                        <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:opacity-95 transition-opacity">
                          {cap.title}
                        </h4>
                        <p className={`text-sm leading-relaxed ${cardStyle.descText}`}>
                          {cap.desc}
                        </p>
                      </div>

                      {/* Arrow pill */}
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300 z-20">
                        <ArrowRight size={16} className="text-[#7A1F5C] transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* ── Bottom SEO editorial ── */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#EFE7DD] pt-16"
          >
            <div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                <TrendingUp size={18} className="text-[#7A1F5C]" />
                The Chalky Infotech {industry} Talent Advantage
              </h3>
              <p className="text-[#555] text-sm leading-relaxed mb-3">
                Organisations across the UK and India choose Chalky Infotech for{' '}
                {industry.toLowerCase()} recruitment because our methodology blends
                behavioural analytics, domain-expert knowledge, and live market intelligence.
                We treat every engagement as a long-term partnership — not a transactional search.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                From fast-growing startups to FTSE-listed enterprises, our{' '}
                <Link href="/industries" className="text-[#7A1F5C] font-semibold hover:underline">
                  {industry.toLowerCase()} hiring solution
                </Link>{' '}
                is calibrated to your sector, your culture, and the calibre of talent your
                organisation deserves.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                <BarChart3 size={18} className="text-[#7A1F5C]" />
                Measurable {industry} Recruitment Outcomes
              </h3>
              <p className="text-[#555] text-sm leading-relaxed mb-3">
                Every {industry.toLowerCase()} engagement is underpinned by clear SLAs,
                transparent reporting, and a structured post-placement support window. We track
                time-to-hire, retention rate, candidate satisfaction, and cost-per-hire to
                continuously refine our delivery.
              </p>
              <p className="text-[#555] text-sm leading-relaxed">
                Our{' '}
                <Link href="/services" className="text-[#7A1F5C] font-semibold hover:underline">
                  full suite of recruitment services
                </Link>{' '}
                — spanning IT Staffing, Executive Search, Contract &amp; Permanent Hiring, Remote
                Hiring, and Managed Workforce Solutions — is purpose-built to scale with your
                {' '}{industry.toLowerCase()} ambitions at every stage of growth.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </article>
  );
}
