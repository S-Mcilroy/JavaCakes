import React, {Fragment}  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RecipeList from '../components/recipes/RecipeList';

const RecipeContainer = (props) => {

    return(
      <Router>
      <Fragment>
      <Switch>
      <Route exact path="/recipes/:name" render={(props) => {
      const name = props.match.params.name
      return <RecipeList ingredient={name}/>}}/>
      </Switch>
      </Fragment>
      </Router>
    )
}
export default RecipeContainer;
