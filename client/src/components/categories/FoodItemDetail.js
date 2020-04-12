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
      <div className = "component">
      <FoodItem foodItem = {this.props.foodItem}/>

      <button onClick={this.handleDelete}>Remove {this.props.foodItem.name}</button>
      {shoppingButton}
      </div>
    )
  }
}

export default FoodItemDetail;
