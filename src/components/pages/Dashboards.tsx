import { Plus } from 'lucide-react'

import { useState } from 'react'

import CreateDashboardModal from '@/components/modules/modal/CreateDashboardModal.tsx'
import Button from '@/components/ui/Button.tsx'
import DashboardItem from '@/components/ui/DashboardItem.tsx'
import Spinner from '@/components/ui/Spiner.tsx'
import { useDashboardQuery } from '@/hooks/useDashboardQuery.ts'

const Dashboards = () => {
  const { items: dashboards, isLoading } = useDashboardQuery()

  const [isModalOpen, setIsModalOpen] = useState(false)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-500 uppercase tracking-wide">
          Рабочие пространства
        </h2>
        <Button
          icon={Plus}
          mode="transparent"
          onClick={() => setIsModalOpen(true)}
        >
          Создать доску
        </Button>
      </div>
      <ul className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-5">
        {dashboards?.map((dashboard) => (
          <li key={dashboard.id}>
            <DashboardItem
              title={dashboard.title}
              id={dashboard.id}
              description={dashboard.description}
            />
          </li>
        ))}
      </ul>
      <CreateDashboardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Dashboards
