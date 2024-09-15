import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { PiSignOutFill } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div>
      <Link
        className="mb-4 flex h-20 items-end justify-start rounded-md bg-purple-600 p-4 md:h-30"
        href="/store"
      >
        <div className="w-32 text-white md:w-40">
          <Logo />
        </div>
      </Link>

      <div className="flex flex-wrap space-x-2 flex-row justify-center gap-2 md:flex-col md:justify-start md:space-x-0 md:space-y-2 ">
        <NavLinks />
        <form>
          <button className="flex h-[48px] w-full justify-center items-center md:justify-start px-2 gap-2 bg-gray-50 rounded-sm">
            <PiSignOutFill className="w-6" />
            <p className="text-sm font-medium hidden md:block">SignOut</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
