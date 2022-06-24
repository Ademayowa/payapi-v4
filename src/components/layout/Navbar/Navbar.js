import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../img/logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md pt-5 mb-4 navbar-info'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src={Logo} alt='logo' className='img-fluid' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span />
          <span className='navbar-toggler-icon fa fa-bars fa-2x' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/pricing'>
                Pricing
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
          <div className='d-flex ml-auto alignRight'>
            <Link to='#' className='btn__demo'>
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
