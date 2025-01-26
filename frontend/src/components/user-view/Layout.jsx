import React from "react";
import UserHeader from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div className="flex flex-col overflow-hidden min-h-screen mt-2 ">
      <div className="w-full ">
        <UserHeader />
        <main className="flex flex-col w-full">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
