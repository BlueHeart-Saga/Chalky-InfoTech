import type { Metadata } from 'next';
import JobsHero from '@/sections/jobs/JobsHero';
import JobBoard from '@/sections/jobs/JobBoard';
import JobsCVUpload from '@/sections/jobs/JobsCVUpload';
import { BrowseIndustries, EmploymentTypes } from '@/sections/jobs/BrowseSections';
import { WhyWorkWithChalky, CandidateJourney, CareerResources } from '@/sections/jobs/CandidateSections';
import { JobAlerts, JobsFAQ } from '@/sections/jobs/JobsExtras';
import GlobalPresence from '@/sections/home/GlobalPresence';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Find Jobs & Career Opportunities | Chalky Infotech',
  description: 'Explore opportunities across technology, healthcare, finance, education, retail, and emerging industries through Chalky Infotech.',
  keywords: ['jobs', 'career opportunities', 'technology jobs', 'healthcare jobs', 'contract jobs', 'remote jobs', 'recruitment agency jobs'],
};

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JobsHero />
      <JobBoard />
      
      <BrowseIndustries />
      <EmploymentTypes />
      <JobsCVUpload />
      <WhyWorkWithChalky />
      <CandidateJourney />
      <CareerResources />
      <JobAlerts />
      <GlobalPresence />
      <JobsFAQ />
      
      <CTASection 
        title="Start Your Next Career Move With Chalky Infotech"
        subtitle="Partner with our expert consultants to find the role that perfectly matches your skills, ambitions, and lifestyle."
        primaryLabel="Explore Opportunities"
        primaryHref="#search"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
      />
    </div>
  );
}
