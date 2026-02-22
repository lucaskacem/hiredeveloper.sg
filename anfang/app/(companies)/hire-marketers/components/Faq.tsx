'use client';

import { useState } from 'react';

export default function Faq() {
    const items = [
        {
            question: "What services do digital marketers provide?",
            answer: "Digital marketers provide a wide range of services including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, content marketing, social media management, email marketing, affiliate marketing, and data analytics. They help increase your online visibility, drive traffic, and convert visitors into customers."
        },
        {
            question: "Can I hire for short-term projects?",
            answer: "Yes, Arc supports hiring for both short-term freelance contracts and long-term full-time roles. You can find marketers for specific campaigns, audits, or ongoing management depending on your business needs."
        },
        {
            question: "How does Arc vet its marketers?",
            answer: "We have a rigorous vetting process that includes profile review, English proficiency checks, and domain expertise assessments. For specialized roles, we may also review portfolios and past campaign performance to ensure high-quality matches."
        },
        {
            question: "How quickly can I hire?",
            answer: "With Arc, you can often view matches within 24-72 hours. Since our talent pool is pre-vetted and actively looking for work, the interview-to-hire process is significantly faster than traditional recruiting methods."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20 border-t border-gray-100">
            <div className="max-w-[800px] mx-auto px-12">
                <h2 className="text-[32px] font-bold text-[#0b152b] mb-12 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 last:border-0 pb-4">
                            <button
                                className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                                onClick={() => toggle(index)}
                            >
                                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-[#22a447]' : 'text-[#0b152b] group-hover:text-[#22a447]'}`}>
                                    {item.question}
                                </span>
                                <span className="shrink-0 ml-4">
                                    {openIndex === index ? (
                                        <svg className="w-6 h-6 text-[#22a447]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-gray-400 group-hover:text-[#22a447]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="pb-4 text-gray-600 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
