'use client';

import { useState, FormEvent } from 'react';

export default function LeadForm() {
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
          Starten Sie Ihr Projekt
        </h3>
        <p className="text-gray-600">
          Fullen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.
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
            <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">
              Vollstandiger Name
            </label>
            <input
              type="text"
              id="lead-name"
              name="name"
              placeholder="Max Mustermann"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail-Adresse <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="lead-email"
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
            <label htmlFor="lead-company" className="block text-sm font-medium text-gray-700 mb-1">
              Unternehmen <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lead-company"
              name="company"
              required
              placeholder="Firmenname GmbH"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefonnummer <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="lead-phone"
              name="phone"
              required
              placeholder="+49 123 456 7890"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900"
            />
          </div>
        </div>

        {/* Role dropdown */}
        <div>
          <label htmlFor="lead-role" className="block text-sm font-medium text-gray-700 mb-1">
            Welche Rolle suchen Sie? <span className="text-red-500">*</span>
          </label>
          <select
            id="lead-role"
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
          <label htmlFor="lead-budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budget pro Monat
          </label>
          <select
            id="lead-budget"
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
          <label htmlFor="lead-description" className="block text-sm font-medium text-gray-700 mb-1">
            Projektbeschreibung
          </label>
          <textarea
            id="lead-description"
            name="description"
            rows={4}
            placeholder="Beschreiben Sie kurz Ihr Projekt und Ihre Anforderungen..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(0,159,255)] focus:border-transparent outline-none text-gray-900 resize-vertical"
          />
        </div>

        {/* Source dropdown */}
        <div>
          <label htmlFor="lead-source" className="block text-sm font-medium text-gray-700 mb-1">
            Wie haben Sie von uns erfahren?
          </label>
          <select
            id="lead-source"
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
  );
}
