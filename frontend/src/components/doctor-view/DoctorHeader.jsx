import { logoutUser } from '@/store/Auth-Slice';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { AlignJustify, LogOut } from 'lucide-react';
import { assets } from '@/assets/assets_frontend/assets';

const DoctorHeader = ({setOpen}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/");
  }

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-3 bg-background border-b">
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle Button (Visible on Mobile) */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center p-2 rounded-md text-muted-foreground hover:bg-muted"
        >
          <AlignJustify size={20} />
        </button>
        {/* Logo */}
        <div className="flex items-center gap-3" >
          <img
            className="w-36 md:w-48"
            src={assets.logo}
            alt="Logo"
            onClick={() => navigate("/admin/admindashboard")}
          />

          <div className="border-2 border-black rounded-xl w-16 flex justify-center items-center bg-gray-50">Doctor</div>
        </div>
      </div>
      {/* Logout Button */}
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-3 py-2 text-sm font-medium shadow bg-blue-700 hover:bg-blue-600"
        >
          <LogOut size={16} />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
}

export default DoctorHeader
