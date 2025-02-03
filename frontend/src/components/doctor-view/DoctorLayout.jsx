import React from "react";
import DoctorHeader from "./DoctorHeader";
import DoctorSideBar from "./DoctorSideBar";
import { Outlet } from "react-router";

const DoctorLayout = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      {/* Header */}
      <DoctorHeader />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <DoctorSideBar />
        {/* Main Content */}
        <main className={`flex-1 flex-col flex bg-muted/40 p-4 md:p-6 `}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
