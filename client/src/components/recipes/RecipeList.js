import React, {Component, Fragment} from 'react';
import Request from '../../helpers/Request'
import RecipeItem from './RecipeItem.js'

class RecipeList extends Component{
  constructor(props){
    super(props)
    this.state = {
      recipes:[],
      foodItems:[],
      pageNumber: 10,
      yourRecipes:[]
    }
    this.increasePageNumber = this.increasePageNumber.bind(this);
    this.decreasePageNumber = this.decreasePageNumber.bind(this);
  }

  increasePageNumber(){
    let pageNumber = this.state.pageNumber;
    pageNumber += 1;
    this.setState({pageNumber: pageNumber})
    this.setState({recipes: []})
    let nocors= `https://cors-anywhere.herokuapp.com/`
    const url = 'http://www.recipepuppy.com/api/?i=' + this.props.ingredient + "&p=" + this.state.pageNumber
    return fetch(nocors + url)
    .then((res) => res.json())
    .then((data) =>{this.setState({recipes:data.results})})
  }

  decreasePageNumber(){
    let pageNumber = this.state.pageNumber;
    if (pageNumber === 0){return null;}
    pageNumber -= 1;
    this.setState({pageNumber: pageNumber})
    this.setState({recipes: []})
    let nocors= `https://cors-anywhere.herokuapp.com/`
    const url = 'http://www.recipepuppy.com/api/?i=' + this.props.ingredient + "&p=" + this.state.pageNumber
    return fetch(nocors + url)
    .then((res) => res.json())
    .then((data) =>{this.setState({recipes:data.results})})
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/foodItems')
    .then((data) =>{
      this.setState({foodItems: data})});

      request.get('/api/recipes')
      .then((data) =>{
        this.setState({yourRecipes:data})});

        
      let nocors= `https://cors-anywhere.herokuapp.com/`
      const url = 'http://www.recipepuppy.com/api/?i=' + this.props.ingredient + "&p=" + this.state.pageNumber
      return fetch(nocors + url)
      .then((res) => res.json())
      .then((data) =>{
        this.setState({recipes:data.results})})
      }

      render(){

        if(this.state.recipes.length === 0){
          return(
            <p>Loading...</p>
          )
        }

        const recipes = this.state.recipes.map((recipe, index) => {
          return (
            <div key={index}>
            <RecipeItem recipeItem={recipe} foodItems={this.state.foodItems} yourRecipes = {this.state.yourRecipes}/>
            </div>
          )
        });


        if(this.state.pageNumber === 10){
          return (
            <Fragment>
            <div className="recipe-container">
            <h1>Recipes Featuring {this.props.ingredient}</h1>
            {recipes}
            <button onClick={this.increasePageNumber}>Next Page</button>
            </div>
            </Fragment>
          )
        } else {
          return (
            <Fragment>
            <div className="recipe-container">
            <h1>Recipes Featuring {this.props.ingredient}</h1>
            {recipes}
            <button onClick={this.decreasePageNumber}>Previous Page</button>
            <button onClick={this.increasePageNumber}>Next Page</button>
            </div>
            </Fragment>
          )
        }
      }

    }
    export default RecipeList;
