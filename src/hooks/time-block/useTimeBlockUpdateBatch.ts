import { timeBlockService } from '@/services/time-block.service'
import type { TimeBlockUpdateBatch } from '@/types/time-block.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useTimeBlockUpdateBatch(dashboardId: string) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ['timeBlockUpdate'],
    mutationFn: (data: TimeBlockUpdateBatch) =>
      timeBlockService.updateBatch(dashboardId, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['timeBlocks', dashboardId],
      })
    },
  })

  return { updateTimeBlocksBatch: mutate }
}
