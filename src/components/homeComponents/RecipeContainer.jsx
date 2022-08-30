import React, { useState, useEffect } from "react";
import RecipeCard from "../elements/RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import classes from "./RecipeContainer.module.css";
const RecipeContainer = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });
  const getRecipes = () => {
    axios.get(`https://recipes.devmountain.com/recipes`).then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <section>
      <h2>Search a recipe!</h2>
      <span>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className={classes.sect}>
        {recipeDisplay ? recipeDisplay : <h2>No Recipes :(</h2>}
      </div>
    </section>
  );
};

export default RecipeContainer;
