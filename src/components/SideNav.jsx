import React from 'react';
import { Link } from 'react-router-dom';

import hostelIcon from '../assets/icons/home.svg';
import roomIcon from '../assets/icons/room.svg';
import mapIcon from '../assets/icons/home_map.svg';
import collectionsIcon from '../assets/icons/collections.svg';
import profilePicture from '../assets/images/profile.jpg';

import { useListings } from './listingsContext';
import { NavElement } from './navELement';

const SideNav = () => {

  const { handleShowRooms, handleShowHostels, handleShowMap } = useListings();
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
      <div className="side-nav-icon center-absolute">
          <img
            className="user-profile-icon"
            src={profilePicture}
            width="100%"
            alt="profile"
          />
      </div>
    </div>
  );
};

export default SideNav;
