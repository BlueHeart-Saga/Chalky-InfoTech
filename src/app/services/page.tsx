import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ServicesOverview from '@/sections/services/ServicesOverview';
import CoreRecruitmentSolutions from '@/sections/services/CoreRecruitmentSolutions';
import WorkforceModels from '@/sections/services/WorkforceModels';
import IndustryExpertise from '@/sections/services/IndustryExpertise';
import RecruitmentProcess from '@/sections/services/RecruitmentProcess';
import WhyChooseServices from '@/sections/services/WhyChooseServices';
import SpecializedHiring from '@/sections/services/SpecializedHiring';
import GlobalWorkforceSupport from '@/sections/services/GlobalWorkforceSupport';
import ServiceMetrics from '@/sections/services/ServiceMetrics';
import ClientSuccessApproach from '@/sections/services/ClientSuccessApproach';
import ServicesFAQ from '@/sections/services/ServicesFAQ';
import SearchMethodology from '@/sections/services/SearchMethodology';
import SectionNavbar from '@/components/SectionNavbar';
import HumanexShowcase from '@/components/HumanexShowcase';

export const metadata: Metadata = {
  title: 'Specialist Recruitment & Workforce Solutions in the UK | Chalky Infotech',
  description: 'Looking for flexible recruitment solutions? From contract staffing to permanent IT recruitment, Chalky Infotech provides scalable workforce support tailored to your needs.',
  keywords: ['recruitment solutions UK', 'workforce solutions UK', 'IT staffing services', 'specialist recruitment agency', 'contract staffing UK', 'permanent recruitment UK', 'on-site hiring support', 'managed workforce solutions'],
  openGraph: {
    title: 'Specialist Recruitment & Workforce Solutions UK',
    description: 'From contract staffing to permanent IT recruitment, Chalky Infotech provides scalable workforce support tailored to your needs.',
    locale: 'en_GB',
  },
  other: {
    'geo.region': 'GB',
    'geo.placename': 'United Kingdom',
    'language': 'en-GB'
  }
};

export default function ServicesPage() {
  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Overview', id: 'overview' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Success Approach', id: 'success' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Process', id: 'process' },
    { label: 'Methodology', id: 'methodology' },
    { label: 'Why Us', id: 'why-choose' },
    { label: 'Specialized', id: 'specialized' },
    { label: 'Workforce', id: 'global' },
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
            { label: 'Services' },
          ]}
          badge="What We Do"
          title="Specialist Recruitment"
          titleHighlight="For Every Sector"
          subtitle="13 dedicated service pillars. One trusted global partner. Delivering exceptional talent across the most competitive industries with speed, precision, and integrity."
          ctaLabel="Start Hiring Today"
          ctaHref="/contact"
          secondaryLabel="Browse Jobs"
          secondaryHref="/jobs"
          imageSrc="/hero-services.png"
          imageAlt="Chalky Infotech specialist consultants"
        />
      </section>

      <section id="overview"><ServicesOverview /></section>
      <section id="solutions"><CoreRecruitmentSolutions /></section>
      <section id="success"><ClientSuccessApproach /></section>
      <section id="expertise"><IndustryExpertise /></section>
      <section id="process"><RecruitmentProcess /></section>
      <section id="methodology"><SearchMethodology /></section>
      <section id="why-choose"><WhyChooseServices /></section>
      <section id="specialized"><SpecializedHiring /></section>
      <section id="global"><GlobalWorkforceSupport /></section>
      <section id="humanex"><HumanexShowcase /></section>
      <section id="metrics"><ServiceMetrics /></section>
      <section id="faq"><ServicesFAQ /></section>

      <section id="cta">
        <CTASection 
          title="Build High-Performance Teams"
          subtitle="Partner with our recruitment specialists to access scalable workforce solutions and exceptional talent across diverse industries."
          primaryLabel="Hire Talent"
          primaryHref="/contact"
          secondaryLabel="Talk To Our Team"
          secondaryHref="/contact"
        />
      </section>
    </div>
  );
}
