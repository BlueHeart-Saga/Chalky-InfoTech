import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Industry Trends',
  description: 'Explore Chalky Infotech\'s Insights Hub. Read our latest blogs, sector analyses, podcasts, and newsletters covering technical recruitment, cloud talent, and hiring strategies.',
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
