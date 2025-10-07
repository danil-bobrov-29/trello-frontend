import { Trash2 } from 'lucide-react'

import Button from '@/components/ui/Button.tsx'
import Modal from '@/components/ui/Modal.tsx'

interface IProps {
  isOpen: boolean
  onClose: () => void
  title: string
  isLoading: boolean
  handlerDelete: () => void
}

const DeleteDashboardModal = ({
  isOpen,
  onClose,
  title,
  isLoading,
  handlerDelete,
}: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Удаление рабочего пространства"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Trash2 className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <p className="text-gray-700 mb-2">
              Вы уверены, что хотите удалить <strong>«{title}»</strong>?
            </p>
            <p className="text-sm text-gray-500">
              Это действие нельзя отменить. Все данные будут удалены
              безвозвратно.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={onClose} mode="secondary">
            Отмена
          </Button>
          <Button
            onClick={handlerDelete}
            className="bg-red-500 hover:bg-red-600"
            isLoading={isLoading}
          >
            Удалить
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteDashboardModal
