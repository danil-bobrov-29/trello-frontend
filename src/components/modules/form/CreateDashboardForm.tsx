import { useForm } from 'react-hook-form'

import Button from '@/components/ui/Button.tsx'
import Field from '@/components/ui/Field.tsx'
import { useCreateDashboard } from '@/hooks/useCreateDashboard.ts'
import type { TDashboardData } from '@/types/dashboard.types.ts'

const CreateDashboardForm = ({ onClose }: { onClose: () => void }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<{ title: string; description: string }>()

  const { createDashboard, isPending } = useCreateDashboard()

  const handleCreateDashboard = (data: TDashboardData) => {
    createDashboard(data)
    reset()
    onClose()
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateDashboard)}
      className="p-6 space-y-4"
    >
      <Field
        label="Название"
        id="title"
        register={register}
        name="title"
        placeholder="Введите название рабочего пространства"
        errorMessage={errors.title?.message}
      />

      <Field
        label="Описание"
        id="description"
        register={register}
        name="description"
        placeholder="Добавьте описание (необязательно)"
        errorMessage={errors.description?.message}
        isTextarea
      />

      <div className="flex gap-3 pt-4">
        <Button type="button" onClick={onClose} mode="secondary">
          Отмена
        </Button>
        <Button type="submit" isLoading={isPending}>
          Создать
        </Button>
      </div>
    </form>
  )
}

export default CreateDashboardForm
