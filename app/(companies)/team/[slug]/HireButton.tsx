'use client';

import { useLeadFormModal } from '../../components/LeadFormModalProvider';

interface HireButtonProps {
  memberName: string;
  large?: boolean;
}

export default function HireButton({ memberName, large }: HireButtonProps) {
  const { openModal } = useLeadFormModal();

  if (large) {
    return (
      <button
        onClick={openModal}
        className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-[#0050ff] rounded-lg hover:bg-[#003fcc] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,80,255,0.35)] transition-all duration-200"
      >
        Hire {memberName}
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={openModal}
      className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#0050ff] rounded-lg hover:bg-[#003fcc] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,80,255,0.3)] transition-all duration-200"
    >
      Hire {memberName}
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
}
