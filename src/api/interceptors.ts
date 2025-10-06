import axios, { type CreateAxiosDefaults } from 'axios'

import { errorCatch, getDefaultErrorMessage } from '@/api/error.ts'
import { authService } from '@/services/auth.service.ts'
import { getAccessToken, removeAccessToken } from '@/services/token.service.ts'
import type { IErrorResponse } from '@/types/error.types.ts'

const options: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}

export const axiosClassic = axios.create(options)

export const axiosWithAuth = axios.create(options)

axiosClassic.interceptors.response.use(
  (response) => response,
  (error): Promise<IErrorResponse> => {
    if (error.response) {
      const { status, data } = error.response

      switch (status) {
        case 400:
          console.error('Bad Request:', data.message || 'Неверный запрос')
          break
        case 401:
          console.error(
            'Unauthorized:',
            data.message || 'Требуется авторизация'
          )
          break
        case 403:
          console.error('Forbidden:', data.message || 'Доступ запрещен')
          break
        case 404:
          console.error('Not Found:', data.message || 'Ресурс не найден')
          break
        case 409:
          console.error('Conflict:', data.message || 'Конфликт')
          break
        case 422:
          console.error('Validation Error:', data.message || 'Ошибка валидации')
          break
        case 500:
          console.error(
            'Server Error:',
            data.message || 'Внутренняя ошибка сервера'
          )
          break
        default:
          console.error(`Error ${status}:`, data.message || 'Произошла ошибка')
      }

      return Promise.reject({
        status: status,
        message: data.message || getDefaultErrorMessage(status),
      })
    } else if (error.request) {
      console.error('Network Error:', 'Нет соединения с сервером')
      return Promise.reject({
        status: null,
        message: 'Нет соединения с сервером',
        isNetworkError: true,
      })
    } else {
      console.error('Request Error:', error.message)
      return Promise.reject({
        status: null,
        message: error.message || 'Ошибка при выполнении запроса',
      })
    }
  }
)

axiosWithAuth.interceptors.response.use(
  (config) => {
    const accessToken = getAccessToken()

    if (config?.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  async (error) => {
    const originalRequest = error.config

    if (
      error?.response?.status === 401 ||
      errorCatch(error) === 'Invalid token'
    ) {
      try {
        await authService.getNewTokens()
        return axiosWithAuth.request(originalRequest)
      } catch (error) {
        if (
          errorCatch(error) === 'Invalid refresh token' ||
          errorCatch(error) === 'Refresh token not passed'
        )
          removeAccessToken()
      }
    }

    throw error
  }
)
