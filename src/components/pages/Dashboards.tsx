import { Plus } from 'lucide-react'

import { useState } from 'react'

import DashboardCards from '@/components/modules/DashboardCards.tsx'
import CreateDashboardModal from '@/components/modules/modal/CreateDashboardModal.tsx'
import Button from '@/components/ui/Button.tsx'

const Dashboards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

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

      <DashboardCards />

      <CreateDashboardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Dashboards
