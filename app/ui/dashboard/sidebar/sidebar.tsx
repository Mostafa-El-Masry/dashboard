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
        title: "Settings",
        path: "/dashboard/settings",
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
    <div>
      <div>
        <ul>
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
      <ul>
        <li>
          <ul>
            <Image src="" alt="" />
            <li>UserName</li>
            <li>userPremission</li>
          </ul>
        </li>
        <li>
          <h2>Pages</h2>
          <ul>
            <li>
              <Link href="/dashboard/users">Users </Link>
            </li>
            <li>
              <Link href="/dashboard/products">Products</Link>
            </li>
            <li>
              <Link href="/dashboard/transactions">Transactions</Link>
            </li>
          </ul>
        </li>

        <li>
          <h2>Analytics</h2>
          <ul>
            <li>
              <Link href="/dashboard/ravenu">Ravnue</Link>
            </li>
            <li>
              <Link href="/dashboard/reports">Reports</Link>
            </li>
            <li>
              <Link href="/dashboard/teams">Teams</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>User</h2>
          <ul>
            <li>
              <Link href="/dashboard/setting">Setting</Link>
            </li>
            <li>
              <Link href="/dashboard/help">Help</Link>
            </li>
            <li>
              <TbLogout2 />
              <Link href="/dashboard/logout">Logout</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
