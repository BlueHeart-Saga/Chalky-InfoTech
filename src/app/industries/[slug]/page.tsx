import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { INDUSTRIES } from '@/constants';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.label} Recruitment | Chalky Infotech`,
    description: `Specialist recruitment solutions for the ${industry.label} sector. Chalky Infotech delivers exceptional talent with deep ${industry.label.toLowerCase()} industry knowledge and a 98% client satisfaction rate.`,
    openGraph: {
      title: `${industry.label} Recruitment | Chalky Infotech`,
      description: `Specialist ${industry.label} recruitment — delivered by consultants who truly understand your world.`,
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();

  const roles: Record<string, string[]> = {
    technology: ['Software Engineers', 'Cloud Architects', 'Data Scientists', 'DevOps Engineers', 'CTO/VP Engineering'],
    finance: ['Quantitative Analysts', 'Risk Managers', 'Compliance Officers', 'CFOs', 'Investment Managers'],
    healthcare: ['Clinical Data Managers', 'Bioinformaticians', 'Healthcare IT Leads', 'Medical Directors'],
    education: ['EdTech Engineers', 'Curriculum Designers', 'Learning Technologists', 'Academic Directors'],
    retail: ['E-commerce Managers', 'Supply Chain Directors', 'Retail Tech Leads', 'Category Managers'],
    media: ['Creative Directors', 'Content Engineers', 'Broadcast Technologists', 'Digital Strategists'],
    energy: ['Power Systems Engineers', 'Sustainability Leads', 'Energy Data Analysts', 'Grid Architects'],
    manufacturing: ['Manufacturing Engineers', 'Quality Leads', 'Operations Directors', 'Automation Specialists'],
  };

  const roleList = roles[industry.slug] ?? ['Senior Professionals', 'Team Leads', 'Directors', 'Specialists'];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: industry.label },
        ]}
        badge={industry.label}
        title={`${industry.label}`}
        titleHighlight="Recruitment"
        subtitle={`Specialist talent solutions for the ${industry.label.toLowerCase()} sector — delivered by consultants who truly understand your world, your culture and your competitive landscape.`}
        ctaLabel={`Hire ${industry.label} Talent`}
        ctaHref="/contact"
        secondaryLabel="All Industries"
        secondaryHref="/industries"
        imageSrc="/hero-industries.png"
        imageAlt={`${industry.label} industry professionals`}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-6">
                Why Trust Us for{' '}
                <span className="text-[#7A1F5C]">
                  {industry.label}
                </span>
              </h2>
              <p className="text-[#8A8A8A] leading-relaxed mb-4">
                Our {industry.label} recruitment team brings sector-specific knowledge, an established talent network and a track record of placing high-impact professionals.
              </p>
              <p className="text-[#8A8A8A] leading-relaxed">
                We understand the pressures, the compliance requirements, and the unique skills needed for this industry — helping you hire faster and retain longer.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '18d', label: 'Avg. Time-to-Hire' },
                  { value: '500+', label: 'Sector Clients' },
                  { value: '250K+', label: 'Candidate Network' },
                ].map((s) => (
                  <div key={s.label} className="bg-[#F5F0E8] rounded-2xl p-5 border border-[#EFE7DD]">
                    <p className="text-2xl font-extrabold text-[#7A1F5C]">{s.value}</p>
                    <p className="text-[#8A8A8A] text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F5F0E8] rounded-3xl p-8 border border-[#EFE7DD]">
              <h3 className="font-bold text-[#1A1A1A] text-lg mb-6">Roles We Fill in {industry.label}</h3>
              <div className="space-y-3">
                {roleList.map((role) => (
                  <div key={role} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-all duration-200">
                    <CheckCircle2 size={16} className="text-[#7A1F5C] flex-shrink-0" />
                    <span className="text-[#8A8A8A] text-sm font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to hire in ${industry.label}?`}
        subtitle="Our specialist consultants are ready to support your talent needs today."
      />
    </>
  );
}
