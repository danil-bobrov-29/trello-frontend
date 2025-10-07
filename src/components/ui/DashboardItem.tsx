import { ArrowRight, Pencil, X } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useState } from 'react'

import DeleteDashboardModal from '@/components/modules/modal/DeleteDashboardModal.tsx'
import Button from '@/components/ui/Button.tsx'
import { DASHBOARD_PAGES } from '@/config/page.config.ts'
import { useDeleteDashboard } from '@/hooks/useDeleteDashboard.ts'

interface IProps {
  id: string
  title: string
  description?: string
}

const DashboardItem = ({ title, description, id }: IProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { deleteDashboard, isPending } = useDeleteDashboard()

  const handlerDelete = () => {
    deleteDashboard(id)
    setIsOpenModal(false)
  }

  return (
    <div className="group w-full h-60 rounded-xl bg-white border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:scale-[1.02] p-6 flex flex-col relative overflow-hidden">
      <Link to={`${DASHBOARD_PAGES.HOME}/${id}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors max-w-2/3">
          {title}
        </h3>

        <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowRight color="white" />
        </div>
      </Link>
      {description && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 via-white/50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 max-w-2/3">
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>
      )}
      <Button
        className="absolute right-12 top-1"
        icon={Pencil}
        mode="transparent"
      />
      <Button
        className="absolute right-1 top-1"
        icon={X}
        mode="transparent"
        onClick={() => setIsOpenModal(true)}
      />
      <DeleteDashboardModal
        isOpen={isOpenModal}
        title={title}
        onClose={() => setIsOpenModal(false)}
        handlerDelete={handlerDelete}
        isLoading={isPending}
      />
    </div>
  )
}

export default DashboardItem
