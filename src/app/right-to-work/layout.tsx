import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Right to Work Verification',
  description: 'Understand Chalky Infotech\'s Right to Work validation guidelines, verifying candidate eligibility and legal requirements for placing tech talent in the UK.',
};

export default function RightToWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
