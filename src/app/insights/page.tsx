'use client';

import { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import SectionNavbar from '@/components/SectionNavbar';
import FeaturedHighlight from '@/sections/insights/FeaturedHighlight';
import SidebarPublishingHub from '@/sections/insights/SidebarPublishingHub';
import RecentArticles from '@/sections/insights/RecentArticles';
import SectorCategories from '@/sections/insights/SectorCategories';
import InsightsFAQ from '@/sections/insights/InsightsFAQ';
import api from '@/services/api';
import imgInsights from '@/assets/Insights/Insights.png';

export default function InsightsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [siteStructure, setSiteStructure] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Featured Highlight', id: 'featured' },
    { label: 'All Insights', id: 'grid' },
    { label: 'Recent Posts', id: 'recent' },
    { label: 'Categories', id: 'categories' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Connect', id: 'cta' }
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Fetch all posts dynamically from backend
        const allPosts = await api.getAllPosts(150);
        setPosts(allPosts);

        // Fetch dynamic structure from backend categories API
        const structure = await api.getFullSiteStructure();
        if (structure && structure.length > 0) {
          setSiteStructure(structure);
        }
      } catch (err) {
        console.error("Failed to load insights backend data:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Filter 3 display posts for the 3D Carousel (use featured if available, or first 3 posts)
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const displayFeatured = featuredPosts.length >= 3 ? featuredPosts : posts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <SectionNavbar sections={sections} />

      {/* ── SECTION 1: HERO (Services Style) ── */}
      <section id="hero">
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Insights' },
          ]}
          badge="Latest Thinking"
          title="Industry"
          titleHighlight="Insights & Trends"
          subtitle="Expert analysis and data-driven perspectives on the evolving landscape of global recruitment, specialized sector growth, and the future of work."
          ctaLabel="View Latest Insights"
          ctaHref="#grid"
          secondaryLabel="Subscribe Now"
          secondaryHref="#cta"
          imageSrc={imgInsights.src}
          imageAlt="Expert researcher analyzing recruitment data"
        />
      </section>

      {/* ── SECTION 2: FEATURED 3D HIGHLIGHT CAROUSEL (Mockup Match!) ── */}
      <section id="featured" className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <div className="text-center mb-16 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-black uppercase tracking-widest mb-4">
              TOP CONTENT
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-5 tracking-tight">
              Featured <span className="text-[#7A1F5C]">Highlight</span>
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
              Discover our most impactful and popular stories curated just for you.
            </p>
          </div>

          <FeaturedHighlight posts={posts} loading={loading} />

        </div>
      </section>

      {/* ── SECTION 3: ALL INSIGHTS SIDEBAR PUBLISHING HUB (Mockup Match!) ── */}
      <section id="grid" className="py-24 bg-[#FAF8F5] border-y border-[#EFE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SidebarPublishingHub 
            posts={posts} 
            siteStructure={siteStructure} 
            loading={loading} 
          />
        </div>
      </section>

      {/* ── SECTION 4: RECENT 3 ARTICLES GRID ── */}
      <section id="recent" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-black uppercase tracking-widest mb-4">
              LATEST ADDITIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-5 tracking-tight">
              Recent <span className="text-[#7A1F5C]">Articles</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Stay ahead of the curve with our recently published sector analyses and talent insights.
            </p>
          </div>

          <RecentArticles 
            posts={posts} 
            displayFeatured={displayFeatured} 
            loading={loading} 
          />

        </div>
      </section>

      {/* ── SECTION 5: SECTOR CATEGORIES LINK CARDS ── */}
      <section id="categories" className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-black uppercase tracking-widest mb-4">
              SPECIALIZED SECTORS
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A] mb-5 tracking-tight">
              Explore by <span className="text-[#7A1F5C]">Category</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Navigate directly to strategic perspectives curated specifically for your organizational vertical.
            </p>
          </div>

          <SectorCategories siteStructure={siteStructure} />

        </div>
      </section>

      {/* ── SECTION 6: FAQ (Industry FAQ Reference Style) ── */}
      <section id="faq">
        <InsightsFAQ />
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section id="cta">
        <CTASection 
          title="Get Insights Delivered"
          subtitle="Join 10,000+ enterprise leaders receiving our monthly briefing on recruitment trends, sector analysis, and talent strategies."
          primaryLabel="Subscribe to Newsletter"
          primaryHref="/contact"
          secondaryLabel="Talk to an Expert"
          secondaryHref="/contact"
        />
      </section>
    </div>
  );
}
