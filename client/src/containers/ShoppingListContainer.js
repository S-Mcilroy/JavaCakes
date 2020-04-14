import React, {Fragment, Component} from "react";
import ShoppingList from "../components/shoppinglist/ShoppingList.js"
import Request from "../helpers/Request"


class ShoppingListContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      shoppingListItems: []
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/foodItems/onList')
    .then((data) =>{
      this.setState({shoppingListItems : data})})
  }

  render(){

    if(this.state.shoppingListItems.length === 0){
      return (
        <div>
        <p>Your basket is Empty.</p>
        <a href="/categories">Add some items from your kitchen.</a>
        </div>
      )
    }

    return(
      <Fragment>
      <div className="shopping-list-container">
      <ShoppingList listItems={this.state.shoppingListItems}/>
      </div>
      </Fragment>
    )
  }


}

export default ShoppingListContainer;
