import type { Metadata } from 'next';
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

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Chalky Insights & Trends',
  description: 'Expert analysis and data-driven perspectives on the evolving landscape of global recruitment, specialized sector growth, and the future of work.',
  keywords: ['recruitment trends', 'market intelligence UK', 'hiring benchmarks', 'future of work', 'talent insights'],
  url: '/insights',
  path: SEO_IMAGE_CONFIG.insights.path,
  alt: SEO_IMAGE_CONFIG.insights.alt
});

import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';

// Next.js 16 high-performance async fetch helpers
const getCachedSiteStructure = () =>
  unstable_cache(
    async () => await api.getFullSiteStructure().catch(() => []),
    ['site-structure'],
    { revalidate: 300 }
  )();

const getCachedAllPosts = () =>
  unstable_cache(
    async () => await api.getAllPosts(150).catch(() => []),
    ['all-posts-150'],
    { revalidate: 60 }
  )();

async function InsightsPageContent() {
  const posts = await getCachedAllPosts();
  const siteStructure = await getCachedSiteStructure();

  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Featured Highlight', id: 'featured' },
    { label: 'All Insights', id: 'grid' },
    { label: 'Recent Posts', id: 'recent' },
    { label: 'Categories', id: 'categories' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Connect', id: 'cta' }
  ];

  // Filter 3 display posts for the 3D Carousel (use featured if available, or first 3 posts)
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const displayFeatured = featuredPosts.length >= 3 ? featuredPosts : posts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F0E8]">
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
      <section id="featured" className="relative pt-24 pb-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
          
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

          <FeaturedHighlight posts={posts} loading={false} />

        </div>
        {/* Wave Divider to Cream */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#F5F0E8"></path>
          </svg>
        </div>
      </section>

      {/* ── SECTION 3: ALL INSIGHTS SIDEBAR PUBLISHING HUB (Mockup Match!) ── */}
      <section id="grid" className="relative pt-24 pb-32 bg-[#F5F0E8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SidebarPublishingHub 
            posts={posts} 
            siteStructure={siteStructure} 
            loading={false} 
          />
        </div>
        {/* Wave Divider to White */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* ── SECTION 4: RECENT 3 ARTICLES GRID ── */}
      <section id="recent" className="relative pt-24 pb-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
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
            loading={false} 
          />

        </div>
        {/* Wave Divider to Cream */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#F5F0E8"></path>
          </svg>
        </div>
      </section>

      {/* ── SECTION 5: SECTOR CATEGORIES LINK CARDS ── */}
      <section id="categories" className="relative pt-24 pb-32 bg-[#F5F0E8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
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
        {/* Wave Divider to White */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V15.81c13,36.92,27.64,56.86,47.69,59.33,51.78,6.37,103.59-15.34,154.51-35.74C242.39,23.15,285.9,6.11,329.75,1.8c70.36-6.91,136.33,13.88,206.8,32,73.84,19,147.54,4.36,218.2-13.08,69.27-17.11,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C1113,54,1200,120,1200,120H0Z" fill="#ffffff"></path>
          </svg>
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

export default function InsightsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white py-24 flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-[#7A1F5C]/20 border-t-[#7A1F5C] rounded-full animate-spin" />
        </div>
      }
    >
      <InsightsPageContent />
    </Suspense>
  );
}
