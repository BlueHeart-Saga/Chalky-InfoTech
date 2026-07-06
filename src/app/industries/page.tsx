import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import heroImg from '@/assets/Industries/hero2.png';
import IndustriesOverview from '@/sections/industries/IndustriesOverview';
import FeaturedIndustryExpertise from '@/sections/industries/FeaturedIndustryExpertise';
import IndustryRecruitmentSolutions from '@/sections/industries/IndustryRecruitmentSolutions';
import WorkforceChallenges from '@/sections/industries/WorkforceChallenges';
import IndustryHiringProcess from '@/sections/industries/IndustryHiringProcess';
import WhyBusinessesTrustUs from '@/sections/industries/WhyBusinessesTrustUs';
import GlobalIndustrySupport from '@/sections/industries/GlobalIndustrySupport';
import IndustryMetrics from '@/sections/industries/IndustryMetrics';
import IndustriesFAQ from '@/sections/industries/IndustriesFAQ';
import SectionNavbar from '@/components/SectionNavbar';
import HumanexShowcase from '@/components/HumanexShowcase';
import AnchorJumpLinks from '@/components/AnchorJumpLinks';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Specialist Industry Recruitment & Staffing',
  description: 'Chalky Infotech provides scalable recruitment and staffing solutions across technology, healthcare, finance, retail, manufacturing, and emerging sectors.',
  keywords: ['industry recruitment solutions', 'tech recruitment UK', 'healthcare staffing', 'finance recruiters', 'retail workforce solutions', 'manufacturing recruitment', 'UK industry staffing', 'specialist workforce solutions'],
  url: '/industries',
  path: SEO_IMAGE_CONFIG.industries.path,
  alt: SEO_IMAGE_CONFIG.industries.alt
});

const INDUSTRIES_JUMP_LINKS = [
  { label: 'Overview', id: 'overview' },
  { label: 'Featured Sectors', id: 'featured' },
  { label: 'Staffing Solutions', id: 'solutions' },
  { label: 'Hiring Process', id: 'process' },
  { label: 'Why Trust Us', id: 'trust' },
  { label: 'FAQ', id: 'faq' }
];

export default function IndustriesPage() {
  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Overview', id: 'overview' },
    { label: 'Featured', id: 'featured' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Challenges', id: 'challenges' },
    { label: 'Process', id: 'process' },
    { label: 'Why Trust Us', id: 'trust' },
    { label: 'Global Support', id: 'global' },
    { label: 'HR Platform', id: 'humanex' },
    { label: 'Metrics', id: 'metrics' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SectionNavbar sections={sections} />

      <section id="hero">
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries' },
          ]}
          badge="Industry Recruitment Expertise"
          title="Specialized Workforce"
          titleHighlight="Across Diverse Industries"
          subtitle="Chalky Infotech supports organizations across technology, healthcare, finance, education, retail, manufacturing, and emerging sectors through scalable recruitment and workforce solutions tailored to industry-specific needs."
          ctaLabel="Explore Industries"
          ctaHref="#featured"
          secondaryLabel="Talk To Our Team"
          secondaryHref="/contact"
          imageSrc={heroImg}
          imageAlt="Multi-industry business team meeting"
        />
      </section>

      <AnchorJumpLinks links={INDUSTRIES_JUMP_LINKS} />

      <section id="overview"><IndustriesOverview /></section>
      <section id="featured"><FeaturedIndustryExpertise /></section>
      <section id="solutions"><IndustryRecruitmentSolutions /></section>
      <section id="challenges"><WorkforceChallenges /></section>
      <section id="process"><IndustryHiringProcess /></section>
      <section id="trust"><WhyBusinessesTrustUs /></section>
      <section id="global"><GlobalIndustrySupport /></section>
      <section id="humanex"><HumanexShowcase /></section>
      <section id="metrics"><IndustryMetrics /></section>
      <section id="faq"><IndustriesFAQ /></section>

      <section id="cta">
        <CTASection 
          title="Build Industry-Ready Teams"
          subtitle="Partner with our recruitment specialists to access scalable workforce solutions tailored to your industry and business growth objectives."
          primaryLabel="Contact Our Team"
          primaryHref="/contact"
          secondaryLabel="Explore Services"
          secondaryHref="/services"
        />
      </section>
    </div>
  );
}
