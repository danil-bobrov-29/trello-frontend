import cn from 'clsx'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

import { DASHBOARD_PAGES } from '@/config/page.config.ts'

interface IProps {
  id: string
  title: string
  className?: string
}

const DashboardItem = ({ title, id, className }: IProps) => {
  return (
    <Link
      to={`${DASHBOARD_PAGES.HOME}/${id}`}
      className={cn(
        'group block w-full h-60 rounded-xl',
        'bg-white border-2 border-gray-200',
        'shadow-md hover:shadow-lg hover:border-blue-300',
        'transition-all duration-300 hover:scale-[1.02]',
        'p-6 flex flex-col relative overflow-hidden',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
        <ArrowRight color="white" />
      </div>
    </Link>
  )
}

export default DashboardItem
