import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Journey & Sitemap',
  description: 'View the site architecture and sitemap of Chalky Infotech to easily navigate our strategic services, industry verticals, resources, and compliance frameworks.',
  alternates: {
    canonical: '/sitemap',
  },
};

export default function SitemapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
