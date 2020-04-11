import React from 'react';

const NavBar = (props) => {
  return (
    <header>
    <ul>
    <li className="navLink">
    <a href="/">Home</a>
    </li>
    <li className="navLink">
    <a href="/categories">Categories</a>
    </li>
    <li className="navLink">
    <a href="/categories/new">Create category</a>
    </li>
    <li className='navLink'>
    <a href="/fooditems/new">Add Item</a>
    </li>
    <li className="navLink">
    <a href="/shoppinglist">Shopping List</a>
    </li>
    </ul>
    </header>
  )
}

export default NavBar;
