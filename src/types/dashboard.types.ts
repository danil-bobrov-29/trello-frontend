export interface IDashboardResponse {
  id: string
  userId: string
  title: string
  description?: string
  isArchived: boolean
  createdAt: string
  updatedAt: string
}

export type TDashboardData = Pick<IDashboardResponse, 'title' | 'description'>
