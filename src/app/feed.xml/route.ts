import { SERVICES, INDUSTRIES } from '@/constants';
import { LOCATIONS } from '@/constants/locationsData';
import { INSIGHTS_DETAILED } from '@/constants/insightsData';

export async function GET() {
  const base = 'https://chalkyinfo.com';
  
  // Core pages mapping
  const staticPages = [
    { 
      url: '', 
      title: 'Chalky InfoTech - Global IT Staffing & Consulting', 
      desc: 'Expert IT staffing and consulting services for modern enterprises. Connecting world-class talent with global opportunities.' 
    },
    { 
      url: '/services', 
      title: 'Our Services | Chalky InfoTech', 
      desc: 'Discover our comprehensive recruitment and staffing services, from IT Staffing to Executive Search.' 
    },
    { 
      url: '/industries', 
      title: 'Industries We Serve | Chalky InfoTech', 
      desc: 'Specialized recruitment across key global industries including Technology, Finance, and Healthcare.' 
    },
    { 
      url: '/jobs', 
      title: 'Global Job Board | Chalky InfoTech', 
      desc: 'Find your next career opportunity. Explore open roles across our global network.' 
    },
    { 
      url: '/insights', 
      title: 'Latest Insights & News | Chalky InfoTech', 
      desc: 'Read our latest thoughts on recruitment, technology, and market trends.' 
    },
  ];

  // Helper to construct XML items
  const buildItem = (url: string, title: string, description: string, date: string) => `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${description}]]></description>
      <pubDate>${date}</pubDate>
    </item>`;

  const now = new Date().toUTCString();

  const getCategorySlug = (categoryName: string) => {
    return categoryName
      .toLowerCase()
      .replace(/&/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const items = [
    ...staticPages.map(p => buildItem(`${base}${p.url}`, p.title, p.desc, now)),
    ...SERVICES.map(s => buildItem(`${base}/services/${s.slug}`, `${s.label} Services`, s.desc, now)),
    ...INDUSTRIES.map(i => buildItem(`${base}/industries/${i.slug}`, `${i.label} Recruitment`, `Recruitment solutions and workforce services for the ${i.label} sector.`, now)),
    ...LOCATIONS.map(l => buildItem(`${base}/locations/${l.slug}`, `Chalky InfoTech Hub: ${l.city}`, l.description, now)),
    ...INSIGHTS_DETAILED.map(insight => buildItem(`${base}/insights/${getCategorySlug(insight.category)}/${insight.slug}`, insight.title, insight.excerpt, new Date(insight.date).toUTCString()))
  ].join('');

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Chalky InfoTech Updates &amp; Services</title>
    <link>${base}</link>
    <description>The latest updates, services, and insights from Chalky InfoTech - Global IT Staffing &amp; Consulting.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
