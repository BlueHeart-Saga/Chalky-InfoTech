import { MetadataRoute } from 'next';
import { SERVICES, INDUSTRIES } from '@/constants';
import { LOCATIONS } from '@/constants/locationsData';
import api from '@/services/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://chalkyinfo.com';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
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

  const categoryRoutes: MetadataRoute.Sitemap = [];
  const insightRoutes: MetadataRoute.Sitemap = [];

  let structure: any[] = [];
  try {
    structure = await api.getFullSiteStructure();
  } catch (err) {
    console.error('Failed to fetch site structure for sitemap:', err);
  }

  if (structure && structure.length > 0) {
    structure.forEach((section: any) => {
      if (section.categories) {
        section.categories.forEach((category: any) => {
          categoryRoutes.push({
            url: `${base}/insights/${category.slug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.7,
          });

          if (category.posts) {
            category.posts.forEach((post: any) => {
              const postDate = post.date ? new Date(post.date) : now;
              insightRoutes.push({
                url: `${base}/insights/${category.slug}/${post.slug || post.id}`,
                lastModified: isNaN(postDate.getTime()) ? now : postDate,
                changeFrequency: 'monthly',
                priority: 0.8,
              });
            });
          }
        });
      }
    });
  } else {
    // Fallback if API is offline
    const fallbackCategorySlugs = [
      'blogs', 'case-studies', 'newsletters', 'podcasts',
      'industry-events', 'company-announcements', 'achievements', 'awards-milestones',
      'client-transformations', 'impact-metrics', 'testimonials',
      'celebrations', 'team-culture', 'posters', 'community'
    ];
    fallbackCategorySlugs.forEach((slug) => {
      categoryRoutes.push({
        url: `${base}/insights/${slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  }

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...locationRoutes,
    ...categoryRoutes,
    ...insightRoutes,
  ];
}
