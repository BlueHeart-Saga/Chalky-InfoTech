import type { Metadata } from 'next';
import PrivacyPolicyClient from './PrivacyPolicyClient';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Privacy Policy',
  description: 'Read Chalky Infotech\'s Privacy Policy. Learn how we collect, store, protect, and process user and candidate data in compliance with privacy laws.',
  keywords: ['privacy policy', 'candidate privacy UK', 'data security policy'],
  url: '/privacy-policy',
  path: SEO_IMAGE_CONFIG.legal.path,
  alt: SEO_IMAGE_CONFIG.legal.alt
});

export default function Page() {
  return <PrivacyPolicyClient />;
}
