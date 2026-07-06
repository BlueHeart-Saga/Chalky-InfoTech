import type { Metadata } from 'next';
import VerificationClient from './VerificationClient';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Background Verification Policy',
  description: 'Learn about Chalky Infotech\'s background screening and credentials verification protocols for vetting candidate histories and qualifications.',
  keywords: ['background verification', 'candidate screening UK', 'credentials checking policy'],
  url: '/verification',
  path: SEO_IMAGE_CONFIG.legal.path,
  alt: SEO_IMAGE_CONFIG.legal.alt
});

export default function Page() {
  return <VerificationClient />;
}
