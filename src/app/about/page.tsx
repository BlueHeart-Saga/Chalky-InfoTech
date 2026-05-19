import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import AboutHero from '@/sections/about/AboutHero';
import CompanyStory from '@/sections/about/CompanyStory';
import MissionVision from '@/sections/about/MissionVision';
import SectionNavbar from '@/components/SectionNavbar';
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


export const metadata: Metadata = {
  title: 'About Chalky Infotech | Global IT Recruitment & Workforce Solutions in the UK',
  description: 'Learn about Chalky Infotech, a leading technology recruitment and workforce solutions partner helping organizations scale through strategic hiring and digital talent acquisition services in the UK.',
  keywords: ['Chalky Infotech', 'IT recruitment agency UK', 'global workforce solutions', 'technology recruitment partner', 'strategic hiring', 'digital talent acquisition', 'tech staffing experts'],
  openGraph: {
    title: 'About Chalky Infotech | Global IT Recruitment UK',
    description: 'A leading technology recruitment and workforce solutions partner helping organizations scale through strategic hiring.',
    locale: 'en_GB',
  },
  other: {
    'geo.region': 'GB',
    'geo.placename': 'United Kingdom',
    'language': 'en-GB'
  }
};

const SectionFallback = () => (
  <div className="w-full h-[400px] bg-[#F5F0E8] animate-pulse flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] animate-spin" />
  </div>
);

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
    { label: 'Our Team', id: 'team' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SectionNavbar sections={sections} />
      
      <section id="hero">
        <AboutHero />
      </section>
      
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
      
      <Suspense fallback={<SectionFallback />}>
        <section id="cta">
          <AboutCTA />
        </section>
      </Suspense>
    </div>
  );
}
