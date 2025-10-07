import { dashboardService } from '@/services/dashboard.service.ts'
import type { TDashboardData } from '@/types/dashboard.types.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateDashboard = () => {
  const queryClient = useQueryClient()

  const { mutate: createDashboard, isPending } = useMutation({
    mutationKey: ['create-dashboard'],
    mutationFn: (data: TDashboardData) =>
      dashboardService.createDashboard(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['dashboards'] })
    },
  })

  return { createDashboard, isPending }
}
