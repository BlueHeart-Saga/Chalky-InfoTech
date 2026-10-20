import type { Metadata } from 'next';

export const SEO_IMAGE_CONFIG = {
  home: {
    path: "/og-image.png",
    alt: "Chalky Infotech specialist technology and digital recruitment partner",
    title: "Chalky Infotech | Enterprise Recruitment & Consulting"
  },
  about: {
    path: "/hero-about.png",
    alt: "About Chalky Infotech global recruitment company",
    title: "About Chalky Infotech | Global Technology Recruitment Partner"
  },
  services: {
    path: "/hero-services.png",
    alt: "Chalky Infotech specialist recruitment and workforce services",
    title: "Our Recruitment Services | Chalky Infotech"
  },
  industries: {
    path: "/hero-industries.png",
    alt: "Chalky Infotech industry-specific staffing expertise",
    title: "Industries We Serve | Chalky Infotech"
  },
  jobs: {
    path: "/hero-jobs.png",
    alt: "Find technology careers at Chalky Infotech job board",
    title: "Search Technology Jobs & Careers | Chalky Infotech"
  },
  contact: {
    path: "/hero-contact.png",
    alt: "Contact Chalky Infotech recruitment team",
    title: "Contact Chalky Infotech | Hire Top Talent"
  },
  insights: {
    path: "/og-image.png",
    alt: "Chalky thought leadership, blogs and sector analysis",
    title: "Chalky Insights & Trends | Technology Recruitment"
  },
  faqs: {
    path: "/og-image.png",
    alt: "Frequently Asked Questions about Chalky Infotech recruitment services",
    title: "Frequently Asked Questions (FAQs) | Chalky Infotech"
  },
  csr: {
    path: "/og-image.png",
    alt: "Corporate Social Responsibility and ESG commitments at Chalky Infotech",
    title: "CSR Report | People, Planet & Purpose | Chalky Infotech"
  },
  sitemap: {
    path: "/sitemap-illustration.png",
    alt: "Chalky Infotech website sitemap index",
    title: "Sitemap | Chalky Infotech"
  },
  legal: {
    path: "/og-image.png",
    alt: "Chalky Infotech terms, privacy, and cookies compliance documents",
    title: "Compliance & Legal Documents | Chalky Infotech"
  }
};

type SEOImageInput = {
  title: string;
  description: string;
  path: string;
  alt: string;
  url: string;
  keywords?: string[];
  robots?: any;
};

export function buildPageMetadataWithImage(input: SEOImageInput): Metadata {
  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: {
      canonical: input.url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: `https://chalkyinfo.com${input.url}`,
      siteName: 'Chalky Infotech',
      title: input.title,
      description: input.description,
      images: [
        {
          url: input.path.startsWith('http') ? input.path : `https://chalkyinfo.com${input.path}`,
          width: 1200,
          height: 630,
          alt: input.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [input.path.startsWith('http') ? input.path : `https://chalkyinfo.com${input.path}`],
    },
    robots: input.robots || {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    other: {
      'geo.region': 'GB',
      'geo.placename': 'United Kingdom',
      'language': 'en-GB',
    },
  };
}
