import { dashboardService } from '@/services/dashboard.service.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteDashboard = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteDashboard, isPending } = useMutation({
    mutationKey: ['create-dashboard'],
    mutationFn: (dashboardId: string) =>
      dashboardService.deleteDashboard(dashboardId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['dashboards'] })
    },
  })

  return { deleteDashboard, isPending }
}
