import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { ChevronDown, ChevronUp, LogOut, UserCog } from "lucide-react";
import { assets } from "@/assets/assets_frontend/assets";

const HeaderRightContent = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center gap-4 ">
      {token ? (
        <div className="cursor-pointer">
          <DropdownMenu>
            <div className="flex items-center justify-between gap-1"> 
            <DropdownMenuTrigger asChild>
              <Avatar className="bg-black">
                <AvatarFallback className="bg-black text-white font-extrabold">
                  {/* {user?.userName[0].toUpperCase()} */}A
                </AvatarFallback>
              </Avatar>

            </DropdownMenuTrigger>
            <ChevronDown className="w-5"/>
            </div>


            <DropdownMenuContent side="right" className="w-56 ">
              <DropdownMenuLabel>
                {/* Logged in as {user?.userName} */}
                Logged in as Adnan
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() =>navigate("/my-profile")} className ="cursor-pointer">
                <UserCog className="mr-2 h-4 w-4" />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() =>navigate("/my-appoinments")} className ="cursor-pointer">
                <img className="mr-2 h-5 w-5" src={assets.appointment_png} alt="" />
                My Appointment
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() =>setToken(false)} className ="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-700 text-white px-8 py-3 rounded-full font-light hidden md:block"
        >
          Create Account
        </button>
      )}
    </div>
  );
};

export default HeaderRightContent;
