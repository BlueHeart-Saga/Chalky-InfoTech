import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modern Slavery Statement',
  description: 'Read Chalky Infotech\'s Modern Slavery Statement, outlining our policies and commitment to preventing modern slavery and human trafficking in our business and supply chains.',
  alternates: {
    canonical: '/modern-slavery-statement',
  },
};

export default function ModernSlaveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
