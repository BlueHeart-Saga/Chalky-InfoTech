import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { SERVICES } from '@/constants';
import { Code2, TrendingUp, GraduationCap, HeartPulse, ShoppingBag, Globe, Film, Zap, Cloud, Brain, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Chalky Infotech',
  description:
    'Specialist recruitment services across IT, finance, healthcare, cloud, AI, DevOps and more. Chalky Infotech delivers exceptional talent for every sector.',
};

const iconMap: Record<string, React.ElementType> = {
  Code2, TrendingUp, GraduationCap, HeartPulse, ShoppingBag, Globe, Film, Zap, Cloud, Brain,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
        badge="What We Do"
        title="Specialist Recruitment"
        titleHighlight="For Every Sector"
        subtitle="10 dedicated service areas. One trusted partner. Delivering exceptional talent across the most competitive industries globally — with speed, precision and integrity."
        ctaLabel="Start Hiring Today"
        ctaHref="/contact"
        secondaryLabel="Browse Jobs"
        secondaryHref="/jobs"
        imageSrc="/hero-services.png"
        imageAlt="Chalky Infotech specialist consultants"
      />

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">
              Our <span className="text-[#7A1F5C]">Service Areas</span>
            </h2>
            <p className="text-[#8A8A8A] max-w-2xl mx-auto">
              Each service is led by specialist consultants with deep sector knowledge, ensuring precise matching between talent and opportunity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}
                  className="group flex flex-col bg-[#F5F0E8] rounded-2xl p-8 border border-[#EFE7DD] hover:border-[#7A1F5C]/30 hover:shadow-xl hover:shadow-[#7A1F5C]/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Icon size={26} className="text-[#7A1F5C]" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-3">{service.label}</h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed flex-1">{service.desc}</p>
                  <div className="flex items-center gap-2 mt-6 text-[#7A1F5C] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                    Explore Service <ArrowUpRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-br from-[#4A1238] via-[#7A1F5C] to-[#3A0D28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest mb-4">Our Process</span>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              How We <span className="text-[#7A1F5C]">Work</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We deep-dive into your organisation, culture and requirements.' },
              { step: '02', title: 'Talent Search', desc: 'Our specialist consultants activate our global network.' },
              { step: '03', title: 'Screening', desc: 'Rigorous competency and cultural fit assessment of every candidate.' },
              { step: '04', title: 'Placement', desc: 'Seamless onboarding support for lasting retention.' },
            ].map((item) => (
              <div key={item.step} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C2185B] to-[#D14D72] flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-extrabold text-lg">{item.step}</span>
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
