import type { Metadata } from 'next';
import TermsConditionsClient from './TermsConditionsClient';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions for using the Chalky Infotech website, covering usage rules, intellectual property, and liability limitations.',
  keywords: ['terms and conditions', 'website terms UK', 'recruitment agency policy'],
  url: '/terms-conditions',
  path: SEO_IMAGE_CONFIG.legal.path,
  alt: SEO_IMAGE_CONFIG.legal.alt
});

export default function Page() {
  return <TermsConditionsClient />;
}
