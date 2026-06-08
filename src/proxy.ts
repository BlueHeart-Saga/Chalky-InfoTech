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
