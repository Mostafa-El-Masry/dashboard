"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root aria-placeholderer="Search the docs…">
        <TextField.Input placeholder="title" />
        <TextField.Slot>
          <FaMagnifyingGlass height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>

      <SimpleMDE placeholder="Discribtion" className=""></SimpleMDE>

      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
