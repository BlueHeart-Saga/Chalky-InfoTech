import { MetadataRoute } from 'next';
import { SERVICES, INDUSTRIES } from '@/constants';
import { LOCATIONS } from '@/constants/locationsData';
import { INSIGHTS_DETAILED } from '@/constants/insightsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.chalkyinfo.com';
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
    { url: `${base}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/sitemap`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/gdpr`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/right-to-work`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/verification`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
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

function getCategorySlug(categoryName: string) {
  return categoryName
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

  const categorySlugs = [
    'blogs', 'case-studies', 'newsletters', 'podcasts',
    'industry-events', 'company-announcements', 'achievements', 'awards-milestones',
    'client-transformations', 'impact-metrics', 'testimonials',
    'celebrations', 'team-culture', 'posters', 'community'
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${base}/insights/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS_DETAILED.map((i) => ({
    url: `${base}/insights/${getCategorySlug(i.category)}/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...locationRoutes,
    ...categoryRoutes,
    ...insightRoutes
  ];
}
