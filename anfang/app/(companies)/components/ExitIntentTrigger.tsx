'use client';

import { useEffect, useRef } from 'react';
import { useLeadFormModal } from './LeadFormModalProvider';

export default function ExitIntentTrigger() {
  const { openModal } = useLeadFormModal();
  const hasTriggered = useRef(false);
  const pageLoadTime = useRef(Date.now());

  useEffect(() => {
    // Don't run on touch devices
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Check if already triggered this session
    if (sessionStorage.getItem('exit-intent-triggered') === 'true') {
      hasTriggered.current = true;
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse moves toward top of viewport
      if (e.clientY > 10) return;

      // Must have been on page for at least 10 seconds
      if (Date.now() - pageLoadTime.current < 10000) return;

      // Only trigger once
      if (hasTriggered.current) return;

      hasTriggered.current = true;
      sessionStorage.setItem('exit-intent-triggered', 'true');
      openModal();
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [openModal]);

  return null;
}
