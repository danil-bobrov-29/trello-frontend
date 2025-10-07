import CreateDashboardForm from '@/components/modules/form/CreateDashboardForm.tsx'
import Modal from '@/components/ui/Modal.tsx'

interface IProps {
  isOpen: boolean
  onClose: () => void
}

const CreateDashboardModal = ({ isOpen, onClose }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Создать новое рабочее пространство"
    >
      <CreateDashboardForm onClose={onClose} />
    </Modal>
  )
}

export default CreateDashboardModal
