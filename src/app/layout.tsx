import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import PageScrollRestoration from '@/components/PageScrollRestoration';
import WelcomeLoaderProvider from '@/components/WelcomeLoaderProvider';
import CanonicalLink from '@/components/CanonicalLink';

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
  metadataBase: new URL('https://chalkyinfo.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://chalkyinfo.com',
    siteName: 'Chalky Infotech',
    title: 'Chalky Infotech | Enterprise Recruitment & Consulting',
    description:
      'Specialist technology and digital recruitment partner supporting organisations with high-quality talent.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <CanonicalLink />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var isBot = /Googlebot|bingbot|yandex|baiduspider|slurp|crawler|spider/i.test(navigator.userAgent);
                  var hasVisited = sessionStorage.getItem('chalky_welcomed_session');
                  if (!isBot && !hasVisited) {
                    document.documentElement.classList.add('welcome-loading-active');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .welcome-loading-active .content-wrapper-seo {
                opacity: 0 !important;
                pointer-events: none !important;
                height: 100vh !important;
                overflow: hidden !important;
              }
            `
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-poppins)] bg-white text-[#1A1A1A] overflow-x-hidden relative">
        <WelcomeLoaderProvider>
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
                "logo": "https://chalkyinfo.com/icon.png",
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
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
          <Suspense fallback={null}>
            <PageScrollRestoration />
          </Suspense>
        </WelcomeLoaderProvider>
      </body>
    </html>
  );
}
