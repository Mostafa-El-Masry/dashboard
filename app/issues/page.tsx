import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div>
      <Button className="w-40" variant="classic" color="indigo" size="2">
        <Link href="/issues/new/"> Add An Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
