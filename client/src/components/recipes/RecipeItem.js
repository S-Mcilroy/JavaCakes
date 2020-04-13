import React, {Fragment} from 'react';

const RecipeItem = (props) => {
  if(!props.recipeItem){
    return "Loading..."
  }

  const foodNames = props.foodItems.map(foodItem => {
    if(foodItem.stock > 0){
      return foodItem.name.toLowerCase()
    }})

    const ingredients = props.recipeItem.ingredients.split(",").filter(words => words.charAt(3) !== " ").map((ingredient, index) => {
      if(foodNames.includes(ingredient.trim())){
        return (
          <li key={index} className="component-item" style={{color: 'green'}}>
          {ingredient} ✅
          </li>
        )
      }
      return (
        <li key={index} className="component-item" style={{color: 'red'}}>
        {ingredient} ❌
        </li>
      )
    });


    return(
      <Fragment>
      <div className="recipe-item">
      <a href= {props.recipeItem.href} className="name">{props.recipeItem.title}</a>
      <ul>
      {ingredients}
      <hr/>
      </ul>
      </div>
      </Fragment>
    )
  }
  export default RecipeItem;
