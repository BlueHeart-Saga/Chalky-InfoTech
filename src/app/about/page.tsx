import type { Metadata } from 'next';
import AboutHero from '@/sections/about/AboutHero';
import CompanyStory from '@/sections/about/CompanyStory';
import MissionVision from '@/sections/about/MissionVision';
import CoreValues from '@/sections/about/CoreValues';
import RecruitmentPhilosophy from '@/sections/about/RecruitmentPhilosophy';
import TechnologyExpertise from '@/sections/about/TechnologyExpertise';
import GlobalWorkforce from '@/sections/about/GlobalWorkforce';
import WhyTrustUs from '@/sections/about/WhyTrustUs';
import CompanyTimeline from '@/sections/about/CompanyTimeline';
import LeadershipTeam from '@/sections/about/LeadershipTeam';
import AboutCTA from '@/sections/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Chalky Infotech | Global IT Recruitment & Workforce Solutions',
  description: 'Learn about Chalky Infotech, a technology recruitment and workforce solutions partner helping organizations scale through strategic hiring and digital talent acquisition services.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <RecruitmentPhilosophy />
      <TechnologyExpertise />
      <GlobalWorkforce />
      <WhyTrustUs />
      <CompanyTimeline />
      <LeadershipTeam />
      <AboutCTA />
    </div>
  );
}
