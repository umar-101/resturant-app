import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuitem'>
    {/* //menuItem Head// */}
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className='app__menuitem-dash' />
      <div className="app__menuitem-price">
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

    {/* Menu Item tags */}

  </div>
);

export default MenuItem;
