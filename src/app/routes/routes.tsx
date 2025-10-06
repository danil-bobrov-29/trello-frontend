import { createBrowserRouter } from 'react-router-dom'

import {
  checkAuthAndRedirect,
  requireAuth,
  requireGuest,
} from '@/app/routes/loaders.ts'
import { DASHBOARD_PAGES } from '@/config/page.config.ts'
import Auth from '@/pages/Auth.tsx'
import Dashboard from '@/pages/Dashboard.tsx'

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
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
])
