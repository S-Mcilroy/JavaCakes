import React from 'react';
import Category from "./Category"



const CategoryList = (props) => {

	if (props.categories.length === 0){
	  return (<p>Loading...</p>)
	}

	const categories = props.categories.map((category, index) => {
	  return (
	    <li key={index}>
	    <div className="category-container">
			<h1>{category.name}</h1>
      <Category category={category}/>
	    </div>
	    </li>
	  )
	})

	return (
		<div className="category-container">
	  <ul className="category-list">
	    {categories}
	  </ul>
		</div>
	)
}
 export default CategoryList;
