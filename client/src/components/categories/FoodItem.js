import React, {Fragment} from 'react';

const FoodItem = (props) => {
  if(!props.foodItem){
  return "Loading..."
}

return(
  <Fragment>
  <p>{props.foodItem.name}</p>
  <p>Stock Level: {props.foodItem.stock}</p>
  </Fragment>
)
}
export default FoodItem;
