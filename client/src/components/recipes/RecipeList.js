import React, {Component} from 'react';
import Request from '../../helpers/Request'





class RecipeList extends Component{
  constructor(props){
    super(props)
    this.state = {
      recipes:[],
      foodItems:[]
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/foodItems')
    .then((data) =>{
      this.setState({foodItems: data})})

      let nocors= `https://cors-anywhere.herokuapp.com/`
      const url = 'http://www.recipepuppy.com/api/?q=' + this.props.ingredient
      return fetch(nocors + url)
      .then((res) => res.json())
      .then((data) =>{
        this.setState({recipes:data.results})})
      }

      render(){
        return(
          <h1>hi there</h1>
        )
      }

    }
    export default RecipeList;
