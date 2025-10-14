import TimeBlockColumn from '@/components/modules/TimeBlockColumn.tsx'
import type { ITimeBlockResponse } from '@/types/time-block.types.ts'

interface IProps {
  timeBlocks: ITimeBlockResponse[]
}

const TimeBlockTable = ({ timeBlocks }: IProps) => {
  return (
    <div>
      <ul className="flex gap-x-5">
        {timeBlocks.map((item) => (
          <li key={item.id}>
            <TimeBlockColumn timeBlock={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TimeBlockTable
