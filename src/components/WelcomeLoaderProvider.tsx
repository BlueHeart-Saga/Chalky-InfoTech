'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeLoader from './WelcomeLoader';

export default function WelcomeLoaderProvider({ children }: { children: React.ReactNode }) {
  // null = "unknown until hydration" — prevents any flash during SSR → client transition
  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the page is being reloaded/refreshed
    const navigationEntries = performance.getEntriesByType('navigation');
    const isReload =
      navigationEntries.length > 0 &&
      (navigationEntries[0] as PerformanceNavigationTiming).type === 'reload';

    if (isReload) {
      sessionStorage.removeItem('chalky_welcomed_session');
    }

    const hasVisited = sessionStorage.getItem('chalky_welcomed_session');

    if (!hasVisited) {
      // First visit — show the loader
      setIsFirstVisit(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('chalky_welcomed_session', 'true');
      }, 2800);
      return () => clearTimeout(timer);
    } else {
      // Returning visitor — skip loader entirely, reveal content immediately
      setIsFirstVisit(false);
      setLoading(false);
    }
  }, []);

  // Before hydration resolves (isFirstVisit === null), keep content invisible
  // so there is zero flash regardless of visit type.
  const contentVisible = isFirstVisit === false || (isFirstVisit === true && !loading);

  return (
    <>
      {/* Loader — only mounted on genuine first visits */}
      {isFirstVisit === true && (
        <AnimatePresence>
          {loading && <WelcomeLoader />}
        </AnimatePresence>
      )}

      {/* Page content — hidden until we know the visit state */}
      <div
        style={{ visibility: isFirstVisit === null ? 'hidden' : undefined }}
        className={`transition-opacity duration-700 ease-out ${
          contentVisible ? 'opacity-100' : 'opacity-0 pointer-events-none h-screen overflow-hidden'
        }`}
      >
        {children}
      </div>
    </>
  );
}
