import React from 'react';
import { images } from '../../constants';
import './Navbar.css';


const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="logo" />
    </div>
    <div className='app__navbar-items '>
      {['home', 'pages', 'contact us', 'blog', 'landing'].map((item) => (
        <ul>
          <li><a className='p__opensans' href="google.com">{item}</a></li>
        </ul>
      ))}
    </div>
    <div className='app__navbar-login'>
      <p>Login/Registration</p>
    </div>
    <div className='app__navbar-book'>
      <p>Book Table</p>
    </div>
  </nav>
);

export default Navbar;
