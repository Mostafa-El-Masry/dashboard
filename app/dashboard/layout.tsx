import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="p-5 sidebar h-screen w-1/5">
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
