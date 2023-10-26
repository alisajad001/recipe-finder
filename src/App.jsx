import React, { useState } from "react";
import NavBar from "./components/NavBar";
import FoodData from "./components/FoodData";
import Container from "./components/Container";
import FoodDetails from "./components/FoodDetails";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <NavBar
        recipe={recipes}
        setRecipes={setRecipes}
        setIsLoading={setIsLoading}
      />

      <Container>
        <FoodData recipes={recipes} />
        <FoodDetails />
      </Container>
    </>
  );
};

export default App;
