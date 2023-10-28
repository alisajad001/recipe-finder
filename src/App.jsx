import React, { useState } from "react";
import NavBar from "./components/NavBar";
import FoodData from "./components/FoodData";
import Container from "./components/Container";
import FoodDetails from "./components/FoodDetails";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [foodId, setFoodId] = useState("656329");

  return (
    <>
      <NavBar
        recipe={recipes}
        setRecipes={setRecipes}
        foodId={foodId}
        setFoodId={setFoodId}
      />

      <Container>
        <FoodData recipes={recipes} setFoodId={setFoodId} />
        <FoodDetails
          foodId={foodId}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </Container>
    </>
  );
};

export default App;
