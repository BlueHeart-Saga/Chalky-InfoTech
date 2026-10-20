import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recruitment Disclaimer',
  description: 'Read the Chalky Infotech website disclaimer, containing statements on terms of use, limitation of liability, information accuracy, and professional recruitment services.',
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
