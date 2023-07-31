import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../services/auth_api';
// SVGs
import hostelIcon from '../assets/icons/home.svg';
import roomIcon from '../assets/icons/room.svg';
import mapIcon from '../assets/icons/home_map.svg';
import collectionsIcon from '../assets/icons/collections.svg';
import profilePicture from '../assets/images/profile.jpg';
// components
import { useListings } from './listingsContext';
import { NavElement } from './navELement';
import AuthForm from './pages/authPage';

const SideNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignIn, setSignIn] = useState(false);
  const { handleShowRooms, handleShowHostels, handleShowMap } = useListings();
  const isSignedIn = false;
  const navigationElements = [
      {
        name: 'Hostel',
        icon: hostelIcon,
        link: '/hostels',
        handleFunction: handleShowHostels,
      },
      {
        name: 'Rooms',
        icon: roomIcon,
        link: '/rooms',
        handleFunction: handleShowRooms,
      },
      {
        name: 'Map view',
        icon: mapIcon,
        link: '/map',
        handleFunction: handleShowMap,
      },
      {
        name: 'Collections',
        icon: collectionsIcon,
        link: '/collections',
        handleFunction: handleShowHostels,
      }
    ]
    

  const handleDisplayMenu = () => {
    setShowMenu(!showMenu);
  };

  const openSignIn = () => {
    setSignIn(!showSignIn);
    document.body.style.overflow = showSignIn ? 'auto' : 'hidden';
    document.getElementsByTagName('header')[0].style.zIndex = showSignIn ? '' : '4';   
  };


  return (
    <div className="side-nav">
      {
        navigationElements.map((element, index) => {
          return (
            <Link to={element.link} key={index}>
              <NavElement
                key={index}
                icon={element.icon}
                title={element.name}
                handleFunction={element.handleFunction}
              />
            </Link>
          )
        })
      }

      <hr />
      {
        isSignedIn === false ?
        // <Link to="/sign-up" target='_blank'>
          <>
          <div className="side-nav-icon center-absolute"
              onClick={openSignIn}
            >
            <div className="user-profile-icon" />
          </div>
          { showSignIn && 
            <div className="sign-in overlay-page">
              <AuthForm formType={'/sign-in'} />
              <button className="close-btn close-panel" onClick={openSignIn}>X</button>
            </div>
            }
          </>
        // </Link>
        : 
        <div className="side-nav-icon center-absolute">
          <img
            className="user-profile-icon"
            src={profilePicture}
            width="100%"
            alt="profile"
            onClick={handleDisplayMenu}
            />
        </div>
      }

      {
        (showMenu && isSignedIn) &&
        <div className="profile-menu">
          <button className="close-btn close-panel" onClick={handleDisplayMenu}>X</button>
          <Link to="#">
          <p>Account</p>
          </Link>
          <Link to="#">
          <p>Help</p>
          </Link>
          <Link to="/hostels" onClick={logoutUser}>
          <p>Logout</p>
          </Link>
        </div>
      }


    </div>
  );
};

export default SideNav;
