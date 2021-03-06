import React, {Fragment} from 'react';

const FoodItem = (props) => {
  if(!props.foodItem){
  return "Loading..."
}
const url = "/recipes/" + props.foodItem.name;

return(
  <Fragment>
  <a href= {url} className="name">
    {props.foodItem.name}
    </a>
  </Fragment>
)
}
export default FoodItem;
