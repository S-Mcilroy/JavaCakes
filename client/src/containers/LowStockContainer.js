import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import LowStockList from '../components/stocks/LowStockList';

class LowStockContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      foodItems: [],
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/foodItems')
    .then((data) =>{
      this.setState({foodItems : data})})
    }

    render(){

      if(!this.state.foodItems){
        return null
      }

      return (
        <Router>
        <Fragment>
        <Switch>
        <div className="welcome">
        <h1>Welcome To Portion</h1>
        <div className="text-box">
        <p>Portion is designed to keep track of the food in your kitchen & offer inspiration for your meals, based on the food you have.</p>
        <ul>To get started:
        <li><a href="/fooditems/new">Create some new items.</a></li>
        <li><a href="/categories/new">Create some kitchen storage.</a></li>
        <li><a href="/categories">Check out the items in your kitchen.</a></li>
        <li><a href="/shoppinglist">Check out your shopping list.</a></li>
        <li><a href="/recipes">Check your recipies.</a></li>
        </ul>
        </div>
        <h2>Running Low On:</h2>
        <div className="low-stock-container">
        <Route exact path="/" render={(props) => {
          return <LowStockList foodItems={this.state.foodItems}/>
        }} />
        </div>
        </div>
        </Switch>
        </Fragment>
        </Router>
      )
    }
  }

  export default LowStockContainer;
