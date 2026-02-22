'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useLeadFormModal } from './LeadFormModalProvider';

export default function StickyLeadWidget() {
  const { isModalOpen } = useLeadFormModal();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Show after 3 seconds delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      source: 'sticky-widget',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't render if dismissed, not yet visible, or modal is open
  if (isDismissed || !isVisible || isModalOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-[9998] sm:w-[320px]">
      {/* Collapsed bubble button */}
      <div
        className={`transition-all duration-300 ${isExpanded ? 'opacity-0 scale-0 h-0' : 'opacity-100 scale-100'}`}
      >
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-[rgb(0,159,255)] text-white shadow-lg hover:bg-[rgb(0,140,230)] hover:scale-110 transition-all duration-200"
            aria-label="Kontaktformular offnen"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        )}
      </div>

      {/* Expanded form panel */}
      <div
        className={`transition-all duration-300 origin-bottom-right ${
          isExpanded
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none h-0 overflow-hidden'
        }`}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
            <h3 className="text-white font-semibold text-sm">
              Entwickler in 72h finden
            </h3>
            <button
              onClick={() => {
                setIsExpanded(false);
                setIsDismissed(true);
              }}
              className="text-gray-400 hover:text-white transition-colors w-6 h-6 flex items-center justify-center"
              aria-label="Schliessen"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            {submitStatus === 'success' ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Vielen Dank!</p>
                <p className="text-xs text-gray-500">Wir melden uns in Kuerze bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Telefonnummer *"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                  />
                </div>

                {submitStatus === 'error' && (
                  <p className="text-xs text-red-600">Ein Fehler ist aufgetreten. Bitte erneut versuchen.</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 text-white font-semibold text-sm bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Jetzt starten'}
                </button>

                <p className="text-center text-[11px] text-gray-400">
                  Kostenlos & unverbindlich
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
