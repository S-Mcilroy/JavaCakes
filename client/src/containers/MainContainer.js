import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import CategoryContainer from "./CategoryContainer";
import ShoppingListContainer from "./ShoppingListContainer";


const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
        <Route path="/categories" component={CategoryContainer} />
      </Switch>


      </Fragment>
      </Router>
    )
}

export default MainContainer;
