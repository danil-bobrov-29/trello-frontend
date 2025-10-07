import type { AxiosResponse } from 'axios'

import { dashboardService } from '@/services/dashboard.service.ts'
import type { IDashboardResponse } from '@/types/dashboard.types.ts'
import { useQuery } from '@tanstack/react-query'

export const useDashboardQuery = () => {
  const { data, isLoading } = useQuery<AxiosResponse<IDashboardResponse[]>>({
    queryKey: ['dashboards'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      return dashboardService.getDashboards()
    },
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
  })

  return {
    items: data?.data,
    isLoading,
  }
}
