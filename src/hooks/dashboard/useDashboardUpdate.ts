import { dashboardService } from '@/services/dashboard.service.ts'
import type { TDashboardData } from '@/types/dashboard.types.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDashboardUpdate = (dashboardId: string) => {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['updateDashboard'],
    mutationFn: (data: TDashboardData) =>
      dashboardService.updateDashboard(dashboardId, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['dashboards'] })
    },
  })

  return { updateDashboard: mutate, isPending }
}
