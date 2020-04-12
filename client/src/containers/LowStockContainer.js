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
      <Route exact path="/" render={(props) => {
        return <LowStockList foodItems={this.state.foodItems}/>
      }} />
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default LowStockContainer;
