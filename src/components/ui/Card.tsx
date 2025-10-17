import cn from 'clsx'
import { ChevronDown } from 'lucide-react'

import { useEffect, useState } from 'react'

import Button from '@/components/ui/Button.tsx'
import { useCardUpdate } from '@/hooks/cards/useCardUpdate.ts'
import type { ICardResponse } from '@/types/card.types.ts'

interface CardProps {
  dashboardId: string
  card: ICardResponse
}

export const Card = ({ dashboardId, card }: CardProps) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false)
  const [isCompleted, setIsCompleted] = useState<boolean>(card.isCompleted)

  const { updateCard } = useCardUpdate(dashboardId, card.id)

  useEffect(() => {
    updateCard({ isCompleted })
  }, [isCompleted, updateCard])

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 hover:shadow-md duration-200 ease-in-out cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-center">
        <div className="group flex gap-x-2">
          <input
            className={cn(
              'bg-white p-3 duration-200 ease-in-out cursor-pointer',
              {
                'opacity-0 group-hover:opacity-100': !isCompleted,
                'opacity-100': isCompleted,
              }
            )}
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
            type="checkbox"
          />
          <span
            className={cn(
              'text-base text-gray-900 whitespace-pre-wrap duration-200',
              {
                '-translate-x-4 group-hover:translate-x-0': !isCompleted,
                'translate-x-0 line-through': isCompleted,
              }
            )}
          >
            {card.title}
          </span>
        </div>
        {card.description && (
          <Button
            icon={ChevronDown}
            mode="transparent"
            onClick={() => setIsOpenDescription(!isOpenDescription)}
          />
        )}
      </div>
      {card.description && (
        <div
          className={cn(
            'mt-2 p-3 bg-gray-50 rounded-md transition-all duration-200 ease-in-out',
            {
              'opacity-0 max-h-0 py-0 overflow-hidden': !isOpenDescription,
              'opacity-100 max-h-96': isOpenDescription,
            }
          )}
        >
          <p
            className={cn('text-xs', {
              'line-through': isCompleted,
            })}
          >
            📝 {card.description}
          </p>
        </div>
      )}
    </div>
  )
}
