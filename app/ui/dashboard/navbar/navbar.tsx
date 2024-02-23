"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNoAccounts,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex navbar items-center justify-between capitalize p-6">
      <div className="flex">{pathname.split("/").pop()}</div>
      <div className="flex items-center justify-between gap-5">
        <div className="flex bg-slate-700 text-slate-200 items-center text-lg rounded-2xl">
          <MdSearch />
          <input
            type="text"
            placeholder="Search some thing Mostafa"
            className="bg-transparent p-3  outline-none border-none"
          />
        </div>

        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
