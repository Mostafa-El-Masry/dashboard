"use client";
import Link from "next/link";
import {
  MdNoAccounts,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {

  const links = [
    {href:"/", label:"Home"},
    {href:"/dashboard", label:"DashBoard"},
  ]

  return (
    <div className="flex navbar items-center justify-between capitalize p-4">
      <div className="flex">
      <ul>
        {links.map(link => <Link key={link.href} href={link.href} 
        className="ml-6"
        >{link.label}</Link>)}
      </ul>
      </div>
      
      <div className="flex items-center justify-between gap-5">
        <div className="flex bg-slate-700 text-slate-200 items-center text-lg rounded-2xl">
          <MdSearch />
          <input
            type="text"
            placeholder="Search some thing Mostafa"
            className="bg-transparent p-1  outline-none border-none"
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
