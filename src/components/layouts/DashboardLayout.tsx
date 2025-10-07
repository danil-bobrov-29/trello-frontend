import { Outlet } from 'react-router'

import Header from '@/components/sections/Header.tsx'
import Sidebar from '@/components/sections/Sidebar.tsx'

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default DashboardLayout
