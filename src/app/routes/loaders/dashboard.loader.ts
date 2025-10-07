import { redirect } from 'react-router'

import { DASHBOARD_PAGES } from '@/config/page.config.ts'
import { dashboardService } from '@/services/dashboard.service.ts'

export const dashboardLoader = async () => {
  const dashboards = await dashboardService.getDashboards()

  if (dashboards.data.length !== 0) {
    throw redirect(`${DASHBOARD_PAGES.HOME}/${dashboards.data[0].id}`)
  }

  return dashboards
}
