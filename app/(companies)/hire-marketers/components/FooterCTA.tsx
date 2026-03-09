'use client';

import { useLeadFormModal } from '../../components/LeadFormModalProvider';

export default function FooterCTA() {
    const { openModal } = useLeadFormModal();

    return (
        <section className="bg-white py-10 md:py-16 lg:py-20 border-t border-gray-100">
            <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-12 text-center">
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#0b152b] mb-4">
                    Your future marketing expert is just a click away!
                </h2>
                <div className="mt-8">
                    <button
                        onClick={openModal}
                        className="px-8 py-4 bg-[#22a447] hover:bg-[#1e913f] text-white text-lg font-bold rounded-lg transition-colors shadow-lg shadow-[#22a447]/20"
                    >
                        Hire Talent
                    </button>
                </div>
            </div>
        </section>
    );
}
