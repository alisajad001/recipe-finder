import React from "react";

const FoodItem = ({ recipe, setFoodId }) => {
  return (
    <div className="border border-slate-300 shadow-lg p-3 rounded-md w-full flex flex-col">
      <img src={recipe.image} alt="recipe image" className="rounded-md" />
      <h3 className="text-2xl pt-3">{recipe.title}</h3>
      <button
        onClick={() => setFoodId(recipe.id)}
        className="bg-yellow-500 w-full mt-5 p-2 text-slate-900 rounded-md"
      >
        View Recipe
      </button>
    </div>
  );
};

export default FoodItem;
