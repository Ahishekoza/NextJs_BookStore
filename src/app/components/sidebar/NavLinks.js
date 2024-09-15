import Link from "next/link";
import React from "react";
import { FaHome, FaBookOpen, FaShoppingCart, FaTruck } from "react-icons/fa";
import {
  HiMiniRectangleStack,
  HiOutlineCubeTransparent,
} from "react-icons/hi2";
import { MdGroups } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { PiSquaresFourBold } from "react-icons/pi";

const links = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Books", href: "/store", icon: FaBookOpen },
  {
    name: "Sell or Lend",
    href: "/store/sell-lend",
    icon: HiMiniRectangleStack,
  },
  { name: "Cart", href: "/store/cart", icon: FaShoppingCart },
  { name: "Track Order", href: "/store/track-order", icon: FaTruck },
  { name: "Community", href: "/store/communities", icon: MdGroups },
  { name: "Settings", href: "/store/settings", icon: IoMdSettings },
  { name: "About", href: "/store/about", icon: PiSquaresFourBold },
  { name: "Admin", href: "/store/admin", icon: HiOutlineCubeTransparent },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const IconComponent = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <IconComponent className="w-6"/>
            <p className="hidden md:block">
              {link.name}
              </p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
