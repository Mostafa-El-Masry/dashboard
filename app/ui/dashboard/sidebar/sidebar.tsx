import Image from "next/image";

const Sidebar = () => {
  return (
    <>
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
            <li>Users</li>
            <li>Products</li>
            <li>Transactions</li>
          </ul>
        </li>

        <li>
          <h2>Analytics</h2>
          <ul>
            <li>Ravnue</li>
            <li>Reports</li>
            <li>Teams</li>
          </ul>
        </li>
        <li>
          <h2>User</h2>
          <ul>
            <li>Setting</li>
            <li>Help</li>
            <li>Logout</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
