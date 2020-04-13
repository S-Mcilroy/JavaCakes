import React from "react"
import ShoppingListDetail from "./ShoppingListDetail"

const ShoppingList = (props) => {

  	if (props.listItems.length === 0){
  	  return (<p>Browsing...</p>)
  	}

  	const listItems = props.listItems.map((item, index) => {
  	  return (
  	    <li key={index}>
  	    <div>
        <ShoppingListDetail item={item}/>
  	    </div>
  	    </li>
  	  )
  	})

  	return (
      <div className="shopping-list">
      <h1>My Shopping List</h1>
  	  <ul>
  	    {listItems}
  	  </ul>
      </div>
  	)

}
export default ShoppingList;
