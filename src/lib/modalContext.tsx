"use client"

import React, { createContext, useState, type ReactNode, type ReactElement } from 'react'

// Define the shape of the context
interface ModalContextType {
  isActive: boolean
  modalContent: ReactElement | null // Explicitly allow null
  toggleModal: (content?: ReactElement | null) => void // Allow passing null to close the modal
}

// Initialize the context
export const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps {
  children: ReactNode
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactElement | null>(null)

  // Toggle the modal state and set the dynamic content
  const toggleModal = (content?: ReactElement | null) => {
    setModalContent(content || null)
    setIsActive(!isActive)
  }

  return (
    <ModalContext.Provider value={{ isActive, modalContent, toggleModal }}>
      {children}
    </ModalContext.Provider>
  )
}
