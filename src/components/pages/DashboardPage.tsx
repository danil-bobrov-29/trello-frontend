import { useParams } from 'react-router'

import TimeBlockList from '@/components/modules/TimeBlockList'
import Spinner from '@/components/ui/Spiner.tsx'
import { useTimeBlockQuery } from '@/hooks/time-block/useTimeBlockQuery.ts'

const DashboardPage = () => {
  const { dashboardId } = useParams()
  const { data, isLoading } = useTimeBlockQuery(String(dashboardId))

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h2>{data?.dashboard.title}</h2>
      <div>
        {data?.timeBlocks ? (
          <TimeBlockList timeBlocks={data.timeBlocks} />
        ) : (
          <div>Контент заглушка</div>
        )}
      </div>
    </>
  )
}
export default DashboardPage
