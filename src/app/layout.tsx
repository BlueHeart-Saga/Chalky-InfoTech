import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Chalky Infotech | Enterprise Recruitment & Consulting',
    template: '%s | Chalky Infotech',
  },
  description:
    'Chalky Infotech is a specialist technology and digital recruitment partner supporting organisations with high-quality talent across cloud, data, software and transformation.',
  keywords: ['recruitment', 'IT staffing', 'tech talent', 'consulting', 'cloud', 'DevOps', 'AI', 'data engineering'],
  authors: [{ name: 'Chalky Infotech' }],
  creator: 'Chalky Infotech',
  metadataBase: new URL('https://www.chalkyinfo.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.chalkyinfo.com',
    siteName: 'Chalky Infotech',
    title: 'Chalky Infotech | Enterprise Recruitment & Consulting',
    description:
      'Specialist technology and digital recruitment partner supporting organisations with high-quality talent.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chalky Infotech | Enterprise Recruitment & Consulting',
    description: 'Specialist technology and digital recruitment partner.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-[family-name:var(--font-poppins)] bg-white text-[#1A1A1A] overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
