import React, {Component} from 'react';
import FoodItem from "./FoodItem";
import {Link} from 'react-router-dom';
{/* I think we moght need this page to add items to the shopping list.
  Also go over this with the team in the morning. It doesnt seem right.*/}

class FoodItemDetail extends Components {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.addToShoppingList p this.addToShoppingList.bind(this);
  }

  handleDelete(){
    this.props.onDelete(this.props.foodItem.id)
  }
  addToShoppingList(){
     this.props.foodItem.shoppingList = true
  }

  render(){
    if(!this.props.foodItem){
      return "prepping.."
    }


    return (
      <div className = "component">
      <FoodItem foodItem = {this.props.foodItem}/>
      <button onClick={this.deleteFoodItem}>Remove{this.props.foodItem.name}</button>
      <button onClick={this.addToShoppingList}>Add to Shopping List{this.props.fooditem.name}</button>
      </div>
    )
  }
}
