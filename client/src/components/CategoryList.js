import React from 'react';
import Category from "./Category"



const CategoryList = (props) => {

	if (props.categories.length === 0){
	  return (<p>Loading...</p>)
	}

	const categories = props.categories.map((category, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
      <Category category={category}/>
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {categories}
	  </ul>
	)
}
 export default CategoryList;
