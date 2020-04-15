import React, {Fragment, Component} from 'react';

class FavRecipeItem extends Component{
  constructor(props){
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }


  handleDelete(){
    this.props.onDelete(this.props.recipeItem.id)
  }

  render(){

    if(!this.props.recipeItem){
      return "Loading..."
    }

    const foodNames = this.props.foodItems.map(foodItem => {
      if(foodItem.stock > 0){
        return foodItem.name.toLowerCase()
      }
      return null})

      const ingredients = this.props.recipeItem.ingredients.map((ingredient, index) => {
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

      if(this.props.recipeItem.href){

        return(
          <Fragment>
          <div className="recipe-item">
          <a href= {this.props.recipeItem.href} target="_blank" rel="noopener noreferrer" className="name">{this.props.recipeItem.title}</a>
          <ul>
          {ingredients}
          <li><button onClick={this.handleDelete} id="fave-button">Remove</button></li>

          <hr/>
          </ul>

          </div>
          </Fragment>
        )
      }else{
        return(
          <Fragment>
          <div className="recipe-item">
          <p className="name">{this.props.recipeItem.title}</p>
          <ul>
          {ingredients}
          <li><button onClick={this.handleDelete}>Remove</button></li>

          <hr/>
          </ul>

          </div>
          </Fragment>
        )
      }
    }


}
export default FavRecipeItem;
