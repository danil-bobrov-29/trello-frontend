import type { AxiosResponse } from 'axios'

import { timeBlockService } from '@/services/time-block.service.ts'
import type { ITimeBlockResponse } from '@/types/time-block.types.ts'
import { useQuery } from '@tanstack/react-query'

export const useTimeBlockQuery = (dashboardId: string) => {
  const { data, isLoading, isSuccess } = useQuery<
    AxiosResponse<ITimeBlockResponse[]>
  >({
    queryKey: ['timeBlocks', dashboardId],
    queryFn: () => timeBlockService.getTimeBlocks(dashboardId),
    staleTime: 1000,
    gcTime: 0,
    refetchInterval: 5 * 1000, // 5 seconds
  })

  return { data: data?.data, isLoading, isSuccess }
}
