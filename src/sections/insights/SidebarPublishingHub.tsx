'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

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
  views?: number;
}

interface Props {
  posts: Post[];
  siteStructure: Section[];
  loading: boolean;
  initialCategorySlug?: string;
  hideSidebar?: boolean;
}

const POSTS_PER_PAGE = 6;

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
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  // Set default selected category to first loaded category or initialCategorySlug
  useEffect(() => {
    if (siteStructure && siteStructure.length > 0 && !selectedCategory) {
      if (initialCategorySlug) {
        let foundCat: Category | null = null;
        for (const sec of siteStructure) {
          const cat = (sec.categories || []).find((c: any) => c.slug === initialCategorySlug);
          if (cat) {
            foundCat = cat;
            break;
          }
        }
        if (foundCat) {
          setSelectedCategory(foundCat);
          return;
        }
      }
      const firstSec = siteStructure.find(s => s.categories && s.categories.length > 0);
      if (firstSec && firstSec.categories.length > 0) {
        setSelectedCategory(firstSec.categories[0]);
      }
    }
  }, [siteStructure, selectedCategory, initialCategorySlug]);

  // Reset pagination to page 1 whenever the selected category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Filter posts based on selected category in left sidebar filter (skip if hideSidebar is true)
  const filteredPosts = hideSidebar
    ? posts
    : (selectedCategory
      ? posts.filter(p => p.category?.slug === selectedCategory.slug)
      : posts);

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (gridRef.current) {
      window.scrollTo({
        top: gridRef.current.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={gridRef} className={hideSidebar ? "relative items-start" : "grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start"}>
      
      {/* 1. LEFT SIDEBAR: Categories & Sections Filter - Sticky on Desktop! */}
      {!hideSidebar && (
        <aside className="lg:col-span-3 lg:border-r lg:border-[#EFE7DD] lg:pr-8 flex flex-col gap-10 lg:sticky lg:top-[120px] lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
        
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
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 select-none px-3">
                  {section.name}
                </span>

                {/* Categories buttons */}
                <div className="flex flex-col gap-1.5">
                  {section.categories.map((cat: Category) => {
                    const isSelected = selectedCategory?.slug === cat.slug;
                    const iconName = getCategoryIcon(cat.slug);
                    const CategoryIcon = (LucideIcons as any)[iconName] || LucideIcons.FileText;

                    return (
                      <button
                        key={cat.slug}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-3 transition-all duration-300 select-none group ${
                          isSelected
                            ? 'bg-[#7A1F5C] text-white shadow-md shadow-[#7A1F5C]/10 translate-x-1'
                            : 'text-gray-600 hover:bg-[#FAF8F5] hover:text-[#7A1F5C]'
                        }`}
                      >
                        <CategoryIcon size={15} className={isSelected ? 'text-white' : 'text-gray-400 group-hover:text-[#7A1F5C]'} />
                        <span>{cat.name}</span>
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

      {/* 2. RIGHT MAIN CONTENT: Filtered Articles Grid */}
      <main className={hideSidebar ? "lg:col-span-12 flex flex-col min-h-[500px]" : "lg:col-span-9 flex flex-col min-h-[500px]"}>
        
        {!hideSidebar && selectedCategory && (
          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-[#1A1A1A]">
              Recent <span className="text-[#7A1F5C] font-bold">{selectedCategory.name}</span>
            </h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              {selectedCategory.description || `Expert articles and thought-provoking analysis on ${selectedCategory.name.toLowerCase()}.`}
            </p>
          </div>
        )}

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
              We are currently crafting new content and strategic perspectives for the {selectedCategory?.name} section.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                  className="bg-white border border-[#EFE7DD] rounded-[2rem] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative"
                >
                  {/* Image header */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <Image
                      src={post.image || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200"}
                      alt={post.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Card Middle Strategic Details */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    
                    <div>
                      {/* Title */}
                      <h4 className="text-[15px] font-bold text-[#1A1A1A] group-hover:text-[#7A1F5C] transition-colors leading-tight mb-3 line-clamp-2">
                        {post.title}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Card bottom row: Mockup styled stats & author initial badge */}
                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                      
                      {/* Left: Author initial circle & name */}
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#7A1F5C] text-white text-[9px] font-black uppercase flex items-center justify-center select-none">
                          {post.author ? post.author.charAt(0) : 'C'}
                        </div>
                        <span className="text-[10px] text-gray-500 font-extrabold select-none">
                          {post.author || 'Chalky Team'}
                        </span>
                      </div>

                      {/* Right: Mockup Views Icon & Count */}
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 font-extrabold select-none bg-[#FAF8F5] px-2.5 py-1 rounded-full">
                        <LucideIcons.Eye size={12} className="text-[#7A1F5C]" />
                        <span>{post.views || 0}</span>
                      </div>

                    </div>

                  </div>

                  {/* Floating invisible overlay link */}
                  <Link 
                    href={`/insights/${post.category?.slug}/${post.id}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Read ${post.title}`}
                  />

                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
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
