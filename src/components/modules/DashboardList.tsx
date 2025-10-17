import { Link } from 'react-router'

import { DASHBOARD_PAGES } from '@/config/page.config.ts'
import { useDashboardQuery } from '@/hooks/dashboard/useDashboardQuery'
import type { IDashboardResponse } from '@/types/dashboard.types.ts'

const DashboardList = () => {
  const { items: dashboards, isLoading } = useDashboardQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ul className="space-y-3">
        {dashboards &&
          dashboards.map((dashboard: IDashboardResponse) => (
            <li key={dashboard.id}>
              <Link
                to={`${DASHBOARD_PAGES.HOME}/${dashboard.id}`}
                className="w-full px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors line-clamp-1"
              >
                {dashboard.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default DashboardList
