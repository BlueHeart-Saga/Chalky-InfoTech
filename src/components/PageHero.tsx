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
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-[#7A1F5C]/20 translate-y-1/2 blur-2xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ═══════════════ LEFT — Text Content ═══════════════ */}
          <div className="flex-1 min-w-0">

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
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
            >
              {title}
              {titleHighlight && (
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D14D72] to-[#F5F0E8]">
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

          {/* ═══════════════ RIGHT — Clipped Image ═══════════════ */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="hidden lg:block flex-shrink-0 w-[420px] xl:w-[480px]"
            >
              {/* Polygon clip container */}
              <div
                className="relative w-full h-[260px] xl:h-[290px] overflow-hidden shadow-2xl shadow-black/40"
                style={{
                  clipPath:
                    'polygon(5% 0%, 95% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%)',
                  borderRadius: '4px',
                }}
              >
                {/* Gradient overlay to blend with background on left edge */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#4A1238]/60 via-transparent to-transparent pointer-events-none" />
                {/* Tint overlay */}
                <div className="absolute inset-0 z-10 bg-[#7A1F5C]/20 pointer-events-none mix-blend-multiply" />
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 420px, 480px"
                />
              </div>


            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
