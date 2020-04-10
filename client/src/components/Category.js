import React, {Component, Fragment} from 'react';
import Request from "../helpers/Request";
class Category extends Component{


  constructor(props){
    super(props)
    this.state = {
      foodItems: []
    }
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
    <h1>{this.props.category.name}</h1>

    {/* So this is were we want to display fooditems on each category?*/}
    </Fragment>
  )
}
}

export default Category;
