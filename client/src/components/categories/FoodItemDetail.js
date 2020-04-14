import React, {Component} from 'react';
import Request from "../../helpers/Request.js"
import FoodItem from "./FoodItem";

class FoodItemDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodItem: this.props.foodItem
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.addToShoppingList = this.addToShoppingList.bind(this);
    this.addToStock = this.addToStock.bind(this);
    this.removeStock = this.removeStock.bind(this);
  }

  handleDelete(){
    this.props.onDelete(this.props.foodItem.id)
  }

  addToShoppingList(){
    let foodItem = this.state.foodItem;
    foodItem.shoppingList = true;
     this.setState({foodItem: foodItem})
     const request = new Request();
     const url = "/api/foodItems/" + this.state.foodItem.id
     request.patch(url, this.state.foodItem)
  }
  addToStock(){
    let foodItem = this.state.foodItem;
    foodItem.stock += 1;
    this.setState({foodItem: foodItem})
    const request = new Request();
    const url = '/api/foodItems/' + this.state.foodItem.id
    request.patch(url, this.state.foodItem)
  }
  removeStock(){
    let foodItem = this.state.foodItem;
    if(foodItem.stock <= 0){
      return null
    }
    foodItem.stock -= 1;
    this.setState({foodItem: foodItem})
    const request = new Request();
    const url = '/api/foodItems/' + this.state.foodItem.id
    request.patch(url, this.state.foodItem)
  }



  render(){
    if(!this.props.foodItem){
      return "prepping..."
    }
    const isOnShoppingList = this.props.foodItem.shoppingList;
    let shoppingButton;
    if (!isOnShoppingList) {
      shoppingButton = <button onClick={this.addToShoppingList}>Add to Shopping List</button>;
    }

    return (
      <div className = "food-item">
      <FoodItem foodItem = {this.props.foodItem}/>
      <div className = "buttons">
      <button onClick={this.removeStock}>-</button>
      <p>Stock Level: {this.props.foodItem.stock}</p>
      <button onClick={this.addToStock}>+</button>
      </div>
      {shoppingButton}
      <button onClick={this.handleDelete}>Remove {this.props.foodItem.name}</button>
      </div>
    )
  }
}

export default FoodItemDetail;
