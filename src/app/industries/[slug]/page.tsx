import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { INDUSTRIES, INDUSTRIES_DETAILED } from '@/constants';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import IndustryOverview from '@/sections/industry-detail/IndustryOverview';
import IndustryChallenges from '@/sections/industry-detail/IndustryChallenges';
import RolesWeHire from '@/sections/industry-detail/RolesWeHire';
import IndustrySolutions from '@/sections/industry-detail/IndustrySolutions';
import IndustryProcess from '@/sections/industry-detail/IndustryProcess';
import IndustryFAQ from '@/sections/industry-detail/IndustryFAQ';
import RelatedIndustries from '@/sections/industry-detail/RelatedIndustries';
import SectionNavbar from '@/components/SectionNavbar';
import AnchorJumpLinks from '@/components/AnchorJumpLinks';
import FAQSchema from '@/components/FAQSchema';

import { buildPageMetadataWithImage } from '@/lib/seo-images';

const INDUSTRY_IMAGES: Record<string, string> = {
  'it-technology': '/industries/technology.png',
  'telecommunications': '/industries/technology.png',
  'engineering-infrastructure': '/industries/energy.png',
  'media-digital-services': '/industries/media.png',
  'banking-finance': '/industries/finance.png',
  'healthcare-life-sciences': '/industries/healthcare.png',
  'retail-ecommerce': '/industries/retail.png',
  'manufacturing': '/industries/manufacturing.png',
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DETAILED.find((i) => i.slug === slug);
  if (!industry) return { title: 'Industry Not Found' };

  const imagePath = INDUSTRY_IMAGES[slug] || '/hero-industries.png';
  const meta = (industry as any).metaInfo;

  const title = meta?.title || `${industry.label} Recruitment | Chalky Infotech`;
  const description = meta?.description || `Specialized ${industry.label.toLowerCase()} workforce solutions helping organizations scale through strategic recruitment and talent acquisition across UK and India.`;
  const keywordsStr = meta?.keywords || `${industry.label}, recruitment solutions, staffing services, workforce solutions, industry expertise, Chalky Infotech`;
  const keywords = keywordsStr.split(',').map((k: string) => k.trim());

  return buildPageMetadataWithImage({
    title,
    description,
    keywords,
    url: `/industries/${slug}`,
    path: imagePath,
    alt: `${industry.label} - Chalky Infotech Industry Recruiting`
  });
}

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES_DETAILED.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const imagePath = INDUSTRY_IMAGES[slug] || '/hero-industries.png';

  // Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${industry.label} Recruitment Solutions`,
    description: `Specialized workforce solutions for the ${industry.label} sector.`,
    image: `https://chalkyinfo.com${imagePath}`,
    provider: {
      '@type': 'Organization',
      name: 'Chalky Infotech',
      url: 'https://chalkyinfo.com',
    },
    areaServed: ['UK', 'India'],
  };

  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Overview', id: 'overview' },
    { label: 'Challenges', id: 'challenges' },
    { label: 'Roles', id: 'roles' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Process', id: 'process' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Related', id: 'related' }
  ];

  const jumpLinks = [
    { label: 'Overview', id: 'overview' },
    { label: 'Challenges', id: 'challenges' },
    { label: 'Roles', id: 'roles' },
    { label: 'Process', id: 'process' },
    { label: 'FAQ', id: 'faq' }
  ];

  const schemaFaqs = industry.faqs.map(faq => ({
    question: faq.q,
    answer: faq.a
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQSchema items={schemaFaqs} />
      
      <SectionNavbar sections={sections} />

      <section id="hero">
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: industry.label },
          ]}
          badge={industry.hero.badge}
          title={industry.hero.title}
          subtitle={industry.hero.subtitle}
          ctaLabel="Talk to an Industry Expert"
          ctaHref="/contact"
          secondaryLabel="View Services"
          secondaryHref="/services"
          imageSrc={industry.hero.image}
          imageAlt={`${industry.label} recruitment specialist`}
        />
      </section>

      <AnchorJumpLinks links={jumpLinks} />

      <section id="overview">
        <IndustryOverview 
          title={industry.overview.title} 
          description={industry.overview.description}
          industryLabel={industry.label}
          capabilities={industry.capabilities}
        />
      </section>
      
      <section id="challenges"><IndustryChallenges challenges={industry.challenges} /></section>
      <section id="roles"><RolesWeHire industryLabel={industry.label} roles={industry.roles} /></section>
      <section id="solutions"><IndustrySolutions services={industry.services} /></section>
      <section id="process"><IndustryProcess /></section>
      <section id="faq"><IndustryFAQ industryLabel={industry.label} faqs={industry.faqs} /></section>
      <section id="related"><RelatedIndustries currentSlug={industry.slug} /></section>

      <section id="cta">
        <CTASection 
          title={`Build Your ${industry.label} Team`}
          subtitle={`Partner with our ${industry.label.toLowerCase()} specialists to access scalable workforce solutions and exceptional talent tailored to your sector goals.`}
          primaryLabel="Contact Our Team"
          primaryHref="/contact"
          secondaryLabel="Talk To Our Team"
          secondaryHref="/contact"
        />
      </section>
    </div>
  );
}
