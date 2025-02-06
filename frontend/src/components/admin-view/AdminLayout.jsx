import React, { useState } from "react";
import AdminSideBar from "./AdminSideBar";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      {/* Header */}
      <AdminHeader setOpen={setSidebarOpen} />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AdminSideBar isSidebarOpen={isSidebarOpen} />
        {/* Main Content */}
        <main
          className={`flex-1 flex-col flex bg-muted/40 p-4 md:p-6 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          } transition-all duration-300`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout