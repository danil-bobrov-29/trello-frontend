import {
  ClipboardList,
  ListTodo,
  type LucideIcon,
  UserRound,
} from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/page.config.ts'

interface INavigationParams {
  title: string
  href: string
  icon: LucideIcon
}

export const navigationData: INavigationParams[] = [
  {
    title: 'Доски',
    icon: ClipboardList,
    href: DASHBOARD_PAGES.HOME,
  },
  {
    title: 'Задачи',
    icon: ListTodo,
    href: '#',
  },
  {
    title: 'Участники',
    icon: UserRound,
    href: '#',
  },
]
