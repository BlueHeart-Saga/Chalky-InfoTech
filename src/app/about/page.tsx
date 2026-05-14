import type { Metadata } from 'next';
import AboutHero from '@/sections/about/AboutHero';
import CompanyStory from '@/sections/about/CompanyStory';
import MissionVision from '@/sections/about/MissionVision';
import CoreValues from '@/sections/about/CoreValues';
import RecruitmentPhilosophy from '@/sections/about/RecruitmentPhilosophy';
import IndustryExpertise from '@/sections/about/IndustryExpertise';
import GlobalWorkforce from '@/sections/about/GlobalWorkforce';
import WhyTrustUs from '@/sections/about/WhyTrustUs';
import CompanyTimeline from '@/sections/about/CompanyTimeline';
import LeadershipTeam from '@/sections/about/LeadershipTeam';
import AboutCTA from '@/sections/about/AboutCTA';

import SectionNavbar from '@/components/SectionNavbar';

export const metadata: Metadata = {
  title: 'About Chalky Infotech | Global IT Recruitment & Workforce Solutions',
  description: 'Learn about Chalky Infotech, a technology recruitment and workforce solutions partner helping organizations scale through strategic hiring and digital talent acquisition services.',
};

export default function AboutPage() {
  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Our Story', id: 'story' },
    { label: 'Mission & Vision', id: 'mission' },
    { label: 'Core Values', id: 'values' },
    { label: 'Methodology', id: 'philosophy' },
    { label: 'Industry Expertise', id: 'expertise' },
    { label: 'Global Workforce', id: 'workforce' },
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
      
      <section id="values">
        <CoreValues />
      </section>
      
      <section id="philosophy">
        <RecruitmentPhilosophy />
      </section>
      
      <section id="expertise">
        <IndustryExpertise />
      </section>
      
      <section id="workforce">
        <GlobalWorkforce />
      </section>
      
      <section id="trust">
        <WhyTrustUs />
      </section>
      
      <section id="timeline">
        <CompanyTimeline />
      </section>
      
      <section id="team">
        <LeadershipTeam />
      </section>
      
      <section id="cta">
        <AboutCTA />
      </section>
    </div>
  );
}
