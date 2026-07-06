import type { Metadata } from 'next';
import ModernSlaveryClient from './ModernSlaveryClient';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Modern Slavery Statement',
  description: 'Read Chalky Infotech\'s Modern Slavery and Human Trafficking Statement, detailing our commitment to ethical recruiting and supplier transparency.',
  keywords: ['modern slavery statement', 'ethical recruitment UK', 'human trafficking policy'],
  url: '/modern-slavery-statement',
  path: SEO_IMAGE_CONFIG.legal.path,
  alt: SEO_IMAGE_CONFIG.legal.alt
});

export default function Page() {
  return <ModernSlaveryClient />;
}
