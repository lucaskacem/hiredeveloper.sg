'use client';

import { useLeadFormModal } from './LeadFormModalProvider';

interface OpenModalButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function OpenModalButton({ className, children }: OpenModalButtonProps) {
  const { openModal } = useLeadFormModal();

  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
