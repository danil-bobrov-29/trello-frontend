import { axiosWithAuth } from '@/api/interceptors.ts'
import type { TimeBlockUpdateBatch } from '@/types/time-block.types'

class TimeBlockService {
  private BASE_URL(dashboardId: string) {
    return `/dashboard/${dashboardId}/time-block`
  }

  async getTimeBlocks(dashboardId: string) {
    return await axiosWithAuth.get(`${this.BASE_URL(dashboardId)}/all`)
  }

  async updateBatch(dashboardId: string, data: TimeBlockUpdateBatch) {
    return await axiosWithAuth.patch(
      `${this.BASE_URL(dashboardId)}/batch`,
      {updates: data}
    )
  }
}

export const timeBlockService = new TimeBlockService()
