import { axiosWithAuth } from '@/api/interceptors.ts'
import type { TDashboardData } from '@/types/dashboard.types.ts'

class DashboardService {
  private BASE_URL = '/dashboard'

  async getDashboards() {
    return await axiosWithAuth.get(`${this.BASE_URL}/all`)
  }

  async getDashboard(id: string) {
    return await axiosWithAuth.get(`${this.BASE_URL}/${id}`)
  }

  async createDashboard(data: TDashboardData) {
    return await axiosWithAuth.post(`${this.BASE_URL}`, data)
  }

  async deleteDashboard(id: string) {
    return await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
  }
}

export const dashboardService = new DashboardService()
