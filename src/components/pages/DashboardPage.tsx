import { useParams } from 'react-router'

import TimeBlockTable from '@/components/modules/TimeBlockTable.tsx'
import Spinner from '@/components/ui/Spiner.tsx'
import { useTimeBlockQuery } from '@/hooks/time-block/useTimeBlockQuery.ts'

const DashboardPage = () => {
  const { dashboardId } = useParams()
  const { data, isLoading } = useTimeBlockQuery(dashboardId as string)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h2>{data?.dashboard.title}</h2>
      {data?.timeBlocks ? (
        <TimeBlockTable timeBlocks={data.timeBlocks} />
      ) : (
        <div>Контент заглушка</div>
      )}
    </>
  )
}
export default DashboardPage
