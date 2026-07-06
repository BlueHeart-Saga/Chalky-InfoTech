import type { Metadata } from 'next';
import DisclaimerClient from './DisclaimerClient';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Recruitment Disclaimer',
  description: 'Read Chalky Infotech\'s recruitment disclaimer regarding candidate placement, job guarantees, third-party information, and candidate responsibilities.',
  keywords: ['recruitment disclaimer', 'job guarantees UK', 'disclaimer policy'],
  url: '/disclaimer',
  path: SEO_IMAGE_CONFIG.legal.path,
  alt: SEO_IMAGE_CONFIG.legal.alt
});

export default function Page() {
  return <DisclaimerClient />;
}
