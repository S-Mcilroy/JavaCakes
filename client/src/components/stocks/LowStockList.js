import React from 'react';
import LowStockItem from "./LowStockItem"

const LowStockList = (props) => {

  if (props.foodItems.length === 0){
    return (<p>Loading...</p>)
  }

  const foodItems = props.foodItems.map((foodItem, index) => {
    if(foodItem.stock < 2){
      return (
        <li key={index} className="component-item">
        <div className="component">
        <LowStockItem foodItem={foodItem}/>
        </div>
        </li>
      )
    }
    return null;
  })

  return (
    <ul className="component-list">
    <h1>Items on Low Stock</h1>
    {foodItems}
    </ul>
  )
}
export default LowStockList;
