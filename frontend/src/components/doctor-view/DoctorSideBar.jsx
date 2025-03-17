import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Correct import for Link
import { assets } from '@/assets/assets_admin/assets'; // Ensure this path is correct

// Define doctor sidebar menu items
const doctorSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/doctor/doctordashboard",
    icon: <img className="w-8" src={assets.dashboard_icon} alt="Dashboard Icon" />,
  },
  {
    id: "profile",
    label: "Profile",
    path: "/doctor/doctorprofile",
    icon: (
      <img
        className="w-11"
        src="https://img.icons8.com/?size=100&id=y6PHsinv4G3f&format=png&color=000000"
        alt="Profile Icon"
      />
    ),
  },
  {
    id: "appointments",
    label: "Appointments",
    path: "/doctor/doctorappointments",
    icon: <img className="w-8" src={assets.appointment_icon} alt="Appointments Icon" />,
  },
];

const DoctorSideBar = () => {
  const location = useLocation(); // Get the current path

  return (
    <nav className="mt-8 flex flex-col gap-2">
      {doctorSidebarMenuItems.map((menuItem) => (
        <Link
          className={`flex cursor-pointer text-xl items-center gap-2 rounded-s-lg px-3 py-2 text-muted-foreground hover:bg-blue-100 hover:text-foreground border-y-2 border-l-2 ${
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

export default DoctorSideBar;