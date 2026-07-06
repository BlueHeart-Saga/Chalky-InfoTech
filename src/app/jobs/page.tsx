import type { Metadata } from 'next';
import JobsHero from '@/sections/jobs/JobsHero';
import JobBoard from '@/sections/jobs/JobBoard';
import JobsCVUpload from '@/sections/jobs/JobsCVUpload';
import { BrowseIndustries, EmploymentTypes } from '@/sections/jobs/BrowseSections';
import { WhyWorkWithChalky, CandidateJourney, CareerResources } from '@/sections/jobs/CandidateSections';
import { JobAlerts } from '@/sections/jobs/JobsExtras';
import GlobalPresence from '@/sections/home/GlobalPresence';
import CTASection from '@/components/CTASection';
import AnchorJumpLinks from '@/components/AnchorJumpLinks';
import FAQSection from '@/components/FAQSection';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Find Jobs & Career Opportunities',
  description: 'Explore opportunities across technology, healthcare, finance, education, retail, and emerging industries through Chalky Infotech.',
  keywords: ['jobs', 'career opportunities', 'technology jobs', 'healthcare jobs', 'contract jobs', 'remote jobs', 'recruitment agency jobs'],
  url: '/jobs',
  path: SEO_IMAGE_CONFIG.jobs.path,
  alt: SEO_IMAGE_CONFIG.jobs.alt
});

const JOBS_JUMP_LINKS = [
  { label: 'Job Board', id: 'board' },
  { label: 'Browse Industries', id: 'industries' },
  { label: 'Upload CV', id: 'cv-upload' },
  { label: 'Candidate Journey', id: 'journey' },
  { label: 'FAQs', id: 'faq' }
];

const JOBS_FAQS = [
  {
    q: 'How can I search and apply for the latest IT jobs on Chalky Infotech?',
    a: 'You can browse our current vacancies directly on our Jobs page. Once you find a suitable IT role, simply click "Apply" and upload your CV. Our recruitment consultants will then review your profile for technical and cultural alignment.'
  },
  {
    q: 'Can I set up custom job alerts for specific cloud and engineering roles?',
    a: 'Yes! You can subscribe to our Job Alerts service by providing your email and role preferences. We will then notify you immediately whenever a new cloud, DevOps, or engineering position matching your criteria is posted.'
  },
  {
    q: 'What is the benefit of joining the Chalky Infotech talent pool?',
    a: 'Joining our talent pool ensures that our specialized recruiters have your profile on hand for upcoming opportunities that may not yet be public. This proactive approach gives you a competitive edge in high-demand technology sectors.'
  },
  {
    q: 'Do you provide career opportunities for remote software engineering roles?',
    a: 'Absolutely. We partner with global organizations that offer a wide range of remote-first and hybrid software engineering roles. You can easily filter our job board specifically for "Remote" positions to find borderless opportunities.'
  },
  {
    q: 'How should I optimize my resume for your technical recruitment process?',
    a: 'We recommend highlighting your technical stack, key project contributions, and certifications clearly. Using standard formats (PDF or Word) and ensuring your most relevant skills are at the top helps our automated mapping tools and recruiters identify you faster.'
  },
  {
    q: 'Can I apply for multiple tech roles simultaneously through the portal?',
    a: 'Yes, you can apply for multiple roles that match your expertise. Our system will track your applications, and our consultants will coordinate with you to ensure you are considered for the best-fit opportunity across all your interests.'
  },
  {
    q: 'What interview preparation support do you offer for IT candidates?',
    a: 'We provide comprehensive interview coaching, including technical brief reviews, company culture insights, and mock interview sessions. Our goal is to ensure you are fully prepared to showcase your technical value to prospective employers.'
  },
  {
    q: 'How often is the Chalky Infotech job board updated with new roles?',
    a: 'Our job board is updated in real-time. As soon as a client releases a new requirement or a digital transformation project begins, the corresponding roles are immediately pushed to our live recruitment portal.'
  },
  {
    q: 'Does Chalky Infotech support international placements for global tech talent?',
    a: 'Yes, we specialize in international talent acquisition. We support candidates globally in finding roles across the UK, India, and other major tech hubs, providing guidance on Right To Work and local employment standards.'
  }
];

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JobsHero />
      
      <AnchorJumpLinks links={JOBS_JUMP_LINKS} />

      <div id="board">
        <JobBoard />
      </div>
      
      <div id="industries">
        <BrowseIndustries />
      </div>
      
      <EmploymentTypes />
      
      <div id="cv-upload">
        <JobsCVUpload />
      </div>
      
      <WhyWorkWithChalky />
      
      <div id="journey">
        <CandidateJourney />
      </div>
      
      <CareerResources />
      <JobAlerts />
      <GlobalPresence />
      
      <div id="faq">
        <FAQSection items={JOBS_FAQS} title="Candidate FAQs" subtitle="Get quick answers to common candidate questions about finding jobs through Chalky Infotech." bgWhite={true} />
      </div>
      
      <CTASection 
        title="Start Your Next Career Move With Chalky Infotech"
        subtitle="Partner with our expert consultants to find the role that perfectly matches your skills, ambitions, and lifestyle."
        primaryLabel="Explore Opportunities"
        primaryHref="#board"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
      />
    </div>
  );
}
