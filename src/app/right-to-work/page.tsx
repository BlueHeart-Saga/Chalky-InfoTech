import type { Metadata } from 'next';
import RightToWorkClient from './RightToWorkClient';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Right to Work Verification',
  description: 'Review Chalky Infotech\'s Right to Work validation guidelines and employment eligibility check processes for candidate onboarding in the UK.',
  keywords: ['right to work UK', 'employment verification recruitment', 'candidate compliance'],
  url: '/right-to-work',
  path: SEO_IMAGE_CONFIG.legal.path,
  alt: SEO_IMAGE_CONFIG.legal.alt
});

export default function Page() {
  return <RightToWorkClient />;
}
