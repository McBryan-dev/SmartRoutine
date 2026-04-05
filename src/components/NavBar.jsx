import React from 'react'
import '../styles/NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar d-flex justify-content-between align-items-center'>
        <div className='header'>
            <Link to='/' className='header-link text-decoration-none'>
                <h1>SMARTROUTINE</h1>
            </Link>
        </div>

        <div className='nav-links d-flex gap-5'>
            <Link to='/signup' className='nav-link text-decoration-none'>
                <h3 className='fs-3 '>Get Started</h3>
            </Link>
            <Link to='/login' className='nav-link text-decoration-none'>
                <h3 className='fs-3'>Login</h3>
            </Link>
        </div>
    </div>
  )
}

export default NavBar;