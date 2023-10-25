import React from "react";
import Search from "./Search";

const NavBar = () => {
  return (
    <div className="flex items-center fixed w-full bg-white shadow-2xl p-4">
      <a href="#" className="font-bold text-2xl mr-auto text-gray-800">
        🍕 Recipizza
      </a>
      <Search />
    </div>
  );
};

export default NavBar;
