import React, {Component} from 'react';
import Request from "../../helpers/Request.js"
import ShoppingListItem from "./ShoppingListItem";

class ShoppingListDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    this.removeFromShoppingList = this.removeFromShoppingList.bind(this);
  }

  removeFromShoppingList(){
     this.props.item.shoppingList = false
     const request = new Request();
     let newCounter = this.state.counter;
     const url = "/api/foodItems/" + this.props.item.id
     request.patch(url, this.props.item)
     .then(this.setState({counter: newCounter += 1}))
     .then( () => {window.location="/shoppinglist"})
  }

  render(){
    if(!this.props.item){
      return "prepping..."
    }

    return (
      <div className = "component">
      <ShoppingListItem item = {this.props.item}/>
      <button onClick={this.removeFromShoppingList}>Remove Basket</button>
      </div>
    )
  }
}

export default ShoppingListDetail;
