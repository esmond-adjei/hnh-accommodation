import React from 'react';
import { Link } from 'react-router-dom';
import { useListings } from './listingsContext';
// assets
import logo from '../assets/images/hnh-logo-30.png';
import menu from '../assets/icons/hamburger-menu.svg';
import darkIcon from '../assets/icons/dark_mode.svg';
import lightIcon from '../assets/icons/light_mode.svg';
import notificationIcon from '../assets/icons/notifications.svg';
// components
import Search from './search';


const Header = () => {

  const { darkMode, toggleDarkMode } = useListings();

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
        <img src={ darkMode? darkIcon: lightIcon} 
             alt="switch theme" className='round-icon' onClick={toggleDarkMode}/>
        <img src={notificationIcon} alt="notifications" className='round-icon'/>
      </div>
    </header>

    {/* filters panel*/}
    <div className='filters'>
        <span>Location</span>
        <span>Price</span>
        <span>Bedspace</span>
    </div>
    </>
  );
};

export default Header;
