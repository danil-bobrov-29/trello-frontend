import cn from 'clsx'
import { GripHorizontal, Palette, Pencil, Trash2 } from 'lucide-react'

import CardCreateForm from '@/components/modules/form/CardCreateForm.tsx'
import ActionButton from '@/components/ui/ActionButton.tsx'
import Actions from '@/components/ui/Actions.tsx'
import { Card } from '@/components/ui/Card.tsx'
import { colorClasses } from '@/config/color.config.ts'
import { useClickOutside } from '@/hooks/shared/useClickOutside.ts'
import type { ITimeBlockResponse } from '@/types/time-block.types.ts'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface IProps {
  timeBlock: ITimeBlockResponse
}

const TimeBlockColumn = ({ timeBlock }: IProps) => {
  const {
    elementRef,
    isOpen: isOpenAction,
    setIsOpen: setIsOpenAction,
  } = useClickOutside()
  const {
    elementRef: showElementRef,
    isOpen: isShowCardForm,
    setIsOpen: setIsShowCardForm,
  } = useClickOutside()

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: timeBlock.id, data: timeBlock })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        'min-w-80 w-80 flex-shrink-0 rounded-lg border-2 transition-all duration-200',
        colorClasses[timeBlock.color || 'GRAY']
      )}
    >
      <header className="relative">
        <div
          {...attributes}
          {...listeners}
          className="flex justify-center items-center rounded-t hover:bg-gray-200 active:bg-gray-300 cursor-grab active:cursor-grabbing"
        >
          <GripHorizontal className="text-gray-500" />
        </div>
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex gap-x-3 items-center">
            <h3 className="flex-1 font-semibold text-gray-900 cursor-text select-none">
              {timeBlock.title}
            </h3>
            <span className="text-gray-500">{timeBlock.cards.length}</span>
          </div>
          <Actions
            ref={elementRef}
            className="relative"
            isOpen={isOpenAction}
            setIsOpen={setIsOpenAction}
          >
            <div className="absolute right-5 top-11 z-10 w-48 p-2 bg-white rounded-lg shadow-lg border py-1">
              <ActionButton
                onClick={() => {}}
                label="Изменить цвет"
                Icon={Palette}
                mode="primary"
              />

              <ActionButton
                onClick={() => {}}
                label="Редактировать"
                Icon={Pencil}
                mode="primary"
              />

              <ActionButton
                onClick={() => {}}
                label="Удалить"
                Icon={Trash2}
                mode="secondary"
              />
            </div>
          </Actions>
        </div>
      </header>
      <div className="px-3 pb-3 max-h-[calc(100vh-200px)] overflow-y-auto">
        <ul className="space-y-3">
          {timeBlock.cards.map((card) => (
            <li key={card.id}>
              <Card card={card} dashboardId={timeBlock.dashboardId} />
            </li>
          ))}
        </ul>
      </div>
      <div className="p-3">
        {isShowCardForm ? (
          <CardCreateForm
            ref={showElementRef}
            length={timeBlock.cards.length}
            timeBlockId={timeBlock.id}
            onClose={() => setIsShowCardForm(false)}
          />
        ) : (
          <button
            onClick={() => setIsShowCardForm(true)}
            className="w-full p-3 text-sm text-gray-600 transition-colors border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 hover:text-gray-700"
          >
            + Добавить карточку
          </button>
        )}
      </div>
    </div>
  )
}

export default TimeBlockColumn
