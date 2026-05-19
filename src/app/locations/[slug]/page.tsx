import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LOCATIONS } from '@/constants/locationsData';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `${location.service} in ${location.city} | Chalky Infotech`,
    description: location.description,
    keywords: [location.service, location.city, 'recruitment', 'staffing', 'Chalky Infotech'],
  };
}

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  // LocalBusiness schema could be added here if there was a physical office,
  // but we can add Service schema targeted at the area.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${location.service} in ${location.city}`,
    description: location.description,
    provider: {
      '@type': 'Organization',
      name: 'Chalky Infotech',
      url: 'https://chalkyinfo.com',
    },
    areaServed: {
      '@type': 'City',
      name: location.city
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section id="hero">
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Locations' },
            { label: location.city },
          ]}
          badge="Local Expertise"
          title={`${location.service} in`}
          titleHighlight={location.city}
          subtitle={location.description}
          ctaLabel="Hire Local Talent"
          ctaHref="/contact"
          imageSrc="/hero-services.png"
          imageAlt={`${location.service} in ${location.city}`}
        />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
            Why choose Chalky Infotech in {location.city}?
          </h2>
          <p className="text-[#8A8A8A] text-lg leading-relaxed mb-8">
            Our deep understanding of the local market in {location.city} ensures that we connect you with the right professionals faster. We leverage our expansive network and data-driven recruitment strategies to overcome regional hiring challenges and deliver candidates who align perfectly with your technical requirements and company culture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
            <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EFE7DD]">
              <h3 className="text-xl font-bold text-[#7A1F5C] mb-3">Local Market Insights</h3>
              <p className="text-[#8A8A8A]">We continuously analyze compensation trends and talent availability specific to {location.city}.</p>
            </div>
            <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EFE7DD]">
              <h3 className="text-xl font-bold text-[#7A1F5C] mb-3">Pre-Vetted Networks</h3>
              <p className="text-[#8A8A8A]">Access our exclusive pool of passive and active candidates who are ready to make their next career move.</p>
            </div>
            <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EFE7DD]">
              <h3 className="text-xl font-bold text-[#7A1F5C] mb-3">Compliance Ready</h3>
              <p className="text-[#8A8A8A]">We ensure all our placements comply fully with local labor laws and employment regulations.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta">
        <CTASection 
          title={`Ready to scale your team in ${location.city}?`}
          subtitle="Speak with our regional recruitment experts today to discuss your hiring goals."
          primaryLabel="Contact Us"
          primaryHref="/contact"
        />
      </section>
    </div>
  );
}
