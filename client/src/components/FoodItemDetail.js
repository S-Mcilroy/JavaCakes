import React, {Component} from 'react';
import Request from "../helpers/Request.js"
import FoodItem from "./FoodItem";
import {Link} from 'react-router-dom';
{/* I think we moght need this page to add items to the shopping list.
  Also go over this with the team in the morning. It doesnt seem right.*/}

class FoodItemDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.addToShoppingList = this.addToShoppingList.bind(this);
  }

  handleDelete(){
    this.props.onDelete(this.props.foodItem.id)
  }

  addToShoppingList(){
     this.props.foodItem.shoppingList = true
     const request = new Request;
     let newCounter = this.state.counter;
     const url = "/api/foodItems/" + this.props.foodItem.id
     request.patch(url, this.props.foodItem)
     .then(this.setState({counter: newCounter += 1}))
  }

  render(){
    if(!this.props.foodItem){
      return "prepping.."
    }
    const isOnShoppingList = this.props.foodItem.shoppingList;
    let shoppingButton;
    if (!isOnShoppingList) {
      shoppingButton = <button onClick={this.addToShoppingList}>Add to Shopping List</button>;
    }

    return (
      <div className = "component">
      <FoodItem foodItem = {this.props.foodItem}/>
      <button onClick={this.deleteFoodItem}>Remove {this.props.foodItem.name}</button>
      {shoppingButton}
      </div>
    )
  }
}

export default FoodItemDetail;
