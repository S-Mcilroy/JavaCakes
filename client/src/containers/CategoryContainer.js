import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import CategoryList from "../components/CategoryList"

class CategoryContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/categories')
    .then((data) =>{
      this.setState({
        categories : data
      })
    })
  }

  render(){

      if(!this.state.categories){
        return null
      }

    return(
      <Router>
      <Fragment>
      <Switch>
      <Route render={(props)=>{
        return <CategoryList categories={this.state.categories}/>
      }} />
      </Switch>
      </Fragment>
      </Router>
    )
  }



}
export default CategoryContainer;
