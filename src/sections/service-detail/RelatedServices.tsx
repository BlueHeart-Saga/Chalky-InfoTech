'use client';

import { SERVICES } from '@/constants';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: Props) {
  const related = SERVICES.filter(s => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">Internal Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Explore <span className="text-[#7A1F5C]">Related Services</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}
              className="group bg-[#F5F0E8] border border-[#EFE7DD] rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#7A1F5C]/10 hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-[#1A1A1A] mb-3 group-hover:text-[#7A1F5C] transition-colors">{service.label}</h3>
              <p className="text-[#8A8A8A] text-xs leading-relaxed mb-6">{service.desc}</p>
              <div className="flex items-center gap-2 text-[#7A1F5C] font-bold text-xs uppercase tracking-widest">
                View Details <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

