import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FoodItemList from '../components/FoodItemList';
import FoodItemDetail from '../components/FoodItemDetail';
import Request from '../helpers/Request';
import FoodItemForm from '../components/FoodItemForm';

class FoodItemContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      foodItems:[],
      categories: []
    }
    this.findFoodItemById = this.findFoodItemById.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/categories')
    .then((data) =>{
      this.setState({
        categories : data
      })
    })
  }

  findFoodItemById(id){
    return this.state.foodItem.find((foodItem) => {
      return foodItem.id === parseInt(id);
    });
  }

  handleDelete(id){
    const request = new Request();
    const url = "/api/foodItems/" + id
    request.delete(url)
    .then(() => window.location = "/categories")
  }

  handlePost(foodItem){
    const request = new Request();
    const url = "/api/foodItems"
    request.post(url, foodItem)
    .then(() => window.location = "/categories")
  }

  handleUpdate(foodItem){
    const request = new Request();
    request.patch('/api/foodItems/' + foodItem.id, foodItem)
      .then(() => window.location = "/categories")
  }

  render(){

    if(!this.state.foodItems){
      return null
    }

    return (
      <Router>
      <Fragment>
      <Switch>
      <Route exact path="/foodItems/new" render={(props) => {
        return <FoodItemForm categories={this.state.categories} onCreate={this.handlePost}/>
      }} />
      <Route exact path="/foodItems/:id/edit" render={(props) =>{
        const id = props.match.params.id
        const foodItem = this.findFoodItemById(id);
        return <FoodItemForm foodItem={foodItem}
        categories={this.state.categories} onUpdate={this.handleUpdate}/>
      }}/>
      <Route exact path="/foodItems/:id" render={(props) =>{
        const id = props.match.params.id;
        const foodItem = this.findFoodItemsById(id);
        return <FoodItemDetail fooditem={foodItem}
        onDelete={this.handleDelete}
        onUpdate={this.handleUpdate}/>
      }}/>
      <Route render={(props) => {
        return <FoodItemList foodItems={this.state.foodItems}/>
      }} />
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default FoodItemContainer;
