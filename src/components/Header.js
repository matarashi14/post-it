import React from "react";
import CreateNote from "./CreateNote";
import { FaStickyNote } from "react-icons/fa";

function Header() {
  return (
    <div className="flex bg-gray-800 w-full p-4 items-center h-16 justify-between">
      <div className="flex items-center">
        {" "}
        <FaStickyNote className="text-3xl mr-4 text-blue-50" />
        <h1 className="text-3xl text-blue-50">Post-it</h1>
      </div>

      <CreateNote />
    </div>
  );
}

export default Header;
