import React from "react";
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import classes from "./DetailScreen.module.css";
import axios from "axios";
const DetailScreen = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});
  const url = "https://recipes.devmountain.com";
  useEffect(() => {
    axios
        .get(`${url}/recipes/${id}`)
        .then((res) => {
            setRecipe(res.data)
            console.log(recipe)
        });
  }, [])
  
  return (
    <div className={classes.page}>

      <div style={{
background: `lightblue url(${recipe.image_url}) no-repeat center`,

      }} className={classes.backgroundimage}>

        <div className={classes.backgroundimageoverlay}>

          <h1>{recipe.recipe_name}</h1>

        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.info}>
          <div className={classes.recipe}>
            <h3>Recipe</h3>
            <h4>Prep Time: {recipe.prep_time}</h4>
            <h4>Cook Time: {recipe.cook_time}</h4>
            <h4>Serves: {recipe.serves}</h4>
            </div>
          <div className={classes.ingredient}>
          <h3>Ingredients</h3>
          {recipe.ingredients && recipe.ingredients.map((ing, index) => {
              return <h4>{ing.quantity} {ing.ingredient}</h4>
            })}
          <p>list of Ingredients</p>
            </div>
        </div>
        <div className={classes.instructions}>
        <h3>Instructions</h3>
        <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
          </div>
      </div>
    </div>
  );
};

export default DetailScreen;
