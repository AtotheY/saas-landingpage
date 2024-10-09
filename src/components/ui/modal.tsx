"use client"

import React, { useContext, useRef } from 'react'
import { ModalContext } from '@/lib/modalContext'
import { X } from 'lucide-react'
import { useBodyScrollLock } from '@/lib/customHooks/useBodyScrollLock'
import useClickOutside from '@/lib/customHooks/useClickOutside'

interface ModalProps {
  children: React.ReactNode
}

export default function Modal({ children }: ModalProps): React.ReactElement | null {

  const context = useContext(ModalContext)

  if (!context) {
    return null
  }

  const { isActive, toggleModal } = context


  // avoid scroll on body when Modal is open
  useBodyScrollLock(isActive)


  // apply the click outside detection and close modal when clicked outside
  const containerRef = useRef<HTMLDivElement>(null)
  const childRef = useRef<HTMLDivElement>(null)

  useClickOutside({ containerRef, childRef, isActive, toggle: () => { toggleModal(null); } })


  // toggle between classes
  const modalClassName = isActive
    ? 'fixed inset-0 h-screen w-full bg-black bg-opacity-30 backdrop-blur-md z-50 flex items-center justify-center'
    : 'hidden'

  return (
    <div ref={containerRef} className={modalClassName}>
      <X size={40} onClick={() => { toggleModal(null); }} className='absolute top-8 right-8 cursor-pointer' />
      <div ref={childRef}>
        {children}
      </div>
    </div>
  )
}