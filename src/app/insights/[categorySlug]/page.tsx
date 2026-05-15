import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import InsightsGrid from '@/sections/insights/InsightsGrid';
import SectionNavbar from '@/components/SectionNavbar';

type Props = {
  params: Promise<{ categorySlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  
  // Format slug to readable title
  const title = categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} | Chalky Infotech Insights`,
    description: `Explore our latest insights and thought leadership on ${title}.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = await params;

  const title = categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Articles', id: 'grid' },
    { label: 'Connect', id: 'cta' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SectionNavbar sections={sections} />

      <section id="hero">
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Insights', href: '/insights' },
            { label: title },
          ]}
          badge="Category"
          title={title}
          titleHighlight="Insights"
          subtitle={`Dive deep into our latest articles, case studies, and expert perspectives on ${title}.`}
          ctaLabel="Read Articles"
          ctaHref="#grid"
          secondaryLabel="View All Categories"
          secondaryHref="/insights"
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
          imageAlt={`${title} Insights`}
        />
      </section>

      <section id="grid">
        <div className="bg-[#F8F5F0] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">{title} Articles</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Expert analysis and data-driven perspectives tailored to your interests.
            </p>
          </div>
        </div>
        <InsightsGrid categorySlug={categorySlug} />
      </section>

      <section id="cta">
        <CTASection 
          title="Stay Ahead of the Curve"
          subtitle="Get our latest insights and sector trends delivered to your inbox every month."
          primaryLabel="Subscribe Now"
          primaryHref="/contact"
          secondaryLabel="Talk to an Expert"
          secondaryHref="/contact"
        />
      </section>
    </div>
  );
}
