import type { Metadata } from 'next';
import GdprClient from './GdprClient';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'GDPR Compliance',
  description: 'Learn about Chalky Infotech\'s GDPR compliance measures, candidate data rights, processing principles, and security standards under EU and UK data laws.',
  keywords: ['GDPR compliance', 'data privacy recruitment', 'candidate data rights UK'],
  url: '/gdpr',
  path: SEO_IMAGE_CONFIG.legal.path,
  alt: SEO_IMAGE_CONFIG.legal.alt
});

export default function Page() {
  return <GdprClient />;
}
