import { useParams } from 'react-router'

import { useState } from 'react'

import TimeBlockColumn from '@/components/modules/TimeBlockColumn.tsx'
import { useTimeBlockUpdateBatch } from '@/hooks/time-block/useTimeBlockUpdateBatch'
import type { ITimeBlockResponse } from '@/types/time-block.types.ts'
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'

interface IProps {
  timeBlocks: ITimeBlockResponse[]
}

const TimeBlockList = ({ timeBlocks }: IProps) => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [blocks, setBlocks] = useState<ITimeBlockResponse[]>(timeBlocks)

  const { dashboardId } = useParams<{ dashboardId: string }>()

  const { updateTimeBlocksBatch } = useTimeBlockUpdateBatch(String(dashboardId))

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
    const { active, over } = event
    console.log('drag end')

    if (!over) return

    if (active.id === over.id) return

    const oldIndex = timeBlocks.findIndex((block) => block.id === active.id)
    const newIndex = timeBlocks.findIndex((block) => block.id === over.id)

    const reordered = arrayMove(timeBlocks, oldIndex, newIndex)

    setBlocks(reordered)

    const changed: { id: string; order: number }[] = []

    reordered.forEach((timeBlock, index) => {
      if (timeBlock.order !== index) {
        changed.push({ id: timeBlock.id, order: index })
      }
    })

    if (changed.length > 0) {
      updateTimeBlocksBatch(changed)
    }

    setActiveId(null)
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  const activeTimeBlock = blocks.find((block) => block.id === activeId)

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handlerTimeBlockDragEnd}
      onDragCancel={handleDragCancel}
    >
      <ul className="flex gap-x-5">
        <SortableContext
          items={blocks.map((b) => b.id)}
          strategy={horizontalListSortingStrategy}
        >
          {blocks.map((block) => (
            <li key={block.id}>
              <TimeBlockColumn timeBlock={block} />
            </li>
          ))}
        </SortableContext>
      </ul>

      <DragOverlay>
        {activeId && activeTimeBlock ? (
          <TimeBlockColumn timeBlock={activeTimeBlock} />
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}

export default TimeBlockList
