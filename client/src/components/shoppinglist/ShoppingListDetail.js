import React, {Component} from 'react';
import Request from "../../helpers/Request.js"
import ShoppingListItem from "./ShoppingListItem";

class ShoppingListDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: this.props.item,
      stockLevel: 0
    }
    this.removeFromShoppingList = this.removeFromShoppingList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  removeFromShoppingList(){
    let item = this.state.item;
    item.shoppingList = false;
    item.stock += this.state.stockLevel
    this.setState({item: item})
     const request = new Request();
     const url = "/api/foodItems/" + this.state.item.id
     request.patch(url, this.state.item)

  }
  handleChange(event){
    let item = parseInt(event.target.value);
    this.setState({stockLevel: item})
  }




  render(){
    if(!this.state.item){
      return "prepping..."
    }

    const isOnShoppingList = this.state.item.shoppingList;
    let shoppingButton;
    let input;
    if (isOnShoppingList) {
      input = <input type="number" min="0" name='stock' placeholder="Required Amount" onChange={this.handleChange}/>
      shoppingButton =   <button onClick={this.removeFromShoppingList}>Purchased</button>;
}else{
  input = <p>Item Purchased</p>
}


    return (
      <div className = "component">
      <ShoppingListItem item = {this.state.item}/>
      {input}
      {shoppingButton}
      </div>
    )
  }
}

export default ShoppingListDetail;
