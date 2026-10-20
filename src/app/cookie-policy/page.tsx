import type { Metadata } from 'next';
import CookiePolicyClient from './CookiePolicyClient';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Cookie Policy',
  description: 'Read Chalky Infotech\'s Cookie Policy to understand how we use cookies, tracking technologies, and manage user preferences on our website.',
  keywords: ['cookie policy', 'cookies UK', 'Chalky Infotech privacy settings'],
  url: '/cookie-policy',
  path: SEO_IMAGE_CONFIG.legal.path,
  alt: SEO_IMAGE_CONFIG.legal.alt
});

export default function Page() {
  return <CookiePolicyClient />;
}
