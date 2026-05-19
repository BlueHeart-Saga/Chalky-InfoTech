import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import PageScrollRestoration from '@/components/PageScrollRestoration';

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
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Chalky Infotech",
              "url": "https://chalkyinfo.com",
              "logo": "https://chalkyinfo.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44 7503 140975",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.linkedin.com/company/chalkyinfotech",
                "https://twitter.com/chalkyinfotech"
              ]
            })
          }}
        />
        <Suspense fallback={
          <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF8F5]">
            <div className="w-12 h-12 rounded-full border-4 border-[#7A1F5C]/15 border-t-[#7A1F5C] animate-spin mb-4"></div>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#7A1F5C]/60">Loading sector intelligence...</p>
          </div>
        }>
          <main>{children}</main>
        </Suspense>
        <Footer />
        <ScrollToTop />
        <Suspense fallback={null}>
          <PageScrollRestoration />
        </Suspense>
      </body>
    </html>
  );
}
