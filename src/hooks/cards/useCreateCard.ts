import { cardService } from '@/services/card.service.ts'
import type { TCardCreate } from '@/types/card.types.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateCard = (dashboardId: string, timeBlockId: string) => {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['create card'],
    mutationFn: (cardData: TCardCreate) =>
      cardService.createCard(dashboardId, timeBlockId, cardData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['dashboard', dashboardId],
      })
    },
  })

  return { createCard: mutate, isPending }
}
