import { useParams } from 'react-router'

import { useDashboardQueryById } from '@/hooks/useDashboardQueryById.ts'

const DashboardContent = () => {
  const { dashboardId } = useParams()

  const { dashboardData } = useDashboardQueryById(dashboardId as string)

  return (
    <>
      <h2>{dashboardData.title}</h2>
      {/* остальной контент */}
    </>
  )
}
export default DashboardContent
