'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const backdropRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      phone: formData.get('phone') as string,
      role: formData.get('role') as string,
      budget: formData.get('budget') as string,
      description: formData.get('description') as string,
      source: formData.get('source') as string,
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

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${visible ? 'bg-black/50' : 'bg-black/0'}`}
    >
      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700"
          aria-label="Schliessen"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Finden Sie Ihren perfekten Entwickler
            </h3>
            <p className="text-gray-600">
              Kostenlos und unverbindlich. Antwort innerhalb von 24 Stunden.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
              Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
              Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Vollstandiger Name
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  placeholder="Max Mustermann"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail-Adresse <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  placeholder="max@beispiel.de"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                />
              </div>
            </div>

            {/* Company & Phone row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-company" className="block text-sm font-medium text-gray-700 mb-1">
                  Unternehmen <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="modal-company"
                  name="company"
                  required
                  placeholder="Firmenname GmbH"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefonnummer <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  required
                  placeholder="+49 123 456 7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                />
              </div>
            </div>

            {/* Role dropdown */}
            <div>
              <label htmlFor="modal-role" className="block text-sm font-medium text-gray-700 mb-1">
                Welche Rolle suchen Sie? <span className="text-red-500">*</span>
              </label>
              <select
                id="modal-role"
                name="role"
                required
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
              >
                <option value="" disabled>Bitte wahlen...</option>
                <option value="Entwickler">Entwickler</option>
                <option value="Designer">Designer</option>
                <option value="Marketer">Marketer</option>
                <option value="Produktmanager">Produktmanager</option>
                <option value="Projektmanager">Projektmanager</option>
                <option value="Assistent">Assistent</option>
              </select>
            </div>

            {/* Budget dropdown */}
            <div>
              <label htmlFor="modal-budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget pro Monat
              </label>
              <select
                id="modal-budget"
                name="budget"
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
              >
                <option value="">Bitte wahlen...</option>
                <option value="Unter 5.000&euro;">Unter 5.000&euro;</option>
                <option value="5.000&euro; - 10.000&euro;">5.000&euro; - 10.000&euro;</option>
                <option value="10.000&euro; - 25.000&euro;">10.000&euro; - 25.000&euro;</option>
                <option value="25.000&euro; - 50.000&euro;">25.000&euro; - 50.000&euro;</option>
                <option value="&Uuml;ber 50.000&euro;">&Uuml;ber 50.000&euro;</option>
              </select>
            </div>

            {/* Description textarea */}
            <div>
              <label htmlFor="modal-description" className="block text-sm font-medium text-gray-700 mb-1">
                Projektbeschreibung
              </label>
              <textarea
                id="modal-description"
                name="description"
                rows={3}
                placeholder="Beschreiben Sie kurz Ihr Projekt und Ihre Anforderungen..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900 resize-vertical"
              />
            </div>

            {/* Source dropdown */}
            <div>
              <label htmlFor="modal-source" className="block text-sm font-medium text-gray-700 mb-1">
                Wie haben Sie von uns erfahren?
              </label>
              <select
                id="modal-source"
                name="source"
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
              >
                <option value="">Bitte wahlen...</option>
                <option value="Google-Suche">Google-Suche</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Empfehlung">Empfehlung</option>
                <option value="Social Media">Social Media</option>
                <option value="Andere">Andere</option>
              </select>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 text-white font-semibold bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Kostenlos anfragen'}
            </button>

            <p className="text-center text-sm text-gray-500">
              Keine Kosten bis zur Einstellung
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
