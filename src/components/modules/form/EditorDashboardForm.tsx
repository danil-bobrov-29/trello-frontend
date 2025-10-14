import { useForm } from 'react-hook-form'

import Button from '@/components/ui/Button.tsx'
import Field from '@/components/ui/Field.tsx'
import Spinner from '@/components/ui/Spiner.tsx'
import { useDashboardQueryById } from '@/hooks/useDashboardQueryById.ts'
import { useDashboardUpdate } from '@/hooks/useDashboardUpdate.ts'
import type { TDashboardData } from '@/types/dashboard.types.ts'

interface IProps {
  onClose: () => void
  dashboardId: string
}

const EditorDashboardForm = ({ onClose, dashboardId }: IProps) => {
  const { dashboardData, isLoading } = useDashboardQueryById(dashboardId)

  const { updateDashboard, isPending } = useDashboardUpdate(dashboardId)

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<TDashboardData>()

  const handleCreateDashboard = (data: TDashboardData) => {
    updateDashboard(data)
    reset()
    onClose()
  }

  if (isLoading) {
    return <Spinner />
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
        defaultValue={dashboardData.title}
        placeholder="Изменить название рабочего пространства"
        errorMessage={errors.title?.message}
      />

      <Field
        label="Описание"
        id="description"
        register={register}
        name="description"
        defaultValue={dashboardData.description}
        placeholder="Измение описание"
        errorMessage={errors.description?.message}
        isTextarea
      />

      <div className="flex gap-3 pt-4">
        <Button type="button" onClick={onClose} mode="secondary">
          Отмена
        </Button>
        <Button type="submit" isLoading={isPending}>
          Изменить
        </Button>
      </div>
    </form>
  )
}

export default EditorDashboardForm
