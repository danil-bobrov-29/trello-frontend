import cn from 'clsx'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

import { type ReactNode, useEffect } from 'react'

import Button from '@/components/ui/Button.tsx'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className={cn('fixed inset-0 z-50 flex items-center justify-center', {
        'overflow-hidden': isOpen,
      })}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative max-w-lg bg-white rounded-2xl shadow-2xl w-full mx-4 transform transition-all duration-300 animate-in fade-in-90 zoom-in-90">
        <header className="flex items-center justify-between p-6 border-b border-gray-100">
          {title && (
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          )}
          <Button icon={X} onClick={onClose} mode="transparent" />
        </header>

        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
