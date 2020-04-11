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
      return "Your basket is Empty."
    }

    return(
      <Fragment>
      <ShoppingList listItems={this.state.shoppingListItems}/>
      </Fragment>
    )
  }


}

export default ShoppingListContainer;
