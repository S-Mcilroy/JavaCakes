import React from 'react';

const NavBar = (props) => {
  return (
    <div className="nav-bar">
    <header>
    <ul>
    <li className="navLink">
    <a href="/">Home</a>
    </li>
    <li className="navLink">
    <a href="/categories">Your Kitchen</a>
    </li>
    <li className="navLink">
    <a href="/shoppinglist">Shopping List</a>
    </li>
    <li className='navLink'>
    <a href="/fooditems/new">Add Item</a>
    </li>
    <li className="navLink">
    <a href="/categories/new">Add Storage Location</a>
    </li>
    </ul>
    </header>
    </div>
  )
}

export default NavBar;
