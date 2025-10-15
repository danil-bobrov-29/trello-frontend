import { useState } from 'react'

import TimeBlockColumn from '@/components/modules/TimeBlockColumn.tsx'
import type { ITimeBlockResponse } from '@/types/time-block.types.ts'
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'

interface IProps {
  timeBlocks: ITimeBlockResponse[]
}

const TimeBlockTable = ({ timeBlocks }: IProps) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handlerTimeBlockDragEnd = (event: DragEndEvent) => {
    const { over } = event

    if (!over) return

    setActiveId(null)
    console.log('Drag end', event)
  }

  const activeTimeBlock = timeBlocks.find((block) => block.id === activeId)

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handlerTimeBlockDragEnd}
    >
      <div>
        <ul className="flex gap-x-5">
          <SortableContext
            items={timeBlocks.map((timeBlock) => timeBlock.id)}
            strategy={horizontalListSortingStrategy}
          >
            {timeBlocks.map((item) => (
              <li key={item.id}>
                <TimeBlockColumn timeBlock={item} />
              </li>
            ))}
          </SortableContext>
        </ul>
      </div>

      <DragOverlay>
        {activeId && activeTimeBlock ? (
          <TimeBlockColumn timeBlock={activeTimeBlock} />
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

export default TimeBlockTable
