import React, {Fragment, Component} from 'react';
import Request from "../../helpers/Request.js"

class LowStockItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      foodItem: this.props.foodItem
    }
    this.addToShoppingList = this.addToShoppingList.bind(this);
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

    if(!this.state.foodItem){
      return(
        <p>Loading...</p>
      )
    }

    const isOnShoppingList = this.props.foodItem.shoppingList;
    let shoppingButton;
    if (!isOnShoppingList) {
      shoppingButton = <button onClick={this.addToShoppingList}>Add to Shopping List</button>;
    } else {
      shoppingButton = <p>On Shopping List</p>
    }

    if(this.state.foodItem.stock === 0){
      return (
        <Fragment>
        <p>{this.state.foodItem.name}</p>
        <p>Stock Level: <span style={{color: 'red'}}>{this.state.foodItem.stock}</span></p>
        {shoppingButton}
        </Fragment>
      )
    } else {
      return (
        <Fragment>
        <p>{this.state.foodItem.name}</p>
        <p>Stock Level: <span style={{color: 'orange'}}>{this.state.foodItem.stock}</span></p>
        {shoppingButton}
        </Fragment>
      )
    }
  }


}
export default LowStockItem;
