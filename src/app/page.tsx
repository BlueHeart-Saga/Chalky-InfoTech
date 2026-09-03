import { Suspense } from 'react';
import type { Metadata } from 'next';
import SectionNavbar from '@/components/SectionNavbar';
import Hero from '@/sections/home/Hero';
import OurCapabilities from '@/sections/home/OurCapabilities';
import TrustedCompanies from '@/sections/home/TrustedCompanies';
import CompanyOverview from '@/sections/home/CompanyOverview';
import ServicesSection from '@/sections/home/ServicesSection';
import IndustriesSection from '@/sections/home/IndustriesSection';
import WhyChooseUs from '@/sections/home/WhyChooseUs';
import ProcessTimeline from '@/sections/home/ProcessTimeline';
import MetricsAchievements from '@/sections/home/MetricsAchievements';
import Testimonials from '@/sections/home/Testimonials';
import LatestInsights from '@/sections/home/LatestInsights';
import GlobalPresence from '@/sections/home/GlobalPresence';
import CTASection from '@/components/CTASection';
import HumanexShowcase from '@/components/HumanexShowcase';
import CSRSection from '@/sections/home/CSRSection';
import FAQSection from '@/components/FAQSection';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Chalky Infotech | IT Recruitment & Workforce Solutions',
  description: 'Chalky Infotech is a specialist technology recruitment and workforce partner. We connect top talent with global businesses across cloud, AI, and DevOps.',
  keywords: ['IT recruitment UK', 'technology recruitment partner', 'digital talent acquisition', 'cloud recruitment', 'AI staffing', 'DevOps hiring', 'finance tech recruitment', 'premium IT workforce solutions'],
  url: '/',
  path: SEO_IMAGE_CONFIG.home.path,
  alt: SEO_IMAGE_CONFIG.home.alt
});

const HOME_FAQS = [
  {
    q: "What recruitment and workforce solutions does Chalky Infotech provide?",
    a: "Chalky Infotech offers comprehensive technology recruitment services, including contract staffing, permanent recruitment, executive search, temporary staffing, on-site embedded recruiter support, and managed services (MSP). We help global businesses scale by matching them with pre-vetted professionals."
  },
  {
    q: "Which industries and job functions does Chalky Infotech support?",
    a: "We specialize in technology recruitment (including software development, cloud computing, cybersecurity, and data science), healthcare staffing, financial services hiring, retail, education, and manufacturing recruitment. Our global network connects employers with sector-specific experts."
  },
  {
    q: "How does Chalky Infotech help businesses hire faster?",
    a: "We utilize a pre-screened talent pool and a three-layer vetting process to match candidates with open roles in under 48 hours for contract staffing. This eliminates hiring bottlenecks, reduces time-to-hire, and ensures high-tenure placements."
  },
  {
    q: "Why choose Chalky Infotech for global recruitment and remote hiring?",
    a: "With registered entities and operations in both the UK and India, we provide cross-border compliance navigation, Employer of Record (EOR) payroll services, and remote-first candidate evaluation. We enable you to hire borderless engineering teams compliantly."
  },
  {
    q: "How can candidates find jobs and apply through Chalky Infotech?",
    a: "Candidates can search our active vacancies page, select roles aligned with their expertise, and apply directly. Our recruitment specialists provide resume feedback, interview preparation, and compliance vetting to guide you into strategic career moves."
  }
];

export default function HomePage() {
  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'Services', id: 'services' },
    { label: 'Industries', id: 'industries' },
    { label: 'Process', id: 'process' },
    { label: 'HR Platform', id: 'humanex' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Clients', id: 'clients' },
    { label: 'CSR', id: 'csr' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <SectionNavbar sections={sections} />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <CompanyOverview />
      </section>

      <section id="capabilities">
        <OurCapabilities />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="industries">
        <IndustriesSection />
      </section>

      <section id="why-us">
        <WhyChooseUs />
      </section>

      <section id="process">
        <ProcessTimeline />
      </section>
       <section id="humanex">
        <HumanexShowcase />
      </section>

      <section id="metrics">
        <MetricsAchievements />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="clients">
        <TrustedCompanies />
      </section>

      <section id="insights">
        <Suspense fallback={<div className="py-24 bg-[#F5F0E8] text-center text-[#8A8A8A]">Loading insights...</div>}>
          <LatestInsights />
        </Suspense>
      </section>

      <section id="csr">
        <CSRSection />
      </section>

      <section id="global">
        <GlobalPresence />
      </section>

      <section id="faq">
        <FAQSection items={HOME_FAQS} title="Frequently Asked Questions" subtitle="Learn how Chalky Infotech matches top-tier tech talent with global corporate partners." bgWhite={true} />
      </section>

      <section id="contact" >
        <CTASection />
      </section>
    </main>
  );
}
