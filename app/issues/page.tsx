import { Button } from "@radix-ui/themes";
import { Content } from "next/font/google";
import Link from "next/link";
import React from "react";
import RightBar from "./rightbar/page";

const IssuesPage = () => {
  return (
    <main className="flex flex-row justify-between">
      <div>
        <Button className="w-40" variant="classic" color="indigo" size="2">
          <Link href="/issues/new/"> Add An Issue</Link>
        </Button>
      </div>
      <div className="w-1/6 h-screen p-2 text-center RightBar">
        <RightBar />
      </div>
    </main>
  );
};

export default IssuesPage;
