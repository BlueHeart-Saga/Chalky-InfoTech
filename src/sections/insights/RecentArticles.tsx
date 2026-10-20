'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
  author?: string;
  authorAvatar?: string;
  views?: number;
  likesCount?: number;
}

interface Props {
  posts: Post[];
  displayFeatured: Post[];
  loading: boolean;
  limit?: number;
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

export default function RecentArticles({ posts, displayFeatured, loading }: Props) {
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter recent posts excluding those in the featured highlight carousel
  const recentPosts = posts.filter(p => !displayFeatured.some(f => f.id === p.id));
  const visiblePosts = recentPosts.slice(0, visibleCount);

  if (loading) {
    return (
      <div className="py-12 flex justify-center items-center">
        <div className="w-8 h-8 border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (recentPosts.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">Check back soon for new articles.</div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full">
        {visiblePosts.map((post, idx) => {
          const formattedDate = formatDate(post.date);
          const authorName = post.author || 'Chalky Team';
          const likes = post.likesCount !== undefined ? post.likesCount : (post.views ? Math.floor(post.views / 25) : idx + 1);

          return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.08, duration: 0.4 }}
              className="bg-white border border-[#EFE7DD]/90 hover:border-[#7A1F5C]/40 rounded-2xl p-3.5 sm:p-4 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group relative"
            >
              <div>
                {/* Full Width Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100 mb-3.5 shrink-0 border border-gray-100">
                  <Image
                    src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"}
                    alt={post.title}
                    fill
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {post.category?.name && (
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#7A1F5C] text-[10px] font-bold uppercase tracking-wider shadow-sm select-none">
                        {post.category.name}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="px-1">
                  {/* Metadata row: Date & Likes */}
                  <div className="flex items-center justify-between text-[11px] text-gray-500 font-semibold mb-2">
                    <span>{formattedDate}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 hover:text-[#7A1F5C] transition-colors" title="Read time">
                        <LucideIcons.Clock size={12} className="text-[#7A1F5C]" />
                        <span>{post.readTime} min</span>
                      </span>
                      <span className="flex items-center gap-1 hover:text-[#7A1F5C] transition-colors" title="Likes">
                        <LucideIcons.Heart size={12} className="text-gray-400" />
                        <span>{likes}</span>
                      </span>
                    </div>
                  </div>

                  {/* Title (Semibold, high contrast, uniform height) */}
                  <h4 className="text-base sm:text-[16px] font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors leading-snug line-clamp-2 mb-2 min-h-[44px]">
                    {post.title}
                  </h4>

                  {/* Author Avatar & Name */}
                  <div className="flex items-center gap-2 mb-2">
                    {post.authorAvatar ? (
                      <Image src={post.authorAvatar} alt={authorName} width={20} height={20} className="w-5 h-5 rounded-full object-cover shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#7A1F5C] to-[#5A1744] text-white text-[9px] font-bold uppercase flex items-center justify-center shrink-0 shadow-sm select-none">
                        {authorName.charAt(0)}
                      </div>
                    )}
                    <span className="text-xs text-gray-700 font-semibold truncate">
                      {authorName}
                    </span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-600 font-medium leading-relaxed line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Read Action */}
              <div className="px-1 pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A1F5C] uppercase tracking-wider group-hover:underline">
                  Read Article <LucideIcons.ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              {/* Floating invisible overlay link */}
              <Link 
                href={`/insights/${post.category?.slug || 'blogs'}/${getPostSlug(post)}`}
                className="absolute inset-0 z-10"
                aria-label={`Read ${post.title}`}
                prefetch={false}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Load More Button if more posts are available */}
      {visibleCount < recentPosts.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount(prev => Math.min(prev + 6, recentPosts.length))}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#7A1F5C] hover:bg-[#63184a] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#7A1F5C]/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Load More Articles</span>
            <LucideIcons.ChevronDown size={16} />
          </button>
        </div>
      )}
    </div>
  );
}


