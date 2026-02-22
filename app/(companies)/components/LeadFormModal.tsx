'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/i18n/LanguageContext';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const { t } = useLanguage();
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
      website: formData.get('website') as string,
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
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t('form.findDeveloper')}
            </h3>
            <p className="text-gray-600">
              {t('form.freeResponse')}
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
              {t('form.successMessage')}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
              {t('form.errorMessage')}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot field – hidden from real users, traps bots */}
            <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Name & Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.fullName')}
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  placeholder={t('form.namePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.workEmail')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  placeholder={t('form.emailPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                />
              </div>
            </div>

            {/* Company & Phone row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-company" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.company')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="modal-company"
                  name="company"
                  required
                  placeholder={t('form.companyPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('form.phone')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  required
                  placeholder={t('form.phonePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
                />
              </div>
            </div>

            {/* Role dropdown */}
            <div>
              <label htmlFor="modal-role" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.whatRole')} <span className="text-red-500">*</span>
              </label>
              <select
                id="modal-role"
                name="role"
                required
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
              >
                <option value="" disabled>{t('form.pleaseSelect')}</option>
                <option value="Developer">{t('form.developer')}</option>
                <option value="Designer">{t('form.designer')}</option>
                <option value="Marketer">{t('form.marketer')}</option>
                <option value="Product Manager">{t('form.productManager')}</option>
                <option value="Project Manager">{t('form.projectManager')}</option>
                <option value="Assistant">{t('form.assistant')}</option>
              </select>
            </div>

            {/* Budget dropdown */}
            <div>
              <label htmlFor="modal-budget" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.monthlyBudget')}
              </label>
              <select
                id="modal-budget"
                name="budget"
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
              >
                <option value="">{t('form.pleaseSelect')}</option>
                <option value="Under $5,000">Under $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="Over $50,000">Over $50,000</option>
              </select>
            </div>

            {/* Description textarea */}
            <div>
              <label htmlFor="modal-description" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.whatLookingFor')}
              </label>
              <textarea
                id="modal-description"
                name="description"
                rows={3}
                placeholder={t('form.descriptionPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900 resize-vertical"
              />
            </div>

            {/* Source dropdown */}
            <div>
              <label htmlFor="modal-source" className="block text-sm font-medium text-gray-700 mb-1">
                {t('form.howHeard')}
              </label>
              <select
                id="modal-source"
                name="source"
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
              >
                <option value="">{t('form.pleaseSelect')}</option>
                <option value="Google Search">{t('form.googleSearch')}</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">{t('form.referral')}</option>
                <option value="Social Media">{t('form.socialMedia')}</option>
                <option value="Other">{t('form.other')}</option>
              </select>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 text-white font-semibold bg-[rgb(23,162,69)] rounded-lg hover:bg-[rgb(20,145,60)] transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('form.submitting') : t('form.getStarted')}
            </button>

            <p className="text-center text-sm text-gray-500">
              {t('form.noCostUntilHire')}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
