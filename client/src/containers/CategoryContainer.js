import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import CategoryList from "../components/categories/CategoryList"
import CategoryForm from "../components/categories/CategoryForm"


class CategoryContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: []
    }
    this.handlePost = this.handlePost.bind(this)
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

  handlePost(category){
    const request = new Request();
    const url = "/api/categories"
    request.post(url, category)
    .then(() => window.location = "/categories")
  }

  render(){

    if(!this.state.categories){
      return null
    }

    return(
      <Router>
      <Fragment>
      <Switch>
      <Route exact path="/categories/new" render={(props) => {
        return <CategoryForm onCreate={this.handlePost}/>
      }} />
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
