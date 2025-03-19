import React from "react";
import { assets } from "../../assets/assets_frontend/assets";
import { Link, NavLink, useNavigate } from "react-router";
import NavItems from "./NavItems";
import HeaderRightContent from "./HeaderRightContent";

const UserHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-40 border-b-2 mx-32 sm:mx[10%] sm:mx[10%]">
      <div className="flex items-center justify-between px-4 md:px-6 h-20">
        <Link to="/" className=" cursor-pointer">
          <img className="w-48 h-22 lg:w-48" src={assets.logo} alt="" />
        </Link>

        <div className="flex gap-5">
          <Link
            to={"/admin/admindashboard"}
            className="border-2 border-black rounded-xl w-28 h-9 flex justify-center items-center bg-gray-50"
          >
            Admin Panel
          </Link>

          <Link
            to={"/doctor/doctordashboard"}
            className="border-2 border-black rounded-xl w-28 h-9 flex justify-center items-center bg-gray-50"
          >
            Doctor Panel
          </Link>
        </div>

        <div>
          <NavItems />
        </div>

        <div>
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
