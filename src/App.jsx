import React, { useState } from "react";
import NavBar from "./components/NavBar";

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

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        recipes.map((recipe) => {
          return <h3>{recipe.title}</h3>;
        })
      )}
    </>
  );
};

export default App;
