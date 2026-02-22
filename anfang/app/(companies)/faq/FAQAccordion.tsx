'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  sectionId: string;
}

export default function FAQAccordion({ items, sectionId }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <div
          key={`${sectionId}-${index}`}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="text-lg font-semibold text-gray-900 pr-4">
              {faq.question}
            </span>
            <span className="text-2xl text-gray-500 flex-shrink-0">
              {openIndex === index ? '\u2212' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
