import cn from 'clsx'
import { ArrowRight, Pencil, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { memo, useState } from 'react'

import DeleteDashboardModal from '@/components/modules/modal/DeleteDashboardModal.tsx'
import EditorDashboardModal from '@/components/modules/modal/EditorDashboardModal.tsx'
import ActionButton from '@/components/ui/ActionButton.tsx'
import Actions from '@/components/ui/Actions.tsx'
import { DASHBOARD_PAGES } from '@/config/page.config.ts'
import { useClickOutside } from '@/hooks/useClickOutside.ts'
import { useDeleteDashboard } from '@/hooks/useDeleteDashboard.ts'

interface IProps {
  id: string
  title: string
  description?: string
}

const DashboardItem = memo(({ title, description, id }: IProps) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const [isOpenEditorModal, setIsOpenEditorModal] = useState(false)
  const { elementRef, isOpen, setIsOpen } = useClickOutside()

  const { deleteDashboard, isPending } = useDeleteDashboard()

  const handlerDelete = () => {
    deleteDashboard(id)
    setIsOpenDeleteModal(false)
  }

  return (
    <div
      className={cn(
        'group flex flex-col w-full h-60 rounded-xl bg-white border-2 border-gray-200 shadow-md transition-all duration-300 p-6 relative overflow-hidden',
        {
          'hover:shadow-lg hover:border-blue-300 hover:scale-[1.02]': !isOpen,
        }
      )}
    >
      <Link to={`${DASHBOARD_PAGES.HOME}/${id}`}>
        <h3
          className={cn(
            'text-lg font-semibold text-gray-900 mb-3 line-clamp-2  transition-colors max-w-2/3',
            {
              'group-hover:text-blue-600': !isOpen,
            }
          )}
        >
          {title}
        </h3>

        {!isOpen && (
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowRight color="white" />
          </div>
        )}
      </Link>
      {description && !isOpen && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 via-white/50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 max-w-2/3">
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>
      )}
      <Actions ref={elementRef} isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="absolute right-5 top-11 z-10 w-48 p-2 bg-white rounded-lg shadow-lg border py-1">
          <ActionButton
            onClick={() => setIsOpenEditorModal(true)}
            label="Редактировать"
            Icon={Pencil}
            mode="primary"
          />

          <ActionButton
            onClick={() => {
              setIsOpenDeleteModal(true)
            }}
            label="Удалить"
            Icon={Trash2}
            mode="secondary"
          />
        </div>
      </Actions>
      <EditorDashboardModal
        isOpen={isOpenEditorModal}
        dashboardId={id}
        onClose={() => setIsOpenEditorModal(false)}
      />
      <DeleteDashboardModal
        isOpen={isOpenDeleteModal}
        title={title}
        onClose={() => setIsOpenDeleteModal(false)}
        handlerDelete={handlerDelete}
        isLoading={isPending}
      />
    </div>
  )
})

DashboardItem.displayName = 'DashboardItem'

export default DashboardItem
