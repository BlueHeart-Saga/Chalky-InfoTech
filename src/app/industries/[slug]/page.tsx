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

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DETAILED.find((i) => i.slug === slug);
  if (!industry) return { title: 'Industry Not Found' };

  if ((industry as any).metaInfo) {
    const meta = (industry as any).metaInfo;
    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      openGraph: {
        title: meta.ogTitle,
        description: meta.ogDescription,
        locale: 'en_GB',
      },
      other: {
        'geo.region': 'GB',
        'geo.placename': 'United Kingdom',
        'language': 'en-GB'
      }
    };
  }

  return {
    title: `${industry.label} Recruitment & Workforce Solutions | Chalky Infotech`,
    description: `Specialized ${industry.label.toLowerCase()} workforce solutions helping organizations scale through strategic recruitment and talent acquisition across UK and India.`,
    keywords: [industry.label, 'recruitment solutions', 'staffing services', 'workforce solutions', 'industry expertise', 'Chalky Infotech'],
  };
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

  // Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${industry.label} Recruitment Solutions`,
    description: `Specialized workforce solutions for the ${industry.label} sector.`,
    provider: {
      '@type': 'Organization',
      name: 'Chalky Infotech',
      url: 'https://chalkyinfotech.com',
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

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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
