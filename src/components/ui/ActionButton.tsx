import cn from 'clsx'
import { type LucideIcon } from 'lucide-react'

interface IProps {
  label: string
  Icon?: LucideIcon
  onClick: () => void
  className?: string
  mode: 'primary' | 'secondary'
}

const ActionButton = ({ label, Icon, onClick, mode }: IProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-x-2 w-full px-4 py-2 text-sm rounded-lg',
        {
          'text-gray-700 hover:bg-gray-100': mode === 'primary',
          'text-red-600 hover:bg-red-50': mode === 'secondary',
        }
      )}
    >
      {Icon && <Icon size={16} />}
      {label}
    </button>
  )
}

export default ActionButton
