import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './RecipeCard.module.css'
const RecipeCards = ({recipe}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
}
  return (
    <div className={classes.box}>
    <div>
      <div className={classes.photobox}>
        <img src={recipe.image_url} />
        {/* <img src="https://www.atablefullofjoy.com/wp-content/uploads/2020/02/German-Chocolate-Cake-Recipe-SQUARE.jpg" /> */}
      </div>
      <h3 className={classes.name}>{recipe.recipe_name}</h3>
    </div>
    <button className={classes.button} onClick={handleClick} >See More</button>
  </div>
  )
}

export default RecipeCards