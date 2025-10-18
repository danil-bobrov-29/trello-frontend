import type { ICardResponse } from '@/types/card.types.ts'
import type { IDashboardResponse } from '@/types/dashboard.types.ts'

export type TTimeBlockColor =
  | 'BLUE'
  | 'GREEN'
  | 'RED'
  | 'YELLOW'
  | 'PURPLE'
  | 'PINK'
  | 'ORANGE'
  | 'GRAY'

export interface ITimeBlockResponse {
  id: string
  title: string
  description: string
  order: number
  color: TTimeBlockColor
  dashboardId: string
  cards: ICardResponse[]
  createdAt: string
  updatedAt: string
}


export type TTimeBlockUpdate = Partial<Pick<ITimeBlockResponse, 'title' | 'description' | 'order' | 'color'>>


export type TimeBlockUpdateBatch = TTimeBlockUpdate & { id: string }[]