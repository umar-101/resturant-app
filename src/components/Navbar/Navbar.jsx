import React, { useState } from 'react';
import { images } from '../../constants';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.scss';


const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
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
        <a href='#login'>Login/Registration</a>
        <div></div>
        <a href='#book'>Book Table</a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu fontSize={27} className='overlay_open' onClick={() => setToogleMenu(true)}></GiHamburgerMenu>
        {toogleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToogleMenu(false)}></MdOutlineRestaurantMenu>
            {['home', 'pages', 'contact us', 'blog', 'landing'].map((item) => (
              <ul>
                <li><a className='p__opensans' href="google.com">{item}</a></li>
              </ul>
            ))}
          </div>
        )}

      </div>


    </nav>
  )
};
export default Navbar;
