'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/app/i18n/LanguageContext';

export default function LeadForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {t('form.startYourProject')}
        </h3>
        <p className="text-gray-600">
          {t('form.fillOutForm')}
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
            <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.fullName')}
            </label>
            <input
              type="text"
              id="lead-name"
              name="name"
              placeholder={t('form.namePlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.workEmail')} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="lead-email"
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
            <label htmlFor="lead-company" className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.company')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lead-company"
              name="company"
              required
              placeholder={t('form.companyPlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">
              {t('form.phone')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="lead-phone"
              name="phone"
              required
              placeholder={t('form.phonePlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
            />
          </div>
        </div>

        {/* Role dropdown */}
        <div>
          <label htmlFor="lead-role" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.whatRole')} <span className="text-red-500">*</span>
          </label>
          <select
            id="lead-role"
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

        {/* Description textarea */}
        <div>
          <label htmlFor="lead-description" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.whatLookingFor')}
          </label>
          <textarea
            id="lead-description"
            name="description"
            rows={4}
            placeholder={t('form.descriptionPlaceholder')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900 resize-vertical"
          />
        </div>

        {/* Budget dropdown */}
        <div>
          <label htmlFor="lead-budget" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.monthlyBudget')}
          </label>
          <select
            id="lead-budget"
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

        {/* Source dropdown */}
        <div>
          <label htmlFor="lead-source" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.howHeard')}
          </label>
          <select
            id="lead-source"
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
  );
}
