import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import AboutHero from '@/sections/about/AboutHero';
import CompanyStory from '@/sections/about/CompanyStory';
import MissionVision from '@/sections/about/MissionVision';
import SectionNavbar from '@/components/SectionNavbar';
import AnchorJumpLinks from '@/components/AnchorJumpLinks';
import FAQSection from '@/components/FAQSection';
import { Suspense } from 'react';

// Lazy load sections below the fold for better initial load performance
const CoreValues = dynamic(() => import('@/sections/about/CoreValues'), { ssr: true });
const RecruitmentPhilosophy = dynamic(() => import('@/sections/about/RecruitmentPhilosophy'), { ssr: true });
const IndustryExpertise = dynamic(() => import('@/sections/about/IndustryExpertise'), { ssr: true });
const GlobalWorkforce = dynamic(() => import('@/sections/about/GlobalWorkforce'), { ssr: true });
const WhyTrustUs = dynamic(() => import('@/sections/about/WhyTrustUs'), { ssr: true });
const CompanyTimeline = dynamic(() => import('@/sections/about/CompanyTimeline'), { ssr: true });
const LeadershipTeam = dynamic(() => import('@/sections/about/LeadershipTeam'), { ssr: true });
const AboutCTA = dynamic(() => import('@/sections/about/AboutCTA'), { ssr: true });
import HumanexShowcase from '@/components/HumanexShowcase';


import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'About Us | Global IT Recruitment',
  description: 'Learn about Chalky Infotech, a leading technology recruitment partner helping global businesses scale through strategic staffing and workforce solutions.',
  keywords: ['Chalky Infotech', 'IT recruitment agency UK', 'global workforce solutions', 'technology recruitment partner', 'strategic hiring', 'digital talent acquisition', 'tech staffing experts'],
  url: '/about',
  path: SEO_IMAGE_CONFIG.about.path,
  alt: SEO_IMAGE_CONFIG.about.alt
});

const SectionFallback = () => (
  <div className="w-full h-[400px] bg-[#F5F0E8] animate-pulse flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] animate-spin" />
  </div>
);

const ABOUT_JUMP_LINKS = [
  { label: 'Our Story', id: 'story' },
  { label: 'Mission & Vision', id: 'mission' },
  { label: 'Core Values', id: 'values' },
  { label: 'Methodology', id: 'philosophy' },
  { label: 'Our Team', id: 'team' },
  { label: 'FAQ', id: 'faq' }
];

const ABOUT_FAQS = [
  {
    q: "Who is Chalky Infotech?",
    a: "Chalky Infotech is a premier technology recruitment and global workforce solutions company. We specialize in sourcing, vetting, and placing exceptional IT and engineering talent in contract, permanent, and remote roles for organizations worldwide."
  },
  {
    q: "What makes Chalky Infotech different from traditional recruitment agencies?",
    a: "Unlike standard agencies, we use a technical, three-layer screening process led by senior engineering advisors. We pre-vet candidates' coding, systems, and communication skills to guarantee quality, reducing hiring time to under 48 hours."
  },
  {
    q: "What sectors and talent areas does Chalky Infotech support?",
    a: "Our core expertise spans Software Development, Cloud Engineering (AWS/Azure/GCP), DevOps, Cybersecurity, Data Analytics, and AI/ML. We also deliver specialist staffing for Healthcare, Finance, Retail, and Manufacturing sectors."
  },
  {
    q: "How does Chalky Infotech approach long-term hiring partnerships?",
    a: "We build deep, embedded relationships. By auditing clients' workflows and matching candidate tenures (averaging 3+ years), we align career goals with enterprise culture. We offer ongoing post-placement support to ensure mutual success."
  }
];

export default function AboutPage() {
  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Our Story', id: 'story' },
    { label: 'Mission & Vision', id: 'mission' },
    { label: 'Core Values', id: 'values' },
    { label: 'Methodology', id: 'philosophy' },
    { label: 'Industry Expertise', id: 'expertise' },
    { label: 'Global Workforce', id: 'workforce' },
    { label: 'HR Platform', id: 'humanex' },
    { label: 'Why Trust Us', id: 'trust' },
    { label: 'Journey', id: 'timeline' },
    { label: 'Our Team', id: 'team' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SectionNavbar sections={sections} />

      <section id="hero">
        <AboutHero />
      </section>

      <AnchorJumpLinks links={ABOUT_JUMP_LINKS} />

      <section id="story">
        <CompanyStory />
      </section>

      <section id="mission">
        <MissionVision />
      </section>

      <Suspense fallback={<SectionFallback />}>
        <section id="values">
          <CoreValues />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="philosophy">
          <RecruitmentPhilosophy />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="expertise">
          <IndustryExpertise />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="workforce">
          <GlobalWorkforce />
        </section>
      </Suspense>

      <section id="humanex">
        <HumanexShowcase />
      </section>

      <Suspense fallback={<SectionFallback />}>
        <section id="trust">
          <WhyTrustUs />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="timeline">
          <CompanyTimeline />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="team">
          <LeadershipTeam />
        </section>
      </Suspense>

      <section id="faq">
        <FAQSection items={ABOUT_FAQS} title="Frequently Asked Questions" subtitle="Get answers to general queries about Chalky Infotech's operations, philosophy, and history." bgWhite={false} />
      </section>

      <Suspense fallback={<SectionFallback />}>
        <section id="cta">
          <AboutCTA />
        </section>
      </Suspense>
    </div>
  );
}
