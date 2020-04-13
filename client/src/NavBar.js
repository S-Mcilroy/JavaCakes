import React from 'react';

const NavBar = (props) => {
  return (
    <header>
    <ul>
    <li className="navLink">
    <a href="/">Home</a>
    </li>
    <li className="navLink">
    <a href="/categories">Your Kitchen</a>
    </li>
    <li className="navLink">
    <a href="/categories/new">Add Storage Location</a>
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
