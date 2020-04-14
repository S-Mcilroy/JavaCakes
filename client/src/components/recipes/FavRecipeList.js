import React, {Component, Fragment} from 'react'
import Request from '../../helpers/Request'
import FavRecipeItem from './FavRecipeItem.js'


class FavRecipeList extends Component{
  constructor(props){
    super(props)
    this.state = {
      recipes:[],
      foodItems:[],
    }

    this.onDelete = this.onDelete.bind(this);

  }

    onDelete(id){
      const request = new Request();
      const url = "/api/recipes/" + id
      request.delete(url)
      .then(() => {window.location = "/recipes"})
    }

  componentDidMount(){
    const request = new Request();
    request.get('/api/foodItems')
    .then((data) =>{
      this.setState({foodItems: data})})
      request.get("/api/recipes")
      .then((data) =>{
        this.setState({recipes:data})})
      }

      render(){

        if(this.state.recipes.length === 0){
          return(
            <p>You have no Recipes</p>
          )
        }

        const recipes = this.state.recipes.map((recipe, index) => {
          return (
            <div key={index}>
            <FavRecipeItem recipeItem={recipe} onDelete={this.onDelete} foodItems={this.state.foodItems}/>
            </div>
          )
        });


        return (
          <Fragment>
          <div className="recipe-container">
          <h1>Your Recipes</h1>
          {recipes}
          </div>
          </Fragment>
        )
      }
    }

  export default FavRecipeList;
