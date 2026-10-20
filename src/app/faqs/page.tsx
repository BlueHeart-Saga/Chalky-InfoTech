import type { Metadata } from 'next';
import FaqsClient from './FaqsClient';
import FAQSchema from '@/components/FAQSchema';
import { ALL_FAQS } from '@/constants/faqsData';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

export const metadata = buildPageMetadataWithImage({
  title: 'Frequently Asked Questions (FAQs)',
  description: 'Find answers to common questions about Chalky Infotech\'s global recruitment, technology staffing, compliance, executive search, and contractor onboarding.',
  keywords: ['recruitment FAQs', 'staffing agency FAQ UK', 'contractor compliance FAQ', 'Chalky Infotech support'],
  url: '/faqs',
  path: SEO_IMAGE_CONFIG.faqs.path,
  alt: SEO_IMAGE_CONFIG.faqs.alt
});

export default function Page() {
  const flattenedFaqs = ALL_FAQS.flatMap(cat => 
    cat.items.map(item => ({
      question: item.q,
      answer: item.a
    }))
  );

  return (
    <>
      <FAQSchema items={flattenedFaqs} />
      <FaqsClient />
    </>
  );
}
