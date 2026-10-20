import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR Compliance',
  description: 'Learn about Chalky Infotech\'s commitment to GDPR compliance, how we protect candidate data privacy, and your rights under global data protection regulations.',
  alternates: {
    canonical: '/gdpr',
  },
};

export default function GDPRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
