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

        const links = this.state.foodItems.map((item, index) => {
          const url = "/recipes/" + item.name;
          return (
            <div key={index}>
            <li><a href={url}>Recipes containing: {item.name}</a></li>
            </div>
          )
        });

        if(this.state.recipes.length === 0){
          return(
            <div className="text-box">
            <p>You have no recipes yet.</p>
            <p>Why not search for one of the items in your kitchen?</p>
            {links}
            </div>
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
