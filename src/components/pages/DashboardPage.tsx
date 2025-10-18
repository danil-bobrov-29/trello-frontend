import { useParams } from 'react-router'

import TimeBlockList from '@/components/modules/TimeBlockList'
import Spinner from '@/components/ui/Spiner.tsx'
import { useDashboardQuery } from '@/hooks/dashboard/useDashboardQuery'
import { useTimeBlockQuery } from '@/hooks/time-block/useTimeBlockQuery.ts'

const DashboardPage = () => {
  const { dashboardId } = useParams()

  const { items: dashboards, isLoading: isLoadingDashboards } =
    useDashboardQuery()

  const { data: timeBlocks, isLoading } = useTimeBlockQuery(String(dashboardId))

  if (isLoading || isLoadingDashboards) {
    return <Spinner />
  }

  const titleDashboard = dashboards?.find(
    (dashboard) => dashboard.id === dashboardId
  )?.title

  return (
    <>
      <h2>{titleDashboard}</h2>
      <div>
        {timeBlocks ? (
          <TimeBlockList timeBlocks={timeBlocks} />
        ) : (
          <div>Контент заглушка</div>
        )}
      </div>
    </>
  )
}
export default DashboardPage
