import cn from 'clsx'
import { SquareChartGantt } from 'lucide-react'

import { Suspense } from 'react'

import DashboardList from '@/components/modules/DashboardList.tsx'
import Navigation from '@/components/modules/Navigation.tsx'
import Button from '@/components/ui/Button.tsx'
import Logo from '@/components/ui/Logo.tsx'
import useSidebarOpen from '@/store/useSidebarOpen.ts'

const Sidebar = () => {
  const { isOpen, setToggleOpen } = useSidebarOpen()

  return (
    <aside
      className={cn(
        'relative flex flex-col px-5 py-8 gap-y-8 min-w-[250px] bg-white border-r border-gray-200 shadow-sm rounded-r-4xl overflow-auto',
        {
          hidden: !isOpen,
          'w-[250px]': isOpen,
        }
      )}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Button
          mode="transparent"
          icon={SquareChartGantt}
          onClick={setToggleOpen}
        />
      </div>
      <Navigation />
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Рабочие пространства
        </h3>
        <Suspense fallback={<div>Загрузка...</div>}>
          <DashboardList />
        </Suspense>
      </div>
    </aside>
  )
}
export default Sidebar
