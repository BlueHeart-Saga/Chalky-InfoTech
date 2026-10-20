import type { Metadata } from 'next';
import SitemapClient from './SitemapClient';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Platform Journey & Sitemap',
  description: 'Navigate the complete site structure of Chalky Infotech to access our recruitment services, industry sectors, insights, jobs, and compliance policies.',
  keywords: ['Chalky Infotech sitemap', 'site map UK', 'workforce solutions navigation'],
  url: '/sitemap',
  path: SEO_IMAGE_CONFIG.sitemap.path,
  alt: SEO_IMAGE_CONFIG.sitemap.alt
});

export default function Page() {
  return <SitemapClient />;
}
