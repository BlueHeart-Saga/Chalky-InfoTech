import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES, SERVICES_DETAILED } from '@/constants';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import ServiceOverview from '@/sections/service-detail/ServiceOverview';
import ServiceBenefits from '@/sections/service-detail/ServiceBenefits';
import IndustrySupport from '@/sections/service-detail/IndustrySupport';
import ServiceProcess from '@/sections/service-detail/ServiceProcess';
import WhyChooseService from '@/sections/service-detail/WhyChooseService';
import ServiceFAQ from '@/sections/service-detail/ServiceFAQ';
import RelatedServices from '@/sections/service-detail/RelatedServices';
import SectionNavbar from '@/components/SectionNavbar';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DETAILED.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.label} Solutions | Chalky Infotech UK & India`,
    description: `Professional ${service.label.toLowerCase()} services helping organizations scale through strategic workforce solutions and specialized talent acquisition across multiple industries.`,
    keywords: [service.label, 'recruitment solutions', 'staffing services', 'workforce solutions', 'talent acquisition', 'Chalky Infotech'],
  };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DETAILED.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.label,
    description: service.desc,
    provider: {
      '@type': 'Organization',
      name: 'Chalky Infotech',
      url: 'https://chalkyinfotech.com',
    },
    areaServed: ['UK', 'India'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.label,
      itemListElement: service.benefits.map((benefit, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: benefit
        }
      }))
    }
  };

  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Overview', id: 'overview' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'Industries', id: 'industries' },
    { label: 'Process', id: 'process' },
    { label: 'Why Us', id: 'why-choose' },
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
            { label: 'Services', href: '/services' },
            { label: service.label },
          ]}
          badge={service.hero.badge}
          title={service.hero.title}
          subtitle={service.hero.subtitle}
          ctaLabel="Talk to a Specialist"
          ctaHref="/contact"
          secondaryLabel="Explore Jobs"
          secondaryHref="/jobs"
          imageSrc={service.hero.image}
          imageAlt={`${service.label} expertise`}
        />
      </section>

      <section id="overview"><ServiceOverview title={service.overview.title} description={service.overview.description} /></section>
      <section id="benefits"><ServiceBenefits benefits={service.benefits} /></section>
      <section id="industries"><IndustrySupport industries={service.industries} /></section>
      <section id="process"><ServiceProcess steps={service.process} /></section>
      <section id="why-choose"><WhyChooseService serviceLabel={service.label} features={service.features} /></section>
      <section id="faq"><ServiceFAQ faqs={service.faqs} /></section>
      <section id="related"><RelatedServices currentSlug={service.slug} /></section>

      <section id="cta">
        <CTASection 
          title={`Scale Your Team with ${service.label}`}
          subtitle={`Partner with our ${service.label.toLowerCase()} specialists to access scalable workforce solutions and exceptional talent tailored to your project needs.`}
          primaryLabel="Hire Talent"
          primaryHref="/contact"
          secondaryLabel="Talk To Our Team"
          secondaryHref="/contact"
        />
      </section>
    </div>
  );
}
