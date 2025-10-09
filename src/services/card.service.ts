import { axiosWithAuth } from '@/api/interceptors.ts'
import type { TCardCreate } from '@/types/card.types.ts'

class CardService {
  private BASE_URL(dashboardId: string) {
    return `/dashboard/${dashboardId}/card`
  }

  async createCard(
    dashboardId: string,
    timeBlockId: string,
    data: TCardCreate
  ) {
    return await axiosWithAuth.post(`${this.BASE_URL(dashboardId)}`, data, {
      params: {
        timeBlockId,
      },
    })
  }
}

export const cardService = new CardService()
