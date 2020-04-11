import React, {Component} from 'react';
import FoodItemDetail from "./FoodItemDetail";

class FoodItemList extends Component{
	constructor(props){
		super(props);
	}

	render(){
		if (!this.props.foodItems){
			return (<p>Loading...</p>)
		}

		const foodItems = this.props.foodItems.map((foodItem, index) => {
			return (
				<li key={index} className="component-item">
				<div className="component">
				<FoodItemDetail onDelete={this.props.onDelete} foodItem={foodItem}/>
				</div>
				</li>
			)
		})

		return (
			<ul className="component-list">
			{foodItems}
			</ul>
		)

	}
}
export default FoodItemList;
