import cn from 'clsx'
import { MoreHorizontal } from 'lucide-react'

import { type ReactNode, forwardRef } from 'react'

import Button from '@/components/ui/Button.tsx'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  children: ReactNode
  className?: string
}

const Actions = forwardRef<HTMLDivElement, IProps>(
  ({ isOpen, setIsOpen, children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(className, {
          'absolute right-3 top-3': !className,
        })}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          icon={MoreHorizontal}
          mode="transparent"
        />

        {isOpen && children}
      </div>
    )
  }
)

export default Actions
