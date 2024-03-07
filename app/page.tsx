import Link from "next/link";
import Table from "./table";

const Homepage = () => {
  return (
    <div>
      <h1>
        <Link href="/dashboard">Dashboard</Link>
      </h1>
      <Table />
    </div>
  );
};

export default Homepage;
