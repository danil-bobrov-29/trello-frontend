import { axiosWithAuth } from '@/api/interceptors.ts'

class TimeBlockService {
  private BASE_URL(dashboardId: string) {
    return `/dashboard/${dashboardId}/time-block`
  }

  async getTimeBlocks(dashboardId: string) {
    return await axiosWithAuth.get(`${this.BASE_URL(dashboardId)}/all`)
  }
}

export const timeBlockService = new TimeBlockService()
