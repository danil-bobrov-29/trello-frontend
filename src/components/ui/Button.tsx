import cn from 'clsx'

import type { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  target?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
  mode?: 'default' | 'transparent'
  isLoading?: boolean
  disabled?: boolean
}

const Button = ({
  children,
  target,
  href,
  type = 'button',
  className,
  mode = 'default',
  onClick,
  isLoading = false,
  disabled = false,
}: IProps) => {
  const Components = href ? 'a' : 'button'
  const paramsProps = href
    ? { href, target }
    : { onClick, type, disabled: disabled || isLoading }

  return (
    <Components
      {...paramsProps}
      className={cn(className, {
        'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors':
          mode === 'default',
        'text-blue-600 hover:text-blue-500 transition-colors font-semibold':
          mode === 'transparent',
      })}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
          <span className="ml-2 opacity-75">{children}</span>
        </div>
      ) : (
        children
      )}
    </Components>
  )
}
export default Button

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)
