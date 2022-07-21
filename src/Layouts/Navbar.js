import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/show-users" className='nav-link'>Show Users</Link>
            <Link to="/add-user" className='nav-link'>Add User</Link>
        </nav>
    );
};

export default Navbar;