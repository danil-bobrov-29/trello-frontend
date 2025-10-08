import { dashboardService } from '@/services/dashboard.service.ts'
import type { IDashboardResponse } from '@/types/dashboard.types.ts'
import { useQuery } from '@tanstack/react-query'

export const useDashboardQueryById = (
  dashboardId: string
): { dashboardData: IDashboardResponse; isLoading: boolean } => {
  const { data, isLoading } = useQuery({
    queryKey: ['dashboard', dashboardId],
    queryFn: () => dashboardService.getDashboard(dashboardId),
    gcTime: 10000,
  })

  return { dashboardData: data?.data, isLoading }
}
