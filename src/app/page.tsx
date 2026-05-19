import type { Metadata } from 'next';
import SectionNavbar from '@/components/SectionNavbar';
import Hero from '@/sections/home/Hero';
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

export const metadata: Metadata = {
  title: 'Chalky Infotech | Premium IT Recruitment & Workforce Solutions in the UK',
  description: 'Chalky Infotech is a specialist technology and digital recruitment partner in the UK. We connect exceptional talent with world-class organisations across cloud, AI, DevOps, and finance.',
  keywords: ['IT recruitment UK', 'technology recruitment partner', 'digital talent acquisition', 'cloud recruitment', 'AI staffing', 'DevOps hiring', 'finance tech recruitment', 'premium IT workforce solutions'],
  openGraph: {
    title: 'Chalky Infotech | Premium IT Recruitment UK',
    description: 'Specialist technology and digital recruitment partner connecting exceptional talent with world-class organisations.',
    locale: 'en_GB',
  },
  other: {
    'geo.region': 'GB',
    'geo.placename': 'United Kingdom',
    'language': 'en-GB'
  }
};

export default function HomePage() {
  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Industries', id: 'industries' },
    { label: 'Process', id: 'process' },
    { label: 'HR Platform', id: 'humanex' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <SectionNavbar sections={sections} />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="clients">
        <TrustedCompanies />
      </section>

      <section id="about">
        <CompanyOverview />
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

      <section id="insights">
        <LatestInsights />
      </section>

      <section id="global">
        <GlobalPresence />
      </section>

      <section id="contact" >
        <CTASection />
      </section>
    </main>
  );
}
