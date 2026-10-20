import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import SectionNavbar from '@/components/SectionNavbar';
import CSRHero from '@/sections/csr/CSRHero';
import AnchorJumpLinks from '@/components/AnchorJumpLinks';
import FAQSection from '@/components/FAQSection';

// Lazy-load sections below the fold
const CSRPillars       = dynamic(() => import('@/sections/csr/CSRPillars'),       { ssr: true });
const CSRSDGAlignment  = dynamic(() => import('@/sections/csr/CSRSDGAlignment'),  { ssr: true });
const CSRTimeline      = dynamic(() => import('@/sections/csr/CSRTimeline'),      { ssr: true });
const CSRImpactMetrics = dynamic(() => import('@/sections/csr/CSRImpactMetrics'), { ssr: true });
const CSRCTA           = dynamic(() => import('@/sections/csr/CSRCTA'),           { ssr: true });

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'CSR Report | People, Planet & Purpose',
  description: 'Explore Chalky Infotech\'s CSR commitments. Discover our actions for environmental sustainability, diversity, community empowerment, and ethical governance.',
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
  url: '/csr',
  path: SEO_IMAGE_CONFIG.csr.path,
  alt: SEO_IMAGE_CONFIG.csr.alt
});

const SectionFallback = () => (
  <div className="w-full h-[400px] bg-[#F5F0E8] animate-pulse flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] animate-spin" />
  </div>
);

const CSR_JUMP_LINKS = [
  { label: 'Our Pillars', id: 'pillars' },
  { label: 'UN SDGs', id: 'sdg' },
  { label: 'Timeline', id: 'timeline' },
  { label: 'Impact Metrics', id: 'metrics' },
  { label: 'FAQ', id: 'faq' }
];

const CSR_FAQS = [
  {
    q: "What are Chalky Infotech's core ESG and CSR values?",
    a: "Chalky Infotech operates under a Triple Bottom Line philosophy: People, Planet, and Purpose. We prioritize green recruitment practices, active carbon-offsetting projects, community tech mentoring initiatives, and strict ethical governance across all recruitment sectors."
  },
  {
    q: "How does Chalky Infotech support Diversity, Equity, and Inclusion (DEI)?",
    a: "We employ blinded resume screening, bias-reduction recruitment training, and diverse candidate sourcing matrices. This ensures all partner companies receive equitable and inclusive talent shortlists, promoting equal representation in tech."
  },
  {
    q: "Is Chalky Infotech committed to environmental sustainability?",
    a: "Yes, we are targeting Net Zero operations. We reduce corporate travel, support paperless hiring pipelines, run zero-waste events, and invest in verified reforestation projects to offset our operational carbon footprint annually."
  },
  {
    q: "How does Chalky Infotech align with the UN Sustainable Development Goals (SDGs)?",
    a: "We actively align our CSR programs with UN SDG 4 (Quality Education), SDG 5 (Gender Equality), SDG 8 (Decent Work & Economic Growth), and SDG 13 (Climate Action) through community grants, tech training, and transparent placement standards."
  }
];

export default function CSRPage() {
  const sections = [
    { label: 'Top',         id: 'hero'     },
    { label: 'Our Pillars', id: 'pillars'  },
    { label: 'UN SDGs',     id: 'sdg'      },
    { label: 'Timeline',    id: 'timeline' },
    { label: 'Impact',      id: 'metrics'  },
    { label: 'FAQ',         id: 'faq'      },
    { label: 'Contact',     id: 'cta'      },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SectionNavbar sections={sections} />

      <section id="hero">
        <CSRHero />
      </section>

      <AnchorJumpLinks links={CSR_JUMP_LINKS} />

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

      <section id="faq">
        <FAQSection items={CSR_FAQS} title="CSR & ESG FAQs" subtitle="Frequently asked questions about Chalky Infotech's environmental footprint, DEI policies, and community action." bgWhite={false} />
      </section>

      <Suspense fallback={<SectionFallback />}>
        <section id="cta">
          <CSRCTA />
        </section>
      </Suspense>
    </div>
  );
}
