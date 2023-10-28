import React, { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "6b50657349e641b3b88a0fc3dcfc9bd0";

const Search = ({ setRecipes }) => {
  const [query, setQuery] = useState("pizza");

  const fetchData = async () => {
    const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    setRecipes(data.results);
  };

  const handleClick = () => {
    fetchData();
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="pizza..."
        className="mr-3 py-2 px-3 rounded-md border border-slate-400 outline-none"
      />
      <button
        className="bg-yellow-500 hover:bg-orange-500 transition w-10 h-10 text-white rounded-full"
        onClick={handleClick}
      >
        🔍
      </button>
    </div>
  );
};

export default Search;
