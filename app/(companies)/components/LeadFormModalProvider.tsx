'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import LeadFormModal from './LeadFormModal';

interface LeadFormModalContextType {
  openModal: () => void;
  isModalOpen: boolean;
}

const LeadFormModalContext = createContext<LeadFormModalContextType>({
  openModal: () => {},
  isModalOpen: false,
});

export function useLeadFormModal() {
  return useContext(LeadFormModalContext);
}

export default function LeadFormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <LeadFormModalContext.Provider value={{ openModal, isModalOpen: isOpen }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={closeModal} />
    </LeadFormModalContext.Provider>
  );
}
