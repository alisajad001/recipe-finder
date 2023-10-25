import React from "react";

const Search = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="pizza..."
        className="mr-3 py-2 px-3 rounded-md border border-slate-400 outline-none"
      />
      <button className="bg-orange-400 hover:bg-orange-500 transition w-10 h-10 text-white rounded-full">
        🔍
      </button>
    </div>
  );
};

export default Search;
