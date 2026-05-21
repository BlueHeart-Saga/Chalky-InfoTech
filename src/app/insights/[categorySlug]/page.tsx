import type { Metadata } from 'next';
import { Suspense } from 'react';
import api from '@/services/api';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import SectionNavbar from '@/components/SectionNavbar';
import FeaturedHighlight from '@/sections/insights/FeaturedHighlight';
import SidebarPublishingHub from '@/sections/insights/SidebarPublishingHub';
import SectorCategories from '@/sections/insights/SectorCategories';
import InsightsFAQ from '@/sections/insights/InsightsFAQ';

import imgAchievements from '@/assets/Insights/Achievements.png';
import imgAwards from '@/assets/Insights/Awards and Milestones.png';
import imgBlogs from '@/assets/Insights/Blogs.png';
import imgCaseStudies from '@/assets/Insights/Case Studies.png';
import imgCelebration from '@/assets/Insights/Celebration.png';
import imgClientTransform from '@/assets/Insights/Client transformation.png';
import imgCommunity from '@/assets/Insights/Community.png';
import imgCompanyAnnounce from '@/assets/Insights/Companny Announcement.png';
import imgImpactMetrics from '@/assets/Insights/Impact Metrics.png';
import imgIndustryEvent from '@/assets/Insights/Industry Event.png';
import imgInsights from '@/assets/Insights/Insights.png';
import imgNewsLetter from '@/assets/Insights/News Letter.png';
import imgPodcasts from '@/assets/Insights/Podcasts.png';
import imgPosters from '@/assets/Insights/Posters.png';
import imgTeamCulture from '@/assets/Insights/Team Culture.png';
import imgTestimonials from '@/assets/Insights/Testimonials.png';

const CATEGORY_IMAGES: Record<string, any> = {
  'achievements': imgAchievements,
  'awards-and-milestones': imgAwards,
  'awards-milestones': imgAwards,
  'blogs': imgBlogs,
  'case-studies': imgCaseStudies,
  'celebration': imgCelebration,
  'celebrations': imgCelebration,
  'client-transformation': imgClientTransform,
  'client-transformations': imgClientTransform,
  'community': imgCommunity,
  'company-announcement': imgCompanyAnnounce,
  'company-announcements': imgCompanyAnnounce,
  'companny-announcement': imgCompanyAnnounce,
  'impact-metrics': imgImpactMetrics,
  'industry-event': imgIndustryEvent,
  'industry-events': imgIndustryEvent,
  'insights': imgInsights,
  'news-letter': imgNewsLetter,
  'newsletters': imgNewsLetter,
  'podcasts': imgPodcasts,
  'posters': imgPosters,
  'team-culture': imgTeamCulture,
  'testimonials': imgTestimonials,
};

type Props = {
  params: Promise<{ categorySlug: string }>;
};

// Next.js 16 high-performance Component Caching helpers
async function getCachedSiteStructure() {
  "use cache";
  return await api.getFullSiteStructure().catch(() => []);
}

async function getCachedAllPosts() {
  "use cache";
  return await api.getAllPosts().catch(() => []);
}

export async function generateStaticParams() {
  try {
    const structure = await api.getFullSiteStructure();
    const params: { categorySlug: string }[] = [];
    for (const sec of structure) {
      for (const cat of (sec.categories || [])) {
        params.push({ categorySlug: cat.slug });
      }
    }
    return params;
  } catch (err) {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const siteStructure = await getCachedSiteStructure();

  // Find category details
  let catName = categorySlug;
  for (const sec of siteStructure) {
    const cat = (sec.categories || []).find((c: any) => c.slug === categorySlug);
    if (cat) {
      catName = cat.name;
      break;
    }
  }

  const title = catName !== categorySlug ? catName : categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} | Chalky Infotech Insights`,
    description: `Explore our latest research, thought leadership and recruitment analytics for ${title}.`,
  };
}

// Separate component for loading dyn data safely under Suspense
async function CategoryPageContent({ params }: { params: Promise<{ categorySlug: string }> }) {
  const { categorySlug } = await params;

  // Fetch sections structure and posts from backend using high-performance Component Cache
  const siteStructure = await getCachedSiteStructure();
  const allPosts = await getCachedAllPosts();

  // Locate the active category details and parent section
  let currentCategory: any = null;
  let parentSection: any = null;

  for (const sec of siteStructure) {
    const cat = (sec.categories || []).find((c: any) => c.slug === categorySlug);
    if (cat) {
      currentCategory = cat;
      parentSection = sec;
      break;
    }
  }

  const title = currentCategory?.name || categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Filter posts specifically for this category
  const categoryPosts = allPosts.filter(p => p.category?.slug === categorySlug);

  // Define featured highlight post inside this category (fallback to first post if any)
  const featuredPost = categoryPosts.length > 0 ? categoryPosts[0] : null;

  const sections = [
    { label: 'Top', id: 'hero' },
    ...(featuredPost ? [{ label: 'Featured Highlight', id: 'featured' }] : []),
    { label: 'All Articles', id: 'grid' },
    { label: 'Other Categories', id: 'categories' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Connect', id: 'cta' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SectionNavbar sections={sections} />

      {/* ── SECTION 1: HERO ── */}
      <section id="hero">
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Insights', href: '/insights' },
            { label: title },
          ]}
          badge={parentSection ? parentSection.name : "Category Focus"}
          title={title}
          titleHighlight="Perspectives"
          subtitle={currentCategory?.description || `Explore expert research, B2B whitepapers, and dynamic workforce guidelines in our specialized ${title.toLowerCase()} repository.`}
          ctaLabel="Browse Publications"
          ctaHref="#grid"
          secondaryLabel="Insights Center"
          secondaryHref="/insights"
          imageSrc={CATEGORY_IMAGES[categorySlug]?.src || imgInsights.src}
          imageAlt={`${title} Insights`}
        />
      </section>

      {/* ── SECTION 2: FEATURED HIGHLIGHT ── */}
      {categoryPosts && categoryPosts.length > 0 && (
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
            <FeaturedHighlight posts={categoryPosts} loading={false} />
          </div>
        </section>
      )}

      {/* ── SECTION 3: ARTICLES MAIN HUB ── */}
      <section id="grid" className="py-24 bg-white border-b border-[#EFE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
              Category Focus
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
              Explore <span className="text-[#7A1F5C]">{title}</span> Publications
            </h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Discover industry audits and talent solutions compiled directly by Chalky's technical consultants and managing directors.
            </p>
          </div>

          <SidebarPublishingHub posts={categoryPosts} siteStructure={siteStructure} loading={false} hideSidebar={true} />

        </div>
      </section>

      {/* ── SECTION 4: OTHER CATEGORIES ── */}
      <section id="categories" className="py-24 bg-[#FAF8F5] border-b border-[#EFE7DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#7A1F5C]/10 text-[#7A1F5C] text-xs font-bold uppercase tracking-widest mb-4">
              Browse More
            </span>
            <h3 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
              Explore Other <span className="text-[#7A1F5C]">Sectors & Channels</span>
            </h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Navigate directly to strategic perspectives curated specifically for adjacent organizational verticals.
            </p>
          </div>

          <SectorCategories siteStructure={siteStructure} />

        </div>
      </section>

      {/* ── SECTION 5: FAQ ── */}
      <section id="faq">
        <InsightsFAQ />
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section id="cta">
        <CTASection 
          title="Get Custom Market Intelligence"
          subtitle={`Subscribe to receive real-time talent analytics and recruitment benchmarks tailored for the ${title.toLowerCase()} sector.`}
          primaryLabel="Subscribe to Sector Alerts"
          primaryHref="/contact"
          secondaryLabel="Consult a Talent Lead"
          secondaryHref="/contact"
        />
      </section>
    </div>
  );
}

export default function CategoryPage({ params }: Props) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5]">
        <div className="w-12 h-12 rounded-full border-4 border-[#7A1F5C]/15 border-t-[#7A1F5C] animate-spin mb-4"></div>
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#7A1F5C]/60">Loading sector intelligence...</p>
      </div>
    }>
      <CategoryPageContent params={params} />
    </Suspense>
  );
}
