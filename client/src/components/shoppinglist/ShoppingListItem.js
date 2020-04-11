import React, {Fragment} from 'react';

const ShoppingListItem = (props) => {
  if(!props.item){
  return "Loading..."
}

return(
  <Fragment>
  <p>{props.item.name}</p>
  </Fragment>
)
}
export default ShoppingListItem;
