import React from 'react';
import FoodItem from "./FoodItem";




const FoodItemList = (props) => {

	if (!props.foodItems){
	  return (<p>Loading...</p>)
	}

	const foodItems = props.foodItems.map((foodItem, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
      <FoodItem foodItem={foodItem}/>
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {foodItems}
	  </ul>
	)
}
 export default FoodItemList;
