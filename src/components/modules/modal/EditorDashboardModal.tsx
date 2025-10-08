import EditorDashboardForm from '@/components/modules/form/EditorDashboardForm.tsx'
import Modal from '@/components/ui/Modal.tsx'

interface IProps {
  isOpen: boolean
  onClose: () => void
  dashboardId: string
}

const EditorDashboardModal = ({ isOpen, onClose, dashboardId }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Изменить рабочее пространство"
    >
      <EditorDashboardForm onClose={onClose} dashboardId={dashboardId} />
    </Modal>
  )
}

export default EditorDashboardModal
