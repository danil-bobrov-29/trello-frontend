import type { ITimeBlockResponse } from '@/types/time-block.types.ts'

export interface IDashboardResponse {
  id: string
  userId: string
  title: string
  timeBlocks?: ITimeBlockResponse[]
  description?: string
  isArchived: boolean
  createdAt: string
  updatedAt: string
}

export type TDashboardData = Pick<IDashboardResponse, 'title' | 'description'>
