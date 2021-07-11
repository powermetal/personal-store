import React from 'react';
import './Navbar.scss';
import Cart from '../Cart/Cart';

const Navbar = () => {


    return (
        <div className="navbar">
            <p>LOGO</p>
            <input placeholder="Search..."/>
            <Cart />
        </div>
    )
}

export default Navbar
