import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about the cookies and tracking technologies used on the Chalky Infotech platform to enhance your experience, customize content, and analyze website traffic.',
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
