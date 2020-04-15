import React from 'react';
import Category from "./Category"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

const CategoryList = (props) => {

	if (props.categories.length === 0){
		return (<p>Loading...</p>)
	}

	const categories = props.categories.map((category, index) => {
		return (
			<div key={index}>
			<Accordion>
			<Card>
			<div className="category-styles-header">
			<Accordion.Toggle as={Card.Header} eventKey="0">
			<h1>{category.name}</h1>
			</Accordion.Toggle>
			</div>
			<Accordion.Collapse eventKey="0">
			<Card.Body className="category-styles"><Category category={category}/></Card.Body>
			</Accordion.Collapse>
			</Card>
			</Accordion>
			</div>
		)
	})

	return (
		<div className="category-container">
		<ul>
		{categories}
		</ul>
		</div>
	)
}
export default CategoryList;
