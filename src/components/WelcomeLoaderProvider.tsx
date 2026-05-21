'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeLoader from './WelcomeLoader';

export default function WelcomeLoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    // Check if the page is being reloaded/refreshed
    const navigationEntries = performance.getEntriesByType('navigation');
    const isReload = navigationEntries.length > 0 && (navigationEntries[0] as PerformanceNavigationTiming).type === 'reload';

    if (isReload) {
      sessionStorage.removeItem('chalky_welcomed_session');
    }

    const hasVisited = sessionStorage.getItem('chalky_welcomed_session');
    if (!hasVisited) {
      setIsFirstVisit(true);
      // Wait for loader to complete before hiding
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('chalky_welcomed_session', 'true');
      }, 2800);
      return () => clearTimeout(timer);
    } else {
      setIsFirstVisit(false);
      setLoading(false);
    }
  }, []);

  return (
    <>
      {isFirstVisit && (
        <AnimatePresence>
          {loading && <WelcomeLoader />}
        </AnimatePresence>
      )}
      <div 
        className={`transition-opacity duration-1000 ease-out ${
          isFirstVisit && loading ? 'opacity-0 pointer-events-none h-screen overflow-hidden' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
}
