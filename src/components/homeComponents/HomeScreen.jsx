import React from 'react'
import AdBanner from './AdBanner'
import { useEffect } from 'react'
import axios from 'axios'
import RecipeContainer from './RecipeContainer'
const HomeScreen = () => {  
  const getRecipes = () => {
    axios
        .get(`https://recipes.devmountain.com/recipes`)
        .then((res) => {
            //setRecipes(res.data)
            console.log(res.data)
        })
}
//on mount
useEffect(()=>{
getRecipes()
},[])
  return (
    <div>
      <AdBanner />
      <RecipeContainer/>
    </div>
  )
}

export default HomeScreen