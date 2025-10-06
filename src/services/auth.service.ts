import { axiosClassic } from '@/api/interceptors.ts'
import {
  removeAccessToken,
  saveTokenStorage,
} from '@/services/token.service.ts'

export const authService = {
  async main<FormData>(type: 'login' | 'register', data: FormData) {
    const response = await axiosClassic.post(`/auth/${type}`, data)

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken)
    }

    return response
  },

  async getNewTokens() {
    const response = await axiosClassic.post('/auth/refresh')

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

    return response
  },

  async verifyToken(): Promise<boolean> {
    try {
      const response = await axiosClassic.get('/auth/refresh/verify')

      return response.data.isVerify
    } catch {
      removeAccessToken()
      return false
    }
  },

  async logout() {
    const response = await axiosClassic.post<boolean>('/auth/logout')

    if (response.data) {
      removeAccessToken()
    }

    return response
  },
}
