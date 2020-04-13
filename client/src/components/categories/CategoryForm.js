import React, {Component} from 'react';

class CategoryForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      category:{
        name: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    if(this.props.category){
      this.setState({category: {...this.props.category}})
    }
  }

  handleChange(event){
    let propertyName = event.target.name;
    let category = this.state.category
    category[propertyName] = event.target.value;
    this.setState({category: category})
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.category.id){
      this.props.onUpdate(this.state.category)
    } else {
      this.props.onCreate(this.state.category);
    }
  }

  render(){
    let heading = ""
    if (!this.props.category){
      heading = "Add New Food Storage"
    } else {
      heading = "Edit" + this.props.category.name;
    }

    return(
      <div className = "categoryForm">
      <h1>{heading}</h1>
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Name of Location" name="name" onChange={this.handleChange} value={this.state.category.name} required/>
      <button type="submit">Add Location</button>
      </form>
      </div>
    )
  }
}

export default CategoryForm;
