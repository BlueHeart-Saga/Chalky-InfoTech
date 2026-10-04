import { MetadataRoute } from 'next';
import { SERVICES, INDUSTRIES, CAPABILITIES_DATA } from '@/constants';
import { LOCATIONS } from '@/constants/locationsData';
import api from '@/services/api';
import { getPostSlug } from '@/lib/seo-slug';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://chalkyinfo.com';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/capabilities`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/jobs`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/csr`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sitemap`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/gdpr`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/right-to-work`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/verification`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/modern-slavery-statement`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const capabilityRoutes: MetadataRoute.Sitemap = CAPABILITIES_DATA.map((c) => ({
    url: `${base}/capabilities/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const locationRoutes: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const jobRoutes: MetadataRoute.Sitemap = [];
  // Skipping dynamic job fetch during build to avoid timeout.
  // Using a static fallback job route.
  jobRoutes.push({
    url: `${base}/jobs/it-staffing`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  });




  const categoryRoutesMap = new Map<string, MetadataRoute.Sitemap[0]>();
  const insightRoutesMap = new Map<string, MetadataRoute.Sitemap[0]>();

  let structure: any[] = [];
  let allPosts: any[] = [];
  try {
    const [fetchedStructure, fetchedPosts] = await Promise.all([
      api.getFullSiteStructure().catch(() => []),
      api.getAllPosts(500).catch(() => [])
    ]);
    structure = fetchedStructure || [];
    allPosts = fetchedPosts || [];
  } catch (err) {
    console.error('Failed to fetch site structure/posts for sitemap:', err);
  }

  // Process structure categories and posts
  if (structure && structure.length > 0) {
    structure.forEach((section: any) => {
      if (section.categories) {
        section.categories.forEach((category: any) => {
          if (category.slug) {
            const catUrl = `${base}/insights/${category.slug}`;
            categoryRoutesMap.set(catUrl, {
              url: catUrl,
              lastModified: now,
              changeFrequency: 'weekly',
              priority: 0.7,
            });
          }

          if (category.posts) {
            category.posts.forEach((post: any) => {
              const postSlug = getPostSlug(post);
              if (postSlug) {
                const postUrl = `${base}/insights/${category.slug || 'blogs'}/${postSlug}`;
                const postDate = post.date ? new Date(post.date) : now;
                insightRoutesMap.set(postUrl, {
                  url: postUrl,
                  lastModified: isNaN(postDate.getTime()) ? now : postDate,
                  changeFrequency: 'monthly',
                  priority: 0.8,
                });
              }
            });
          }
        });
      }
    });
  }

  // Also process all standalone posts from API
  if (allPosts && allPosts.length > 0) {
    allPosts.forEach((post: any) => {
      const catSlug = post.category?.slug || 'blogs';
      const catUrl = `${base}/insights/${catSlug}`;
      if (!categoryRoutesMap.has(catUrl)) {
        categoryRoutesMap.set(catUrl, {
          url: catUrl,
          lastModified: now,
          changeFrequency: 'weekly',
          priority: 0.7,
        });
      }

      const postSlug = getPostSlug(post);
      if (postSlug) {
        const postUrl = `${base}/insights/${catSlug}/${postSlug}`;
        if (!insightRoutesMap.has(postUrl)) {
          const postDate = post.date ? new Date(post.date) : now;
          insightRoutesMap.set(postUrl, {
            url: postUrl,
            lastModified: isNaN(postDate.getTime()) ? now : postDate,
            changeFrequency: 'monthly',
            priority: 0.8,
          });
        }
      }
    });
  }

  // Fallback category slugs if none retrieved
  if (categoryRoutesMap.size === 0) {
    const fallbackCategorySlugs = [
      'blogs', 'case-studies', 'newsletters', 'podcasts',
      'industry-events', 'company-announcements', 'achievements', 'awards-milestones',
      'client-transformations', 'impact-metrics', 'testimonials',
      'celebrations', 'team-culture', 'posters', 'community'
    ];
    fallbackCategorySlugs.forEach((slug) => {
      const catUrl = `${base}/insights/${slug}`;
      categoryRoutesMap.set(catUrl, {
        url: catUrl,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  }

  const categoryRoutes = Array.from(categoryRoutesMap.values());
  const insightRoutes = Array.from(insightRoutesMap.values());

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...capabilityRoutes,
    ...industryRoutes,
    ...locationRoutes,
    ...jobRoutes,
    ...categoryRoutes,
    ...insightRoutes,
  ];
}
