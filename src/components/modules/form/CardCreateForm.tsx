import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'

import { forwardRef } from 'react'

import Button from '@/components/ui/Button.tsx'
import Field from '@/components/ui/Field.tsx'
import { useCreateCard } from '@/hooks/useCreateCard.ts'
import type { TCardForm } from '@/types/card.types.ts'

interface IProps {
  timeBlockId: string
  length: number
  onClose: () => void
}

const CardCreateForm = forwardRef<HTMLDivElement, IProps>(
  ({ timeBlockId, length, onClose }, ref) => {
    const { dashboardId } = useParams()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<TCardForm>()

    const { createCard, isPending } = useCreateCard(
      dashboardId as string,
      timeBlockId
    )

    const onSubmit = (data: TCardForm) => {
      createCard({
        ...data,
        dueDate: new Date(data.dueDate + 'T00:00:00.000Z').toISOString(),
        order: length,
      })
      onClose()
    }

    return (
      <div ref={ref}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Field
            id="title"
            register={register}
            name="title"
            placeholder="Введите название карточки"
            errorMessage={errors.title?.message}
          />
          <Field
            id="description"
            register={register}
            name="description"
            placeholder="Добавьте описание (необязательно)"
            errorMessage={errors.description?.message}
            isTextarea
          />
          <div className="flex gap-3 pt-4">
            <Button
              className="bg-red-500 hover:bg-red-600"
              type="button"
              onClick={onClose}
            >
              Отмена
            </Button>
            <Button type="submit" isLoading={isPending}>
              Создать
            </Button>
          </div>
        </form>
      </div>
    )
  }
)

export default CardCreateForm
