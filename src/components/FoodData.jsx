import React from "react";
import FoodItem from "./FoodItem";

const FoodData = ({ recipes }) => {
  return (
    <div className="bg-slate-700 gap-5 w-1/4 flex flex-col justify-center items-center p-3 rounded-md">
      {recipes.map((recipe) => {
        return <FoodItem recipe={recipe} />;
      })}
    </div>
  );
};

export default FoodData;
