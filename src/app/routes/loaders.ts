import { redirect } from 'react-router'

import { DASHBOARD_PAGES } from '@/config/page.config.ts'
import { authService } from '@/services/auth.service.ts'

export const requireAuth = async () => {
  const isVerified = await authService.verifyToken()
  if (!isVerified) {
    throw redirect('/auth')
  }
}

export const requireGuest = async () => {
  const isVerified = await authService.verifyToken()

  if (isVerified) {
    throw redirect(DASHBOARD_PAGES.HOME)
  }
}

export const checkAuthAndRedirect = async () => {
  const isVerified = await authService.verifyToken()
  if (isVerified) {
    throw redirect(DASHBOARD_PAGES.HOME)
  } else {
    throw redirect('/auth')
  }
}
