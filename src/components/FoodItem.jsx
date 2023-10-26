import React from "react";

const FoodItem = ({ recipe }) => {
  return (
    <div className="bg-slate-600 p-3 rounded-md">
      <img src={recipe.image} alt="recipe image" className="rounded-md" />
      <h3 className="text-white text-2xl pt-3">{recipe.title}</h3>
      <button className="bg-yellow-500 w-full mt-5 p-2 text-slate-900 rounded-md">
        View Recipe
      </button>
    </div>
  );
};

export default FoodItem;
