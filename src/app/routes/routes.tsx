import { createBrowserRouter } from 'react-router-dom'

import {
  checkAuthAndRedirect,
  requireAuth,
  requireGuest,
} from '@/app/routes/loaders/auth.loader.ts'
import DashboardLayout from '@/components/layouts/DashboardLayout.tsx'
import Auth from '@/components/pages/Auth.tsx'
import DashboardPage from '@/components/pages/DashboardPage.tsx'
import Dashboards from '@/components/pages/Dashboards.tsx'
import { DASHBOARD_PAGES } from '@/config/page.config.ts'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        loader: checkAuthAndRedirect,
        element: <div>Redirecting...</div>,
      },
      {
        path: 'auth',
        loader: requireGuest,
        element: <Auth />,
      },
      {
        path: DASHBOARD_PAGES.HOME,
        loader: requireAuth,
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboards />,
          },
          {
            path: `${DASHBOARD_PAGES.HOME}/:dashboardId`,
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
])
