'use client';

import { usePathname } from 'next/navigation';

export default function CanonicalLink() {
  const pathname = usePathname();
  // Strip trailing slash to maintain URL consistency (except for homepage "/")
  const cleanPathname = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const canonicalUrl = `https://chalkyinfo.com${cleanPathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
