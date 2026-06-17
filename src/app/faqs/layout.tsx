import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs)',
  description: 'Find answers to frequently asked questions about Chalky Infotech\'s IT recruitment services, candidate screening, compliance, onboarding, and enterprise talent solutions.',
  alternates: {
    canonical: '/faqs',
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
