import React from 'react';

import logo from '../assets/icons/hnh-logo-30.png';
import menu from '../assets/icons/hamburger-menu.svg';
import searchIcon from '../assets/icons/search.svg';
import darkIcon from '../assets/icons/dark_mode.svg';
// import lightIcon from '../assets/icons/light_mode.svg';
import notificationIcon from '../assets/icons/notifications.svg';


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
      <div className="search-box">
        <div className="search">
          <input type="search" placeholder="Search" />
          <input type="image" src={searchIcon} alt='search icons'/>
        </div>
      </div>
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
