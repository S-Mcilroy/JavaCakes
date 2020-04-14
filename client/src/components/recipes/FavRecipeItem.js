import React, {Fragment} from 'react';

const FavRecipeItem = (props) => {
  if(!props.recipeItem){
    return "Loading..."
  }

  const foodNames = props.foodItems.map(foodItem => {
    if(foodItem.stock > 0){
      return foodItem.name.toLowerCase()
    }})

    const ingredients = props.recipeItem.ingredients.map((ingredient, index) => {
      if(foodNames.includes(ingredient.toLowerCase())){
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

    if(props.recipeItem.href){

    return(
      <Fragment>
      <div className="recipe-item">
      <a href= {props.recipeItem.href} target="_blank" className="name">{props.recipeItem.title}</a>
      <ul>
      {ingredients}
      <hr/>
      </ul>
      </div>
      </Fragment>
    )
  }else{
    return(
      <Fragment>
      <div className="recipe-item">
      <p className="name">{props.recipeItem.title}</p>
      <ul>
      {ingredients}
      <hr/>
      </ul>
      </div>
      </Fragment>
    )
  }
  }
  export default FavRecipeItem;
