import { Link } from 'react-router-dom';
import React from 'react';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>My Blogz</h1>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/newblog">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;