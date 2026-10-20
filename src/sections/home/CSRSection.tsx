'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  Leaf,
  Users2,
  HeartHandshake,
  Globe2,
  Recycle,
  Sun,
  ArrowRight,
  CheckCircle2,
  Sprout,
  Wind,
  Award,
  Sparkles,
} from 'lucide-react';

// ─── Pillars ─────────────────────────────────────────────────────────────────
const CSR_PILLARS = [
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    desc: 'We operate carbon-consciously  from digital-first workflows and paperless recruiting to responsible energy choices across all our offices.',
    accent: '#7A1F5C',
    href: '/csr#pillars',
  },
  {
    icon: Users2,
    title: 'Inclusive Hiring Practices',
    desc: 'Diversity is embedded in every mandate. We champion equitable access to career opportunities for underrepresented communities worldwide.',
    accent: '#C2185B',
    href: '/csr#pillars',
  },
  {
    icon: HeartHandshake,
    title: 'Community Empowerment',
    desc: 'We invest in people beyond placements  supporting local skills programmes, graduate mentorship, and workforce readiness initiatives.',
    accent: '#7A1F5C',
    href: '/csr#pillars',
  },
  {
    icon: Globe2,
    title: 'Ethical Global Practices',
    desc: 'Every engagement is underpinned by transparency, fair labour standards, and rigorous compliance with international employment regulations.',
    accent: '#C2185B',
    href: '/csr#pillars',
  },
];

// ─── Impact Stats ─────────────────────────────────────────────────────────────
const IMPACT_STATS = [
  { value: '100%', label: 'Paperless Recruitment', icon: Recycle, href: '/csr#metrics' },
  { value: '40%', label: 'Women in Leadership Pipeline', icon: HeartHandshake, href: '/csr#metrics' },
  { value: '3', label: 'Community Programmes Active', icon: Sprout, href: '/csr#metrics' },
  { value: 'Net 0', label: 'Carbon Goal by 2030', icon: Wind, href: '/csr#timeline' },
];

// ─── Commitments ──────────────────────────────────────────────────────────────
const COMMITMENTS: { label: string; href?: string }[] = [
  { label: 'Fully digitised, paperless hiring workflows', href: '/csr#pillars' },
  { label: 'Annual carbon-offset partnerships with certified providers', href: '/csr#timeline' },
  { label: 'Mandatory diversity targets on every executive mandate', href: '/services/executive-search' },
  { label: 'Graduate mentorship across disadvantaged communities', href: '/csr#pillars' },
  { label: 'Ethical AI use policy for candidate screening tools', href: '/csr#pillars' },
  { label: 'Transparent supply-chain & labour compliance audits', href: '/csr#sdg' },
];

export default function CSRSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const decoY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#F5F0E8] text-[#1A1A1A] overflow-hidden pb-48"
      aria-label="CSR, Sustainability & Environment"
    >
      {/* ── Subtle dot-grid texture ── */}
      {/* <motion.div
        style={{
          y: bgY,
          backgroundImage: 'radial-gradient(circle at 1px 1px, #7A1F5C 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
      /> */}

      {/* ── Soft Brand Orbs ── */}
      {/* <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#7A1F5C]/6 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C2185B]/6 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" /> */}

      {/* ── Floating deco icon ── */}
      <motion.div
        style={{ y: decoY }}
        className="absolute right-6 top-20 opacity-[0.04] pointer-events-none hidden lg:block"
      >
        <Sparkles size={220} className="text-[#7A1F5C]" strokeWidth={0.4} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-widest mb-6 border border-[#7A1F5C]/15">
              <Leaf size={11} /> Our Responsibility
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.1] mb-8 tracking-tight">
              Committed to{' '}
              <span className="text-[#7A1F5C]">People,</span>{' '}
              <span className="text-[#C2185B]">Planet</span>{' '}
              &amp;{' '}
              <span className="text-[#1A1A1A]">Purpose</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
              At <Link href="/about" className="text-[#7A1F5C] font-semibold hover:underline underline-offset-2">Chalky Infotech</Link>, responsible business is not a checkbox  it is the foundation of how we operate. Our{' '}
              <Link href="/csr" className="text-[#7A1F5C] font-semibold hover:underline underline-offset-2">CSR strategy</Link>{' '}
              integrates <Link href="/csr#pillars" className="text-[#C2185B] font-semibold hover:underline underline-offset-2">sustainability</Link>, <Link href="/services" className="text-[#7A1F5C] font-semibold hover:underline underline-offset-2">inclusive recruitment</Link>, and community impact into every layer of our{' '}
              <Link href="/services" className="text-[#7A1F5C] font-semibold hover:underline underline-offset-2">workforce solutions</Link>.
            </p>

            {/* Commitments checklist */}
            <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
              {COMMITMENTS.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <CheckCircle2 size={16} className="text-[#C2185B] mt-0.5 flex-shrink-0" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-[#7A1F5C] hover:underline underline-offset-2 transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    c.label
                  )}
                </motion.li>
              ))}
            </ul>

            <Link
              href="/csr"
              className="inline-flex items-center gap-3 bg-[#7A1F5C] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#C2185B] transition-all duration-300 shadow-lg shadow-[#7A1F5C]/20 group"
            >
              Our Full CSR Report
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Impact Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {IMPACT_STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <Link
                  href={stat.href}
                  className="relative overflow-hidden rounded-3xl p-7 bg-white border border-[#EFE7DD] hover:border-[#7A1F5C]/25 hover:shadow-xl hover:shadow-[#7A1F5C]/8 transition-all duration-400 group flex flex-col h-full"
                >
                  {/* Hover tint */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7A1F5C]/4 to-transparent rounded-3xl" />

                  <stat.icon size={26} className="text-[#7A1F5C] mb-5 relative z-10" strokeWidth={1.5} />
                  <p className="text-4xl font-bold text-[#1A1A1A] mb-1.5 relative z-10">{stat.value}</p>
                  <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider relative z-10">{stat.label}</p>

                  {/* Corner quarter-circle accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#7A1F5C]/5 rounded-tl-full transition-all duration-500 group-hover:w-24 group-hover:h-24" />
                </Link>
              </motion.div>
            ))}

            {/* SDG Banner */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="col-span-2"
            >
              <Link
                href="/csr#sdg"
                className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-r from-[#7A1F5C] to-[#C2185B] flex items-center gap-5 shadow-lg shadow-[#7A1F5C]/20 group hover:shadow-xl hover:shadow-[#7A1F5C]/30 transition-shadow duration-300"
                title="See our full UN SDG alignment on the CSR Report page"
              >
                {/* Subtle shimmer layer */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                <div className="w-[52px] h-[52px] rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0 relative z-10">
                  <Sun size={26} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="relative z-10 flex-1">
                  <p className="text-white font-bold text-base mb-1">UN SDG Aligned Operations</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Our commitments align with <strong className="text-white/90">SDG 8</strong> (Decent Work),{' '}
                    <strong className="text-white/90">SDG 10</strong> (Reduced Inequalities) &amp;{' '}
                    <strong className="text-white/90">SDG 13</strong> (Climate Action).
                  </p>
                </div>
                <ArrowRight size={20} className="text-white/40 ml-auto hidden md:block flex-shrink-0 relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Four Pillars ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CSR_PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={pillar.href}
                className="group relative rounded-3xl p-8 bg-white border border-[#EFE7DD] hover:border-[#7A1F5C]/20 hover:shadow-xl hover:shadow-[#7A1F5C]/8 transition-all duration-500 overflow-hidden flex flex-col h-full"
                title={pillar.title}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#7A1F5C]/4 to-transparent rounded-3xl" />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                  style={{ background: `${pillar.accent}15` }}
                >
                  <pillar.icon size={26} style={{ color: pillar.accent }} strokeWidth={1.5} />
                </div>

                <h3 className="text-[#1A1A1A] font-bold text-lg mb-3 relative z-10 leading-snug group-hover:text-[#7A1F5C] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10 group-hover:text-gray-600 transition-colors duration-300 flex-grow">
                  {pillar.desc}
                </p>

                {/* Learn more link text */}
                <span
                  className="inline-flex items-center gap-1.5 mt-5 text-[11px] font-extrabold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                  style={{ color: pillar.accent }}
                >
                  Learn More <ArrowRight size={12} />
                </span>

                {/* Animated bottom accent bar */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-3xl"
                  style={{ background: `linear-gradient(90deg, ${pillar.accent}, #C2185B)` }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Wave divider → white ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg
          className="relative block w-full h-[50px] sm:h-[90px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C200,110 400,10 600,60 C800,110 1000,10 1200,60 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
