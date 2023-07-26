import React from 'react';

import logo from '../assets/images/hnh-logo-30.png';
import menu from '../assets/icons/hamburger-menu.svg';
import darkIcon from '../assets/icons/dark_mode.svg';
import notificationIcon from '../assets/icons/notifications.svg';

import Search from './search';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <header className="nav-bar">
      <div className="logo-box">
      {/* logo box */}
        <img className="menu" 
            src={menu} alt="hamburger" />

        <Link to='/'>
        <img
          className="app-logo"
          src={logo}
          alt="youtube logo"
          />
        </Link>

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
