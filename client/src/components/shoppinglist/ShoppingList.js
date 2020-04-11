import React from "react"
import ShoppingListDetail from "./ShoppingListDetail"

const ShoppingList = (props) => {

  	if (props.listItems.length === 0){
  	  return (<p>Loading...</p>)
  	}

  	const listItems = props.listItems.map((item, index) => {
  	  return (
  	    <li key={index} className="component-item">
  	    <div className="component">
        <ShoppingListDetail item={item}/>
  	    </div>
  	    </li>
  	  )
  	})

  	return (
  	  <ul className="component-list">
  	    {listItems}
  	  </ul>
  	)

}
export default ShoppingList;
