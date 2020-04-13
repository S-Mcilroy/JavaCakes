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
