import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname, searchParams } = url;

  // 1. Ignore Next.js internal paths and static assets/API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // Skip files (e.g., favicon.ico, images, PDFs)
  ) {
    return NextResponse.next();
  }

  let changed = false;

  // 2. Case Check: Enforce strictly lowercase URLs for consistency
  if (/[A-Z]/.test(pathname)) {
    url.pathname = pathname.toLowerCase();
    changed = true;
  }

  // 3. Clean Slashes: Remove duplicate consecutive slashes (e.g., //cookie-policy -> /cookie-policy)
  if (url.pathname.includes('//')) {
    url.pathname = url.pathname.replace(/\/+/g, '/');
    changed = true;
  }

  // 4. Dynamic/Session ID Check: Strip dynamic session IDs commonly flagged by SEO tools
  const sessionParams = ['sid', 'phpsessid', 'jsessionid', 'sessionid', 'utm_sid'];
  sessionParams.forEach((param) => {
    if (searchParams.has(param)) {
      searchParams.delete(param);
      changed = true;
    }
  });

  // 5. SEO URL Formatting: Replace underscores and spaces with dashes, and remove symbols
  const originalPathname = url.pathname;
  const segments = originalPathname.split('/');
  const cleanedSegments = segments.map((segment) => {
    if (!segment) return segment;

    let cleaned = segment;
    try {
      cleaned = decodeURIComponent(cleaned);
    } catch {
      // Ignore decode errors
    }

    // Replace underscores with dashes
    cleaned = cleaned.replace(/_/g, '-');
    
    // Replace spaces/whitespace with dashes
    cleaned = cleaned.replace(/\s+/g, '-');

    // Convert to lowercase
    cleaned = cleaned.toLowerCase();

    // Remove any character that is not a lowercase letter, number, or dash
    // Extraneous characters such as: !, @, #, $, %, ^, &, *, (, ), [, ], ?, {, }, ;, :, “ are stripped
    cleaned = cleaned.replace(/[^a-z0-9-]/g, '');

    // Collapse consecutive dashes (e.g., "a--b" -> "a-b")
    cleaned = cleaned.replace(/-+/g, '-');

    // Trim leading and trailing dashes from the segment (e.g., "-slug-" -> "slug")
    cleaned = cleaned.replace(/^-+|-+$/g, '');

    return cleaned;
  });

  const cleanedPathname = cleanedSegments.join('/');
  if (cleanedPathname !== originalPathname) {
    url.pathname = cleanedPathname;
    changed = true;
  }

  // 6. Trailing Slash Check: Strip trailing slash (except for homepage "/") to keep canonical URL consistency
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    changed = true;
  }

  // If the URL was modified, perform a 301 Permanent Redirect to pass SEO checks
  if (changed) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
