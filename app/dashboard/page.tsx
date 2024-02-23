import React from "react";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Cart from "../ui/dashboard/cart/cart";

const DashBoard = () => {
  return (
    <div className="flex flex-row justify-between gap-3">
      <div className="flex flex-4 flex-col gap-3">
        <div className="flex-1 mt-5 mb-5">
          <Cart />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
};

export default DashBoard;
