import { useParams } from 'react-router'

import Spinner from '@/components/ui/Spiner.tsx'
import { useDashboardQueryById } from '@/hooks/useDashboardQueryById.ts'

const DashboardContent = () => {
  const { dashboardId } = useParams()

  const { dashboardData, isLoading } = useDashboardQueryById(
    dashboardId as string
  )

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h2>{dashboardData.title}</h2>
      {/* остальной контент */}
    </>
  )
}
export default DashboardContent
