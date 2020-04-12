import React, {Component, Fragment}  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import RecipeList from '../components/recipes/RecipeList';

class RecipeContainer extends Component{
  constructor(props){
  super(props)
}



  render(){

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
}
export default RecipeContainer;
