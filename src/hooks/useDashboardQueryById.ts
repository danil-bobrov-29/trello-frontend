import { dashboardService } from '@/services/dashboard.service.ts'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useDashboardQueryById = (dashboardId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['dashboard', dashboardId],
    queryFn: () => dashboardService.getDashboard(dashboardId),
    gcTime: 10000,
  })

  return { dashboardData: data?.data }
}
