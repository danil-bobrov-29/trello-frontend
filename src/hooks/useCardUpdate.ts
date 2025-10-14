import { cardService } from '@/services/card.service.ts'
import type { TCardUpdate } from '@/types/card.types.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCardUpdate = (dashboardId: string, cardId: string) => {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['updateCard'],
    mutationFn: (data: TCardUpdate) =>
      cardService.updateCard(dashboardId, cardId, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['dashboard', dashboardId],
      })
    },
  })

  return { updateCard: mutate, isPending }
}
