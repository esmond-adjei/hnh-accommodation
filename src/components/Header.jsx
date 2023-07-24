import React from 'react';

import logo from '../assets/icons/hnh-logo-30.png';
import menu from '../assets/icons/hamburger-menu.svg';
import darkIcon from '../assets/icons/dark_mode.svg';
import notificationIcon from '../assets/icons/notifications.svg';

import Search from './search';


const Header = () => {
  return (
    <>
    <header className="nav-bar">
      {/* logo box */}
      <div className="logo-box">
        <img className="menu" 
            src={menu} alt="hamburger" />
        <img
          className="youtube-logo"
          src={logo}
          alt="youtube logo"
          />
      </div>
      {/* search box */}
      
      <Search />

      {/* profile box */}
      <div className="utility-box">
        <img src={darkIcon} alt="dark mode" className='round-icon'/>
        <img src={notificationIcon} alt="notifications" className='round-icon'/>
      </div>
    </header>
    <div className='filters'>
        <span>Location</span>
        <span>Price</span>
        <span>Bedspace</span>
    </div>
    </>
  );
};

export default Header;
