import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import FoodItemForm from '../components/fooditems/FoodItemForm';

class FoodItemContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: [],
    }
    this.handlePost = this.handlePost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/categories')
    .then((data) =>{
      this.setState({categories : data})})
  }

  handlePost(foodItem){
    const request = new Request();
    const url = "/api/foodItems"
    request.post(url, foodItem)
    .then(() => window.location = "/categories")
  }

  render(){

    if(!this.state.categories){
      return null
    }

    return (
      <Router>
      <Fragment>
      <Switch>
      <Route exact path="/fooditems/new" render={(props) => {
        return <FoodItemForm categories={this.state.categories} onCreate={this.handlePost}/>
      }} />
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default FoodItemContainer;
