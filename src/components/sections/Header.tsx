import cn from 'clsx'
import { SquareChartGantt } from 'lucide-react'

import Button from '@/components/ui/Button.tsx'
import useSidebarOpen from '@/store/useSidebarOpen.ts'

const Header = () => {
  const { isOpen, setToggleOpen } = useSidebarOpen()

  return (
    <header className="border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Button
            className={cn('text-gray-500', {
              hidden: isOpen,
              block: !isOpen,
            })}
            mode="transparent"
            icon={SquareChartGantt}
            onClick={setToggleOpen}
          />
          <h2 className="text-lg font-semibold text-gray-800">Моя доска</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Участники:</span>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Поделиться
          </button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </header>
  )
}
export default Header
