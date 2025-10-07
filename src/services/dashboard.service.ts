import { axiosWithAuth } from '@/api/interceptors.ts'

class DashboardService {
  private BASE_URL = '/dashboard'

  async getDashboards() {
    return await axiosWithAuth.get(`${this.BASE_URL}/all`)
  }

  async getDashboard(id: string) {
    return await axiosWithAuth.get(`${this.BASE_URL}/${id}`)
  }
}

export const dashboardService = new DashboardService()
