import DashboardItem from '@/components/ui/DashboardItem.tsx'
import Spinner from '@/components/ui/Spiner.tsx'
import { useDashboardQuery } from '@/hooks/useDashboardQuery.ts'

const DashboardCards = () => {
  const { items: dashboards, isLoading } = useDashboardQuery()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-5">
        {dashboards?.map((dashboard) => (
          <li key={dashboard.id}>
            <DashboardItem
              title={dashboard.title}
              id={dashboard.id}
              description={dashboard.description}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default DashboardCards
