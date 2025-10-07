import { Suspense } from 'react'

import DashboardContent from '@/components/sections/DashboardContent.tsx'
import Spinner from '@/components/ui/Spiner.tsx'

const DashboardPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <DashboardContent />
    </Suspense>
  )
}
export default DashboardPage
