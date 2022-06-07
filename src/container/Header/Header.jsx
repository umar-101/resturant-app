import React from 'react';

import './Header.css';

import { images } from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='app__header app__wrapper section_padding' id='home'>
    <div style={{ margin: '1rem 2rem' }} className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour"></SubHeading>
      <h1 className='app__header-h1'>The key to fine dining</h1>
      <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="headerimg" />
    </div>
  </div>
);

export default Header;
