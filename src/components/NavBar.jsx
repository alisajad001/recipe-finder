import React from "react";
import Search from "./Search";

const NavBar = ({ setRecipes, setIsLoading }) => {
  return (
    <div className="flex items-center fixed w-full shadow-2xl bg-slate-700 p-4">
      <a href="#" className="font-bold text-2xl mr-auto text-slate-100">
        🍕 Recipizza
      </a>
      <Search setRecipes={setRecipes} setIsLoading={setIsLoading} />
    </div>
  );
};

export default NavBar;
