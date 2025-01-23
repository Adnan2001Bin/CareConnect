import { userViewNavItems } from "@/Config";
import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row relative">
      {userViewNavItems.map((navItem) => (
        <div
          key={navItem.id}
          className="hidden h-8 md:flex items-start gap-5 font-medium"
        >
          <NavLink
            to={navItem.path}
            className="flex flex-col items-center gap-1"
          >
            <p className="text-sm">{navItem.label}</p>
            <hr
              className={`w-2/4 border-none h-0.5 bg-gray-700 ${
                navItem.isActive ? "" : "hidden"
              }`}
            />
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default NavItems;
