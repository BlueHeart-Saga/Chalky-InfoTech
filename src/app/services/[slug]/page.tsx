import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { SERVICES } from '@/constants';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.label} | Chalky Infotech`,
    description: `${service.desc} Chalky Infotech delivers specialist ${service.label} recruitment with a 98% satisfaction rate and average 18-day hire time.`,
    openGraph: {
      title: `${service.label} | Chalky Infotech`,
      description: service.desc,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const benefits = [
    'Access to 250,000+ pre-screened candidates',
    'Dedicated specialist consultant for your sector',
    'Average 18-day time-to-hire',
    'Full IR35 and compliance support',
    'Post-placement support and retention strategies',
    '98% client satisfaction rate',
  ];

  const process = [
    { title: 'Briefing', desc: 'In-depth discovery of your requirements, culture and goals.' },
    { title: 'Talent Mapping', desc: 'Market research and identification of the strongest candidates.' },
    { title: 'Screening', desc: 'Competency interviews and thorough reference checks.' },
    { title: 'Shortlisting', desc: 'Presentation of a curated shortlist within agreed timelines.' },
    { title: 'Placement', desc: 'Offer management and seamless onboarding support.' },
  ];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.label },
        ]}
        badge="Specialist Service"
        title={service.label}
        subtitle={`${service.desc} Our specialist consultants bring deep sector expertise and a network of 250,000+ pre-screened professionals.`}
        ctaLabel={`Hire for ${service.label}`}
        ctaHref="/contact"
        secondaryLabel="View All Services"
        secondaryHref="/services"
        imageSrc="/hero-service-detail.png"
        imageAlt={`${service.label} recruitment specialist`}
      />

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-5">Service Overview</span>
              <h2 className="text-4xl font-black text-[#1A1A1A] mb-6">
                Expert{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1F5C] to-[#C2185B]">
                  {service.label}
                </span>
              </h2>
              <p className="text-[#8A8A8A] leading-relaxed mb-4">
                Our {service.label} team combines deep industry knowledge with an extensive talent network to deliver candidates who make an immediate and lasting impact.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed">
                We work exclusively in this sector, meaning our consultants speak your language, understand your challenges and know exactly what great talent looks like for your specific roles.
              </p>
            </div>
            <div className="bg-[#F5F0E8] rounded-3xl p-8 border border-[#EFE7DD]">
              <h3 className="font-bold text-[#1A1A1A] text-lg mb-6">What You Get</h3>
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#7A1F5C] mt-0.5 flex-shrink-0" />
                    <span className="text-[#8A8A8A] text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-[#1A1A1A]">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1F5C] to-[#C2185B]">Process</span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            {process.map((p, i) => (
              <div key={p.title} className="flex-1 bg-white rounded-2xl p-6 border border-[#EFE7DD] hover:shadow-lg hover:border-[#7A1F5C]/20 transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A1F5C] to-[#C2185B] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-black text-sm">0{i + 1}</span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{p.title}</h3>
                <p className="text-[#8A8A8A] text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for ${service.label}?`}
        subtitle="Talk to our specialist consultants today and start your hiring journey."
      />
    </>
  );
}
