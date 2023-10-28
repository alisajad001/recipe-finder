import React, { useEffect, useState } from "react";
import FoodDetailItem from "./FoodDetailItem";

const FoodDetails = ({ foodId, isLoading, setIsLoading }) => {
  const [food, setFood] = useState({});

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "6b50657349e641b3b88a0fc3dcfc9bd0";

  const fetchFood = async () => {
    const res = await fetch(`${URL}?apiKey=${API_KEY}`);
    const data = await res.json();
    setFood(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFood();
  }, [foodId]);
  return (
    <div className="shadow-2xl shadow-slate-00 w-1/2 p-7 rounded-md h-auto border border-slate-300">
      <img src={food.image} className="w-full rounded-md" />
      <h3 className="text-4xl py-7 font-bold">{food.title}</h3>

      <div className="flex justify-evenly py-4">
        <span>🕒 Cooking time: {food.readyInMinutes}</span>
        <span>{food.vegetarian ? "🥦 Vegetarian" : "🍗 Non-vegetarian"}</span>
        <span>👨‍👩‍👦 Servings: {food.servings}</span>
      </div>

      <div className="flex flex-col gap-3 justify-center">
        <h2 className="text-3xl">Ingredients: </h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.extendedIngredients.map((item) => {
            return <FoodDetailItem item={item} key={item.name} />;
          })
        )}
      </div>

      <div className="mt-5">
        <h2 className="text-3xl py-6">Instructions: </h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => {
            return (
              <li className="mt-4 text-lg text-slate-700 " key={step.number}>
                {step.step}
              </li>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
