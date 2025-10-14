import { axiosWithAuth } from '@/api/interceptors.ts'
import type { TCardCreate, TCardUpdate } from '@/types/card.types.ts'

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

  async updateCard(dashboardId: string, cardId: string, data: TCardUpdate) {
    return await axiosWithAuth.patch(
      `${this.BASE_URL(dashboardId)}/${cardId}`,
      data
    )
  }
}

export const cardService = new CardService()
