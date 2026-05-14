'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  /** Breadcrumb trail  e.g. [{label:'Home',href:'/'},{label:'Services'}] */
  breadcrumbs?: BreadcrumbItem[];
  /** Main page title */
  title: string;
  /** Highlighted span appended to the title line */
  titleHighlight?: string;
  /** Subtitle / description paragraph */
  subtitle?: string;
  /** Primary CTA button label */
  ctaLabel?: string;
  /** Primary CTA button href */
  ctaHref?: string;
  /** Secondary CTA label */
  secondaryLabel?: string;
  /** Secondary CTA href */
  secondaryHref?: string;
  /** Right-side image src — can be any URL or /public path */
  imageSrc?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Small badge shown above the title */
  badge?: string;
}

export default function PageHero({
  breadcrumbs = [],
  title,
  titleHighlight,
  subtitle,
  ctaLabel = 'Contact Us & Start Hiring',
  ctaHref = '/contact',
  secondaryLabel,
  secondaryHref = '/jobs',
  imageSrc,
  imageAlt = 'Hero image',
  badge,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2D0F22] via-[#4A1238] to-[#7A1F5C] min-h-[320px] flex items-center">

      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Left accent bar ── */}
      <div className="absolute left-0 top-12 bottom-12 w-1 rounded-r-full bg-gradient-to-b from-[#C2185B] via-[#D14D72] to-transparent" />

      {/* ── Decorative circles ── */}
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-[#C2185B]/10 -translate-y-1/2 blur-3xl pointer-events-none" />

      {/* ═══════════════ RIGHT — Rectangle Image flush to section top-right corner ═══════════════
          Placed as a DIRECT child of <section> so position:absolute is relative to the section,
          not the constrained max-w-7xl container. This makes it truly flush to the viewport edge.
      */}
      {imageSrc && (
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          aria-hidden="true"
          className="hidden lg:block absolute right-0 top-28 bottom-16 lg:top-36 lg:bottom-20"
          style={{ width: '46%', maxWidth: '640px', zIndex: 1 }}
        >
          {/*
            Rounded V-curve design with top/bottom gaps:
            - Aligned with text container top/bottom padding
            - Flat right edge (goes to viewport right)
            - V-curve on the left edge with rounded corners via SVG clip-path
          */}
          <div
            className="relative w-full h-full"
            style={{
              clipPath: 'url(#hero-shape)',
              overflow: 'hidden',
            }}
          >
            {/* SVG definition for the perfectly rounded pentagon shape */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="hero-shape" clipPathUnits="objectBoundingBox">
                  <path d="M 0.12 0.05 Q 0.15 0 0.2 0 L 1 0 L 1 1 L 0.2 1 Q 0.15 1 0.12 0.95 L 0.02 0.55 Q 0 0.5 0.02 0.45 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Deep gradient fade on left so diagonal blends seamlessly into section bg */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, #2D0F22 0%, rgba(45,15,34,0.85) 12%, rgba(74,18,56,0.45) 25%, rgba(74,18,56,0.12) 40%, transparent 60%)',
              }}
            />
            {/* Subtle brand tint overlay */}
            <div className="absolute inset-0 z-10 bg-[#7A1F5C]/10 pointer-events-none mix-blend-multiply" />
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1280px) 46vw, 640px"
            />
          </div>
        </motion.div>
      )}

      {/* ═══════════════ LEFT — Text Content (constrained, sits above image via z-index) ═══════════════ */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 lg:pt-36 lg:pb-20"
        style={{ zIndex: 2 }}
      >
        {/* Limit left text to ~54% so it doesn't overlap the image */}
        <div className="lg:max-w-[54%]">

          {/* Breadcrumb */}
          {breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 mb-5 flex-wrap"
            >
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-white/50 hover:text-white text-xs font-medium transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/80 text-xs font-semibold">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRight size={12} className="text-white/30 flex-shrink-0" />
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          {/* Badge */}
          {badge && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C2185B]/20 border border-[#C2185B]/40 text-[#D14D72] text-xs font-semibold uppercase tracking-widest mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2185B] animate-pulse" />
              {badge}
            </motion.span>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            {title}
            {titleHighlight && (
              <span className="block text-[#D14D72]">
                {titleHighlight}
              </span>
            )}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-white/65 text-base leading-relaxed mb-8 max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#C2185B] to-[#D14D72] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-[#C2185B]/30 hover:shadow-[#C2185B]/50 hover:scale-105 transition-all duration-300"
            >
              {ctaLabel}
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            {secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                {secondaryLabel}
              </Link>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
