import { assets } from "@/assets/assets_admin/assets";
import {
  BadgeCheck,
  ChartNoAxesCombined,
  CirclePlus,
  LayoutDashboard,
  Logs,
  ShoppingBasket,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/admindashboard",
    icon: <img className="w-8" src={assets.dashboard_icon} alt="" />,
  },
  {
    id: "appointments",
    label: "Appointments",
    path: "/admin/appointments",
    icon: <img className="w-8" src={assets.appointment_icon} alt="" />,
  },
  {
    id: "addDoctor",
    label: "Add Doctor",
    path: "/admin/addDoctor",
    icon: <img className="w-8" src={assets.add_icon} alt="" />,
  },

  {
    id: "doctorList",
    label: "Doctor List",
    path: "/admin/doctorList",
    icon: <img className="w-8" src={assets.list} alt="" />,
  },
];

const MenuItems = () => {
  const location = useLocation(); // Get the current path

  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <Link
          className={`w- flex cursor-pointer text-xl items-center gap-2 rounded-s-lg px-3 py-2 text-muted-foreground hover:bg-blue-100 hover:text-foreground border-y-2 border-l-2 ${
            location.pathname === menuItem.path
              ? "bg-blue-200 text-foreground border-y-3 border-blue-700" // Active link style
              : ""
          }`}
          key={menuItem.id}
          to={menuItem.path}
        >
          {menuItem.icon} <span>{menuItem.label}</span>
        </Link>
      ))}
    </nav>
  );
};

const AdminSidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`fixed  lg:relative w-64 flex-col border-r bg-background pl-4 py-3 lg:flex  ${
        isSidebarOpen ? "block" : "hidden"
      }`}
    >
      <MenuItems />
    </div>
  );
};

export default AdminSidebar;
