import React, {Fragment, Component} from 'react';
import Request from "../../helpers/Request";


class RecipeItem extends Component{
  constructor(props){
    super(props)
    this.state ={
      recipe: {
        title:this.props.recipeItem.title,
        ingredients:[],
        href:this.props.recipeItem.href
      },
      counter: 0

    }
    this.addToFavRecipes = this.addToFavRecipes.bind(this);
  }

  componentDidMount(){
    let recipeIngredients = this.props.recipeItem.ingredients.split(",").filter(words => words.charAt(3) !== " ")
    let trimIngredients = recipeIngredients.map(ingredient => ingredient.trim())
    let recipe = this.state.recipe;
    recipe["ingredients"] = trimIngredients
    this.setState({recipe: recipe})
  }

  addToFavRecipes(){
    const request = new Request();
    const url = "/api/recipes"
    request.post(url, this.state.recipe)
  let counter = this.state.counter += 1;
  this.setState({counter: counter})
    }

  render(){

    const yourRecipesTitles = this.props.yourRecipes.map(recipe => recipe.title)

    if(this.props.fooditems){
      return "Loading..."
    }
    const foodNames = this.props.foodItems.map(foodItem => {
      if(foodItem.stock > 0){
        return foodItem.name.toLowerCase()
      }})

      const ingredients = this.props.recipeItem.ingredients.split(",").filter(words => words.charAt(3) !== " ").map((ingredient, index) => {
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

if(this.state.counter === 0 || yourRecipesTitles.includes(this.props.recipeItem.title)){

      return(
        <Fragment>
        <div className="recipe-item">
        <a href= {this.props.recipeItem.href} target='_blank' className="name">{this.props.recipeItem.title}</a>
        <ul>
        {ingredients}
        <button onClick={this.addToFavRecipes}>Add To Favourites</button>
        <hr/>
        </ul>
        </div>
        </Fragment>
      )
    }else{
      return(
        <Fragment>
        <div className="recipe-item">
        <a href= {this.props.recipeItem.href} target='_blank' className="name">{this.props.recipeItem.title}</a>
        <ul>
        {ingredients}
        <p>On Favourites</p>
        <hr/>
        </ul>
        </div>
        </Fragment>
      )
    }
    }
  }

  export default RecipeItem;
