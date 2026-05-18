'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Ensures that the page scrolls to the top instantly whenever the route changes.
 * This provides a smoother and more predictable user experience across navigation.
 */
export default function PageScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // We use a small timeout to ensure the DOM has updated before scrolling
    // and to avoid conflicts with browser-native scroll restoration.
    const scrollHandler = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as any, // Cast to 'any' because 'instant' is supported but might not be in TS definitions for all targets
      });
    };

    scrollHandler();
  }, [pathname]);

  return null;
}
