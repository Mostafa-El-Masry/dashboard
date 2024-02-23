import Image from "next/image";
import Link from "next/link";
import MenuLink from "../sidebar/menuLink/menuLink";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaBeer, FaMoneyBillWave } from "react-icons/fa";
import { FaBarsProgress, FaChalkboardUser } from "react-icons/fa6";
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { SiHelpscout } from "react-icons/si";
import { TbLogout2, TbReportSearch } from "react-icons/tb";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaChalkboardUser />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdProductionQuantityLimits />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <AiOutlineTransaction />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <FaMoneyBillWave />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <TbReportSearch />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <RiTeamFill />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Setting",
        path: "/dashboard/setting",
        icon: <FaBarsProgress />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <SiHelpscout />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-5">
      <div className="flex justify-center">
        <img
          src="/admin.jpeg"
          alt="Admin booty"
          className="w-24 rounded-full"
        />
        <div className="flex flex-col justify-center">
          <span className="p-1">Mostafa</span>
          <span className="p-1">adminstator</span>
        </div>
      </div>
      <ul className="text-lg">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
