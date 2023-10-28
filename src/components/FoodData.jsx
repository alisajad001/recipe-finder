import React from "react";
import FoodItem from "./FoodItem";

const FoodData = ({ recipes, setFoodId }) => {
  return (
    <div className="gap-5 w-1/3 flex flex-col justify-center items-center p-3 rounded-md">
      {recipes.map((recipe) => {
        return (
          <FoodItem key={recipe.id} setFoodId={setFoodId} recipe={recipe} />
        );
      })}
    </div>
  );
};

export default FoodData;
