import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CategoryContainer from "./CategoryContainer";
import ShoppingListContainer from "./ShoppingListContainer";
import FoodItemContainer from "./FoodItemContainer";


const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
        <Route path="/categories" component={CategoryContainer} />
        <Route path="/fooditems/new" component={FoodItemContainer}/>
        <Route path="/shoppinglist" component={ShoppingListContainer}/>
      </Switch>
      </Fragment>
      </Router>
    )
}

export default MainContainer;
