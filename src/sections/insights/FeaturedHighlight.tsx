'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

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

export default function FeaturedHighlight({ posts, loading }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Filter 3 display posts for the 3D Carousel (use featured if available, or first 3 posts)
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const displayFeatured = featuredPosts.length >= 3 ? featuredPosts : posts.slice(0, 3);

  const getCardStyles = (idx: number) => {
    const diff = (idx - activeIdx + displayFeatured.length) % displayFeatured.length;
    if (diff === 0) {
      // Active Centered Card
      return "z-30 scale-100 opacity-100 translate-x-0 rotate-0 pointer-events-auto relative shadow-2xl";
    } else if (diff === 1) {
      // Right Card Stacked behind
      return "z-20 scale-85 opacity-55 translate-x-[32%] md:translate-x-[24%] rotate-2 pointer-events-none blur-[0.5px]";
    } else {
      // Left Card Stacked behind
      return "z-20 scale-85 opacity-55 -translate-x-[32%] md:-translate-x-[24%] -rotate-2 pointer-events-none blur-[0.5px]";
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
    <div className="relative w-full max-w-[850px] h-[400px] md:h-[480px] flex items-center justify-center mx-auto">
      
      {/* Stacked Cards Area */}
      <div className="relative w-[90%] sm:w-[80%] max-w-[620px] h-full flex items-center justify-center">
        {displayFeatured.map((post, i) => {
          const styleClass = getCardStyles(i);
          
          return (
            <div
              key={post.id}
              className={`absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden border border-[#EFE7DD] bg-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${styleClass}`}
            >
              {/* Image backdrop */}
              <div className="relative w-full h-full">
                <Image
                  src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"}
                  alt={post.title}
                  fill
                  unoptimized
                  className="object-cover"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                {/* High-fidelity dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
                
                {/* Dynamic Floating Overlay Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end text-left z-25">
                  
                  {/* Categories/Tags */}
                  <div className="flex flex-wrap gap-2.5 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#7A1F5C] text-white text-[9px] font-extrabold uppercase tracking-widest">
                      {post.category?.name || 'Featured'}
                    </span>
                    {post.tags?.slice(0, 2).map((tag: string, tagIdx: number) => (
                      <span key={tagIdx} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[9px] font-extrabold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats / Date / Read Time */}
                  <div className="flex items-center gap-4 text-[11px] text-white/80 font-bold uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-1.5">
                      <LucideIcons.Clock size={13} className="text-[#DBCB89]" />
                      {post.readTime} min read
                    </span>
                    <span className="flex items-center gap-1.5">
                      <LucideIcons.Calendar size={13} className="text-[#DBCB89]" />
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-black text-white mb-6 leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Read Button */}
                  <Link 
                    href={`/insights/${post.category?.slug}/${post.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#7A1F5C] hover:bg-[#68194E] text-white font-extrabold text-xs uppercase tracking-widest shadow-md transition-colors duration-300 w-fit"
                  >
                    Read Article <LucideIcons.ArrowRight size={14} />
                  </Link>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows overlapping the stacked layout */}
      <button 
        onClick={() => setActiveIdx((prev) => (prev - 1 + displayFeatured.length) % displayFeatured.length)}
        className="absolute left-2 xs:left-6 md:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border border-[#EFE7DD] hover:bg-[#7A1F5C] hover:text-white transition-all duration-300 z-40 group text-gray-700"
        aria-label="Previous Slide"
      >
        <LucideIcons.ChevronLeft size={22} className="group-hover:scale-105 transition-transform" />
      </button>
      <button 
        onClick={() => setActiveIdx((prev) => (prev + 1) % displayFeatured.length)}
        className="absolute right-2 xs:right-6 md:-right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border border-[#EFE7DD] hover:bg-[#7A1F5C] hover:text-white transition-all duration-300 z-40 group text-gray-700"
        aria-label="Next Slide"
      >
        <LucideIcons.ChevronRight size={22} className="group-hover:scale-105 transition-transform" />
      </button>

    </div>
  );
}
