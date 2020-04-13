import React from 'react';
import LowStockItem from "./LowStockItem"

const LowStockList = (props) => {

  if (props.foodItems.length === 0){
    return (<p>Loading...</p>)
  }

  const foodItems = props.foodItems.map((foodItem, index) => {
    if(foodItem.stock < 2){
      return (
        <li key={index}>
        <div>
        <LowStockItem foodItem={foodItem}/>
        </div>
        </li>
      )
    }
    return null;
  })

  return (
    <div className="low-stock">
    <ul>
    {foodItems}
    </ul>
    </div>
  )
}
export default LowStockList;
