'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { getPostSlug } from '@/lib/seo-slug';

interface Category {
  name: string;
  slug: string;
  description?: string;
}

interface Section {
  name: string;
  slug: string;
  categories: Category[];
}

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
  commentsCount?: number;
  likesCount?: number;
}

interface Props {
  posts: Post[];
  siteStructure: Section[];
  loading: boolean;
  initialCategorySlug?: string;
  hideSidebar?: boolean;
}

const POSTS_PER_PAGE = 6;

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

function getCategoryIcon(slug: string) {
  const s = slug.toLowerCase();
  if (s.includes('blog')) return 'BookOpen';
  if (s.includes('case') || s.includes('study') || s.includes('stories')) return 'FileText';
  if (s.includes('newsletter') || s.includes('letter')) return 'Mail';
  if (s.includes('podcast') || s.includes('audio')) return 'Mic';
  if (s.includes('achievement') || s.includes('award') || s.includes('milestone')) return 'Trophy';
  if (s.includes('announcement') || s.includes('news')) return 'Megaphone';
  if (s.includes('event') || s.includes('meet')) return 'Calendar';
  if (s.includes('celebration') || s.includes('party')) return 'Sparkles';
  if (s.includes('community') || s.includes('life')) return 'Heart';
  if (s.includes('poster') || s.includes('creative')) return 'Image';
  if (s.includes('culture') || s.includes('team')) return 'Users';
  if (s.includes('metric') || s.includes('transformation')) return 'TrendingUp';
  return 'FileText'; // Default fallback
}

export default function SidebarPublishingHub({ posts, siteStructure, loading, initialCategorySlug, hideSidebar }: Props) {
  const [userSelectedCategory, setUserSelectedCategory] = useState<Category | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const gridRef = useRef<HTMLDivElement>(null);

  // Determine effective selected category dynamically from siteStructure / initialCategorySlug
  const activeCategory = (() => {
    if (userSelectedCategory) return userSelectedCategory;
    if (initialCategorySlug) {
      if (siteStructure && siteStructure.length > 0) {
        const norm = initialCategorySlug.toLowerCase().replace(/_/g, '-');
        for (const sec of siteStructure) {
          const cat = (sec.categories || []).find((c: any) => c.slug?.toLowerCase().replace(/_/g, '-') === norm);
          if (cat) return cat;
        }
      }
      const name = initialCategorySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      return { name, slug: initialCategorySlug };
    }
    if (siteStructure && siteStructure.length > 0) {
      const firstSec = siteStructure.find(s => s.categories && s.categories.length > 0);
      if (firstSec && firstSec.categories.length > 0) {
        return firstSec.categories[0];
      }
    }
    return null;
  })();

  // Reset pagination to page 1 whenever the selected category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory?.slug]);

  // Filter posts based on selected category in left sidebar filter (skip if hideSidebar is true)
  const filteredPosts = hideSidebar
    ? posts
    : (activeCategory
      ? posts.filter(p => {
          const catSlug = p.category?.slug?.toLowerCase().replace(/_/g, '-');
          const targetSlug = activeCategory.slug?.toLowerCase().replace(/_/g, '-');
          return catSlug === targetSlug;
        })
      : posts);

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (gridRef.current) {
      const yOffset = -100;
      const elementTop = gridRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop + yOffset),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={gridRef} className={hideSidebar ? "relative items-start" : "grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start"}>
      
      {/* 1. LEFT SIDEBAR: Categories & Sections Filter - Sticky on Desktop! */}
      {!hideSidebar && (
        <aside className="lg:col-span-3 lg:border-r lg:border-[#EFE7DD] lg:pr-8 flex flex-col gap-8 lg:sticky lg:top-[110px] lg:self-start h-fit pb-6">
        
        {loading ? (
          <div className="space-y-4">
            <div className="h-4 bg-gray-100 rounded w-1/3 animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-10 bg-gray-100 rounded-xl animate-pulse"></div>
              <div className="h-10 bg-gray-100 rounded-xl animate-pulse"></div>
            </div>
          </div>
        ) : (
          siteStructure.map((section: Section, secIdx: number) => {
            if (!section.categories || section.categories.length === 0) return null;

            return (
              <div key={secIdx} className="flex flex-col gap-4">
                {/* Section Title */}
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 select-none px-3">
                  {section.name}
                </span>

                {/* Categories buttons */}
                <div className="flex flex-col gap-1.5">
                  {section.categories.map((cat: Category) => {
                    const isSelected = activeCategory?.slug === cat.slug;
                    const iconName = getCategoryIcon(cat.slug);
                    const CategoryIcon = (LucideIcons as any)[iconName] || LucideIcons.FileText;

                    return (
                      <button
                        key={cat.slug}
                        onClick={() => setUserSelectedCategory(cat)}
                        className={`w-full text-left py-3 px-3.5 rounded-xl font-semibold text-sm flex items-center gap-3 transition-all duration-300 select-none group ${
                          isSelected
                            ? 'bg-[#7A1F5C] text-white font-bold shadow-md shadow-[#7A1F5C]/15 translate-x-1'
                            : 'text-gray-800 hover:bg-[#FAF8F5] hover:text-[#7A1F5C]'
                        }`}
                      >
                        <CategoryIcon size={18} className={isSelected ? 'text-white' : 'text-gray-500 group-hover:text-[#7A1F5C] shrink-0'} />
                        <span className="truncate">{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}

        </aside>
      )}

      {/* 2. RIGHT MAIN CONTENT: Filtered Articles Grid / List */}
      <main className={hideSidebar ? "lg:col-span-12 flex flex-col min-h-[500px]" : "lg:col-span-9 flex flex-col min-h-[500px]"}>
        
        {/* Main Header Bar with View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-tight">
              {activeCategory ? (
                <>Recent <span className="text-[#7A1F5C]">{activeCategory.name}</span></>
              ) : (
                <>Latest <span className="text-[#7A1F5C]">Posts</span></>
              )}
            </h3>
            {activeCategory && (
              <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed max-w-2xl">
                {activeCategory.description || `Expert articles and thought-provoking analysis on ${activeCategory.name.toLowerCase()}.`}
              </p>
            )}
          </div>

          {/* Grid vs List View Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#FAF8F5] p-1.5 rounded-xl border border-[#EFE7DD] shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all text-xs font-semibold flex items-center gap-1.5 ${
                viewMode === 'grid'
                  ? 'bg-[#7A1F5C] text-white shadow-md shadow-[#7A1F5C]/15'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-white/60'
              }`}
              title="Grid View"
              aria-label="Grid View"
            >
              <LucideIcons.LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all text-xs font-semibold flex items-center gap-1.5 ${
                viewMode === 'list'
                  ? 'bg-[#7A1F5C] text-white shadow-md shadow-[#7A1F5C]/15'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-white/60'
              }`}
              title="List View"
              aria-label="List View"
            >
              <LucideIcons.List size={16} />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="py-24 flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] rounded-full animate-spin"></div>
          </div>
        ) : paginatedPosts.length === 0 ? (
          <div className="py-24 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#FAF8F5] flex items-center justify-center mb-4">
              <LucideIcons.Inbox className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Check Back Soon</h3>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              We are currently crafting new content and strategic perspectives for the {activeCategory?.name} section.
            </p>
          </div>
        ) : (
          <>
            {/* GRID VIEW (2 cards per row for premium full width display) */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                {paginatedPosts.map((post, idx) => {
                  const formattedDate = formatDate(post.date);
                  const authorName = post.author || 'Chalky Team';
                  const likes = post.likesCount !== undefined ? post.likesCount : (post.views ? Math.floor(post.views / 25) : 0);

                  return (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx % 2) * 0.08, duration: 0.4 }}
                      className="bg-white border border-[#EFE7DD]/90 hover:border-[#7A1F5C]/40 rounded-2xl p-3.5 sm:p-4 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group relative"
                    >
                      <div>
                        {/* Full Width Inset Image Frame */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100 mb-3.5 shrink-0 border border-gray-100">
                          <Image
                            src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"}
                            alt={post.title}
                            fill
                            unoptimized
                            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                          />
                          {post.category?.name && (
                            <div className="absolute top-2.5 left-2.5 z-10">
                              <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-wider shadow-sm select-none border border-gray-100">
                                {post.category.name}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Content details inside card */}
                        <div className="px-1">
                          {/* Metadata row: Date on left, Likes on right */}
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
                          <h4 className="text-base sm:text-lg font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors leading-snug line-clamp-2 mb-2 min-h-[44px]">
                            {post.title}
                          </h4>

                          {/* Author avatar & name */}
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

                      {/* Invisible link overlay */}
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
            )}

            {/* LIST VIEW (Full width image frame display) */}
            {viewMode === 'list' && (
              <div className="flex flex-col gap-5">
                {paginatedPosts.map((post, idx) => {
                  const formattedDate = formatDate(post.date);
                  const authorName = post.author || 'Chalky Team';
                  const likes = post.likesCount !== undefined ? post.likesCount : (post.views ? Math.floor(post.views / 25) : 0);

                  return (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx % 3) * 0.08, duration: 0.4 }}
                      className="bg-white border border-[#EFE7DD]/90 hover:border-[#7A1F5C]/40 rounded-2xl p-3.5 sm:p-4 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 group relative"
                    >
                      {/* Full Width Image Frame in List View */}
                      <div className="relative w-full sm:w-72 md:w-80 lg:w-96 aspect-[16/9] sm:aspect-[16/10] shrink-0 overflow-hidden rounded-xl bg-gray-100 border border-gray-100">
                        <Image
                          src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"}
                          alt={post.title}
                          fill
                          unoptimized
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                          sizes="(max-width: 640px) 100vw, 400px"
                        />
                        {post.category?.name && (
                          <div className="absolute top-2.5 left-2.5 z-10">
                            <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#7A1F5C] text-[10px] font-extrabold uppercase tracking-wider shadow-sm select-none border border-gray-100">
                              {post.category.name}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Right Details Container */}
                      <div className="flex flex-col justify-between flex-grow py-1 pr-1">
                        <div>
                          {/* Metadata row: Date on left, Read time & Likes on right */}
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

                          {/* Title */}
                          <h4 className="text-base sm:text-lg font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors leading-snug line-clamp-2 mb-2">
                            {post.title}
                          </h4>

                          {/* Author avatar & name */}
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
                          <p className="text-xs text-gray-600 font-medium leading-relaxed line-clamp-3 mb-2">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Bottom Read Action */}
                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A1F5C] uppercase tracking-wider group-hover:underline">
                            Read Article <LucideIcons.ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>

                      {/* Invisible link overlay */}
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
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-14 flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-xl border border-[#EFE7DD] flex items-center justify-center hover:bg-[#FAF8F5] hover:text-[#7A1F5C] transition-all disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Previous Page"
                >
                  <LucideIcons.ChevronLeft size={16} />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl font-bold text-xs transition-all ${
                      currentPage === page
                        ? 'bg-[#7A1F5C] text-white shadow-lg shadow-[#7A1F5C]/10'
                        : 'border border-[#EFE7DD] hover:bg-[#FAF8F5] text-gray-600 hover:text-[#7A1F5C]'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-xl border border-[#EFE7DD] flex items-center justify-center hover:bg-[#FAF8F5] hover:text-[#7A1F5C] transition-all disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Next Page"
                >
                  <LucideIcons.ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        )}

      </main>

    </div>
  );
}

