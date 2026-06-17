import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the official Terms & Conditions governing your use of the Chalky Infotech website, platform solutions, and recruitment services.',
  alternates: {
    canonical: '/terms-conditions',
  },
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
