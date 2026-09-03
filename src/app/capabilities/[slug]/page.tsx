import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CAPABILITIES_DATA } from '@/constants/capabilitiesData';
import { buildPageMetadataWithImage } from '@/lib/seo-images';
import CapabilityDetailClient from '@/sections/capabilities/CapabilityDetailClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return CAPABILITIES_DATA.map((cap) => ({
    slug: cap.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const capability = CAPABILITIES_DATA.find((c) => c.slug === slug);

  if (!capability) {
    return { title: 'Capability Not Found' };
  }

  return buildPageMetadataWithImage({
    title: `${capability.title} Recruitment | Talent Solutions | Chalky Infotech`,
    description: capability.heroDesc,
    keywords: [
      capability.title,
      `${capability.title} recruitment`,
      `${capability.title} staffing`,
      ...capability.rolesDetailed.slice(0, 5).map((r) => r.title),
    ],
    url: `/capabilities/${slug}`,
    path: '/hero-capabilities.png',
    alt: `${capability.title} specialized recruitment`
  });
}

export default async function CapabilityDetailPage({ params }: Props) {
  const { slug } = await params;
  const capability = CAPABILITIES_DATA.find((c) => c.slug === slug);

  if (!capability) {
    notFound();
  }

  return <CapabilityDetailClient capability={capability} />;
}
