'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { getPostSlug } from '@/lib/seo-slug';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category?: { name: string; slug: string };
  tags?: string[];
  date: string;
  readTime: number;
  featured?: boolean;
}

interface Props {
  posts: Post[];
  loading: boolean;
}

function formatDate(dateStr?: string) {
  if (!dateStr) return 'Sep 29, 2026';
  if (/^[A-Z][a-z]{2}\s\d{1,2},\s\d{4}$/.test(dateStr)) return dateStr;
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default function FeaturedHighlight({ posts, loading }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Filter top 10 display posts for the 3D Carousel (use featured if available, or first 10 posts)
  const featuredPosts = posts.filter(p => p.featured).slice(0, 10);
  const displayFeatured = featuredPosts.length > 0 ? featuredPosts : posts.slice(0, 10);

  const getCardStyles = (idx: number) => {
    const total = displayFeatured.length;
    if (total === 0) return '';
    const diff = (idx - activeIdx + total) % total;
    if (diff === 0) {
      // Active Centered Card
      return "z-30 scale-100 opacity-100 translate-x-0 rotate-0 pointer-events-auto relative shadow-2xl";
    } else if (diff === 1) {
      // Right Card Stacked behind
      return "z-20 scale-90 opacity-40 translate-x-[26%] md:translate-x-[20%] rotate-2 pointer-events-none blur-[0.5px]";
    } else if (diff === total - 1) {
      // Left Card Stacked behind
      return "z-20 scale-90 opacity-40 -translate-x-[26%] md:-translate-x-[20%] -rotate-2 pointer-events-none blur-[0.5px]";
    } else {
      // Hidden off stage
      return "z-10 scale-75 opacity-0 pointer-events-none hidden";
    }
  };

  if (loading) {
    return (
      <div className="py-24 flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (displayFeatured.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">No featured posts found.</div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
      <div className="relative w-full max-w-[720px] h-[460px] sm:h-[490px] md:h-[510px] flex items-center justify-center mx-auto">
        
        {/* Stacked Cards Area */}
        <div className="relative w-[94%] sm:w-[90%] max-w-[620px] h-full flex items-center justify-center">
          {displayFeatured.map((post, i) => {
            const styleClass = getCardStyles(i);
            const formattedDate = formatDate(post.date);
            
            return (
              <div
                key={post.id}
                className={`absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl border border-[#EFE7DD] bg-white p-4 sm:p-5 hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between group ${styleClass}`}
              >
                {/* Top Full Width Image Frame */}
                <div className="relative w-full h-40 sm:h-48 md:h-52 shrink-0 overflow-hidden rounded-xl bg-gray-100 mb-3 sm:mb-4 border border-gray-100">
                  <Image
                    src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"}
                    alt={post.title}
                    fill
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 650px"
                  />
                  {post.category?.name && (
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                      <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-md bg-white/95 backdrop-blur-md text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-wider shadow-sm select-none">
                        {post.category.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Content Container */}
                <div className="flex flex-col justify-between flex-grow px-1 pb-1">
                  <div>
                    {/* Metadata: Date & Read Time */}
                    <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-2">
                      <span className="flex items-center gap-1.5">
                        <LucideIcons.Calendar size={13} className="text-[#7A1F5C]" />
                        {formattedDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <LucideIcons.Clock size={13} className="text-[#7A1F5C]" />
                        {post.readTime} min read
                      </span>
                    </div>

                    {/* Title (Consistent height for uniform alignment across cards) */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors leading-snug line-clamp-2 mb-2 tracking-tight min-h-[44px] sm:min-h-[52px]">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read CTA Button - locked to bottom with clean border divider */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto relative z-20">
                    <Link 
                      href={`/insights/${post.category?.slug || 'blogs'}/${getPostSlug(post)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7A1F5C] hover:bg-[#68194E] text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 w-fit pointer-events-auto"
                      prefetch={false}
                    >
                      Read Article <LucideIcons.ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Invisible Overlay Link */}
                <Link 
                  href={`/insights/${post.category?.slug || 'blogs'}/${getPostSlug(post)}`}
                  className="absolute inset-0 z-10"
                  aria-label={`Read ${post.title}`}
                  prefetch={false}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={() => setActiveIdx((prev) => (prev - 1 + displayFeatured.length) % displayFeatured.length)}
          className="absolute left-1 xs:left-3 md:-left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-xl flex items-center justify-center border border-[#EFE7DD] hover:bg-[#7A1F5C] hover:text-white transition-all duration-300 z-40 group text-gray-700"
          aria-label="Previous Slide"
        >
          <LucideIcons.ChevronLeft size={20} className="group-hover:scale-105 transition-transform" />
        </button>
        <button 
          onClick={() => setActiveIdx((prev) => (prev + 1) % displayFeatured.length)}
          className="absolute right-1 xs:right-3 md:-right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-xl flex items-center justify-center border border-[#EFE7DD] hover:bg-[#7A1F5C] hover:text-white transition-all duration-300 z-40 group text-gray-700"
          aria-label="Next Slide"
        >
          <LucideIcons.ChevronRight size={20} className="group-hover:scale-105 transition-transform" />
        </button>

      </div>

      {/* Pagination Dots */}
      {displayFeatured.length > 1 && (
        <div className="flex items-center gap-2 z-40 mt-2">
          {displayFeatured.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIdx === idx
                  ? 'w-7 bg-[#7A1F5C]'
                  : 'w-2.5 bg-gray-300 hover:bg-[#7A1F5C]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}


