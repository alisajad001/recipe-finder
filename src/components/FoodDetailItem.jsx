import React from "react";

const FoodDetailItem = ({ item }) => {
  return (
    <div className="flex p-3 rounded-md gap-5 items-center border border-slate-300">
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
        alt="image"
        className="w-16"
      />
      <h4 className="text-xl">{item.name}</h4>
    </div>
  );
};

export default FoodDetailItem;
