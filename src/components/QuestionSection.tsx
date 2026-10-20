import React from 'react';
import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';

export interface QuestionBlock {
  id: string;
  question: string;
  answer: string;
  ctaLabel?: string;
  ctaHref?: string;
  relatedLinks?: { label: string; href: string }[];
}

interface QuestionSectionProps {
  blocks: QuestionBlock[];
  badge?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  id?: string;
  bgWhite?: boolean;
}

export default function QuestionSection({
  blocks,
  badge = 'Common Questions',
  sectionTitle = 'Frequently Asked Questions',
  sectionSubtitle = 'Find answers to key questions about our recruitment and workforce solutions.',
  id,
  bgWhite = false
}: QuestionSectionProps) {
  return (
    <section 
      id={id} 
      className={`py-24 overflow-hidden relative border-t border-[#EFE7DD] scroll-mt-24 ${
        bgWhite ? 'bg-white' : 'bg-[#F5F0E8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-black uppercase tracking-widest mb-4">
              {badge}
            </span>
          )}
          {sectionTitle && (
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-5 tracking-tight">
              {sectionTitle}
            </h2>
          )}
          {sectionSubtitle && (
            <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
              {sectionSubtitle}
            </p>
          )}
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {blocks.map((block) => (
            <div
              key={block.id}
              id={block.id}
              className={`rounded-[32px] p-8 md:p-10 border shadow-sm hover:shadow-md transition-all scroll-mt-32 ${
                bgWhite ? 'bg-[#F5F0E8]/40 border-[#EFE7DD]/60' : 'bg-white border-white/60'
              }`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-[#7A1F5C]/10 flex items-center justify-center text-[#7A1F5C] flex-shrink-0 mt-0.5">
                  <HelpCircle size={18} />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] leading-tight">
                  {block.question}
                </h2>
              </div>
              
              <div className="pl-0 md:pl-14">
                <p className="text-[#8A8A8A] text-sm md:text-base leading-relaxed mb-6 whitespace-pre-line">
                  {block.answer}
                </p>

                {(block.ctaLabel && block.ctaHref) || (block.relatedLinks && block.relatedLinks.length > 0) ? (
                  <div className="space-y-4 pt-4 border-t border-[#7A1F5C]/5">
                    {block.ctaLabel && block.ctaHref && (
                      <div>
                        <Link
                          href={block.ctaHref}
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#7A1F5C] hover:text-[#9D2877] uppercase tracking-wider transition-colors"
                        >
                          <span>{block.ctaLabel}</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    )}

                    {block.relatedLinks && block.relatedLinks.length > 0 && (
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#8A8A8A]">
                        <span className="font-semibold text-gray-400 uppercase tracking-widest text-[10px]">Explore:</span>
                        {block.relatedLinks.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            href={link.href}
                            className="font-medium text-[#7A1F5C] hover:text-[#9D2877] transition-all hover:underline"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
