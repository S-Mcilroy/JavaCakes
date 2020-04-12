import React, {Fragment} from 'react';

const RecipeItem = (props) => {
  if(!props.recipeItem){
    return "Loading..."
  }

  const ingredients = props.recipeItem.ingredients.split(",").filter(words => words.charAt(3) !== " ").map((ingredient, index) => {
    return (
      <li key={index} className="component-item">
      {ingredient}
      </li>
    )
  });


  return(
    <Fragment>
    <a href= {props.recipeItem.href} className="name">{props.recipeItem.title}</a>
    <ul>
    {ingredients}
    </ul>
    </Fragment>
  )
}
export default RecipeItem;
