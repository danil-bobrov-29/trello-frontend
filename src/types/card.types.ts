export interface ICardResponse {
  id: string
  title: string
  description: string
  dueDate: string
  order: number
  isCompleted: boolean
  timeBlockId: string
  createdAt: string
  updatedAt: string
}

export type TCardForm = Pick<ICardResponse, 'title' | 'description' | 'dueDate'>

export type TCardCreate = TCardForm & {
  order: number
}
