import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Candidate Verification',
  description: 'Access Chalky Infotech\'s secure candidate verification platform to authenticate professional credentials, employment histories, and compliance documents.',
};

export default function VerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
