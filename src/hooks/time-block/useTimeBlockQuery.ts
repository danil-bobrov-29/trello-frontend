import type { AxiosResponse } from 'axios'

import { timeBlockService } from '@/services/time-block.service.ts'
import type { ITimeBlockAllResponse } from '@/types/time-block.types.ts'
import { useQuery } from '@tanstack/react-query'

export const useTimeBlockQuery = (dashboardId: string) => {
  const { data, isLoading, isSuccess } = useQuery<
    AxiosResponse<ITimeBlockAllResponse>
  >({
    queryKey: ['timeBlocks', dashboardId],
    queryFn: () => timeBlockService.getTimeBlocks(dashboardId),
    staleTime: 10 * 1000,
    gcTime: 10 * 1000,
    refetchInterval: 10 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  })

  return { data: data?.data, isLoading, isSuccess }
}
