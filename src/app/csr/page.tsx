import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import SectionNavbar from '@/components/SectionNavbar';
import CSRHero from '@/sections/csr/CSRHero';

// Lazy-load sections below the fold
const CSRPillars       = dynamic(() => import('@/sections/csr/CSRPillars'),       { ssr: true });
const CSRSDGAlignment  = dynamic(() => import('@/sections/csr/CSRSDGAlignment'),  { ssr: true });
const CSRTimeline      = dynamic(() => import('@/sections/csr/CSRTimeline'),      { ssr: true });
const CSRImpactMetrics = dynamic(() => import('@/sections/csr/CSRImpactMetrics'), { ssr: true });
const CSRCTA           = dynamic(() => import('@/sections/csr/CSRCTA'),           { ssr: true });

export const metadata: Metadata = {
  title: 'CSR Report | Chalky Infotech – People, Planet & Purpose',
  description:
    'Explore Chalky Infotech\'s full Corporate Social Responsibility report. Our commitments to environmental sustainability, diversity & inclusion, community empowerment, and ethical governance.',
  keywords: [
    'Chalky Infotech CSR',
    'corporate social responsibility recruitment',
    'sustainable recruitment UK',
    'diversity inclusion hiring',
    'ethical recruitment agency UK',
    'net zero recruitment',
    'UN SDG aligned business UK',
    'ESG staffing agency',
  ],
  openGraph: {
    title: 'CSR Report | Chalky Infotech – People, Planet & Purpose',
    description:
      'Our full CSR commitments: environmental stewardship, inclusive hiring, community empowerment and ethical governance.',
    locale: 'en_GB',
  },
  other: {
    'geo.region': 'GB',
    'geo.placename': 'United Kingdom',
    'language': 'en-GB',
  },
};

const SectionFallback = () => (
  <div className="w-full h-[400px] bg-[#F5F0E8] animate-pulse flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] animate-spin" />
  </div>
);

export default function CSRPage() {
  const sections = [
    { label: 'Top',         id: 'hero'     },
    { label: 'Our Pillars', id: 'pillars'  },
    { label: 'UN SDGs',     id: 'sdg'      },
    { label: 'Timeline',    id: 'timeline' },
    { label: 'Impact',      id: 'metrics'  },
    { label: 'Contact',     id: 'cta'      },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SectionNavbar sections={sections} />

      <section id="hero">
        <CSRHero />
      </section>

      <Suspense fallback={<SectionFallback />}>
        <section id="pillars">
          <CSRPillars />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="sdg">
          <CSRSDGAlignment />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="timeline">
          <CSRTimeline />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="metrics">
          <CSRImpactMetrics />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="cta">
          <CSRCTA />
        </section>
      </Suspense>
    </div>
  );
}
