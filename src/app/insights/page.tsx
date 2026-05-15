import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import InsightsGrid from '@/sections/insights/InsightsGrid';
import SectionNavbar from '@/components/SectionNavbar';

export const metadata: Metadata = {
  title: 'Industry Insights & Recruitment Trends | Chalky Infotech',
  description:
    'Stay updated with the latest trends in global recruitment, AI integration, healthcare workforce solutions, and fintech talent strategies from the experts at Chalky Infotech.',
};

export default function InsightsPage() {
  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'All Insights', id: 'grid' },
    { label: 'Connect', id: 'cta' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SectionNavbar sections={sections} />

      <section id="hero">
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Insights' },
          ]}
          badge="Latest Thinking"
          title="Industry"
          titleHighlight="Insights & Trends"
          subtitle="Expert analysis and data-driven perspectives on the evolving landscape of global recruitment, specialized sector growth, and the future of work."
          ctaLabel="View Latest Insights"
          ctaHref="#grid"
          secondaryLabel="Subscribe Now"
          secondaryHref="#cta"
          imageSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop"
          imageAlt="Expert researcher analyzing recruitment data"
        />
      </section>

      <section id="grid">
        <div className="bg-[#F8F5F0] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Explore All Insights</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Deep dives into the sectors we serve, helping you navigate the complexities of talent acquisition and organizational growth.
            </p>
          </div>
        </div>
        <InsightsGrid />
      </section>

      <section id="cta">
        <CTASection 
          title="Get Insights Delivered"
          subtitle="Join 10,000+ enterprise leaders receiving our monthly briefing on recruitment trends, sector analysis, and talent strategies."
          primaryLabel="Subscribe to Newsletter"
          primaryHref="/contact"
          secondaryLabel="Talk to an Expert"
          secondaryHref="/contact"
        />
      </section>
    </div>
  );
}
