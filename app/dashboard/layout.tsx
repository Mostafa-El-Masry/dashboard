import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex overflow-hidden">
      <div className="p-5 sidebar h-screen w-1/5">
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default layout;
