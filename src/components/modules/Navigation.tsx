import cn from 'clsx'
import { NavLink, useLocation } from 'react-router'

import { navigationData } from '@/constants/navigation.data.ts'

const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <nav>
      <ul className="space-y-2">
        {navigationData.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.href}
              className={cn(
                'flex items-center px-3 py-2 gap-x-2 text-gray-500 rounded-lg  transition-colors',
                {
                  'bg-blue-50 cursor-default': item.href === pathname,
                  'hover:bg-blue-100': item.href !== pathname,
                }
              )}
            >
              <item.icon />
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navigation
