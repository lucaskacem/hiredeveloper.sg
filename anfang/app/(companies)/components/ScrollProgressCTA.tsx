'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLeadFormModal } from './LeadFormModalProvider';

export default function ScrollProgressCTA() {
  const { isModalOpen } = useLeadFormModal();
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const progress = Math.min((scrollTop / docHeight) * 100, 100);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isModalOpen || scrollProgress < 1) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9997] pointer-events-none">
      <div className="h-[2px] bg-transparent">
        <div
          className="h-full bg-[rgb(0,159,255)] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
}
