import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
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

export const metadata: Metadata = {
  title: 'Specialized Industry Recruitment & Workforce Solutions | Chalky Infotech',
  description:
    'Chalky Infotech supports organizations across technology, healthcare, finance, education, retail, and manufacturing through scalable recruitment solutions tailored to industry-specific needs.',
};

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
          imageSrc="/hero-industries.png"
          imageAlt="Multi-industry business team meeting"
        />
      </section>

      <section id="overview"><IndustriesOverview /></section>
      <section id="featured"><FeaturedIndustryExpertise /></section>
      <section id="solutions"><IndustryRecruitmentSolutions /></section>
      <section id="challenges"><WorkforceChallenges /></section>
      <section id="process"><IndustryHiringProcess /></section>
      <section id="trust"><WhyBusinessesTrustUs /></section>
      <section id="global"><GlobalIndustrySupport /></section>
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
