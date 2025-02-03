import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSideBar from './AdminSideBar'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      {/* Header */}
      <AdminHeader />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AdminSideBar  />
        {/* Main Content */}
        <main
          className={`flex-1 flex-col flex bg-muted/40 p-4 md:p-6 `}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
