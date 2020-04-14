import React, {Component, Fragment} from 'react';
import Request from "../../helpers/Request";
import FoodItemList from './FoodItemList'
class Category extends Component{


  constructor(props){
    super(props)
    this.state = {
      foodItems: []
    }
    this.onDelete = this.onDelete.bind(this);
    this.onDeleteCategory = this.onDeleteCategory.bind(this);
  }

  onDelete(id){
    const request = new Request();
    const url = "/api/foodItems/" + id
    request.delete(url)
    .then(() => {window.location = "/categories"})
  }

    onDeleteCategory(){
      const request = new Request();
      const url = "/api/categories/" + this.props.category.id
      request.delete(url)
      .then(() => {window.location = "/categories"})
    }

  componentDidMount(){
    const request = new Request();
    request.get('/api/foodItems?category=' + this.props.category.name)
    .then (data =>{
      this.setState({
        foodItems: data
      })
    })
  }

  render(){


    return(
      <Fragment>
      <FoodItemList onDelete={this.onDelete} foodItems={this.state.foodItems}/>
      <button onClick={this.onDeleteCategory}>Delete {this.props.category.name}</button>
      </Fragment>
    )
  }
}

export default Category;
