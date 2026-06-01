'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeLoader from './WelcomeLoader';

export default function WelcomeLoaderProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    
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
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('chalky_welcomed_session', 'true');
        document.documentElement.classList.remove('welcome-loading-active');
      }, 2800);
      return () => clearTimeout(timer);
    } else {
      // Returning visitor
      document.documentElement.classList.remove('welcome-loading-active');
    }
  }, []);

  return (
    <>
      {/* Loader — only mounted on genuine first visits after client-side hydration */}
      {mounted && isFirstVisit && (
        <AnimatePresence>
          {loading && <WelcomeLoader />}
        </AnimatePresence>
      )}

      {/* Page content — fully visible in SSR/crawlers, hidden on client only if first visit */}
      <div className="content-wrapper-seo transition-opacity duration-700 ease-out">
        {children}
      </div>
    </>
  );
}
