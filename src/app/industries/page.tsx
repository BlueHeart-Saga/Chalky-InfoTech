import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { INDUSTRIES } from '@/constants';
import { Cpu, Landmark, Activity, BookOpen, ShoppingCart, Play, Zap, Factory, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve | Chalky Infotech',
  description:
    'Chalky Infotech serves 8+ major industries with specialist recruitment expertise. Explore technology, finance, healthcare, retail, media and more.',
};

const iconMap: Record<string, React.ElementType> = {
  Cpu, Landmark, Activity, BookOpen, ShoppingCart, Play, Zap, Factory,
};

const bgColors = [
  'bg-[#7A1F5C]', 'bg-[#C2185B]', 'bg-[#4A1238]', 'bg-[#D14D72]',
  'bg-[#7A1F5C]', 'bg-[#C2185B]', 'bg-[#4A1238]', 'bg-[#D14D72]',
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries' },
        ]}
        badge="Sector Expertise"
        title="Industries We"
        titleHighlight="Serve"
        subtitle="Deep sector specialisation across 8 major industries — delivering talent solutions that truly understand the unique challenges, regulations and culture of your world."
        ctaLabel="Find Sector Talent"
        ctaHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
        imageSrc="/hero-industries.png"
        imageAlt="Multi-industry business team meeting"
      />

      {/* Industry Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Cpu;
              return (
                <Link key={ind.slug} href={`/industries/${ind.slug}`}
                  className="group relative overflow-hidden rounded-3xl bg-[#F5F0E8] border border-[#EFE7DD] p-8 hover:shadow-2xl hover:shadow-[#7A1F5C]/20 hover:-translate-y-2 transition-all duration-400">
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full ${bgColors[i]} opacity-10 -translate-y-6 translate-x-6 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className={`w-14 h-14 rounded-2xl ${bgColors[i]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-3 group-hover:text-[#7A1F5C] transition-colors duration-300">{ind.label}</h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">
                    Specialist talent solutions for the {ind.label.toLowerCase()} sector.
                  </p>
                  <div className="flex items-center gap-2 text-[#7A1F5C] font-semibold text-sm">
                    Explore <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Need Talent for Your Industry?" />
    </>
  );
}
