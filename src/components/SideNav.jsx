import React from 'react';

import hostelIcon from '../assets/icons/home.svg';
import roomIcon from '../assets/icons/room.svg';
import mapIcon from '../assets/icons/home_map.svg';
import collectionsIcon from '../assets/icons/collections.svg';
import profilePicture from '../assets/images/profile.jpg';


const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav-icon">
        <img src={hostelIcon} alt="home" width="30px" />
        <p>Hostel</p>
      </div>
      <div className="side-nav-icon">
        <img src={roomIcon} alt="Shorts" width="30px" />
        <p>Rooms</p>
      </div>
      <div className="side-nav-icon">
        <img src={mapIcon} alt="subscriptions" width="30px" />
        <p>Map view</p>
      </div>
      <div className="side-nav-icon">
        <img src={collectionsIcon} alt="Library" width="30px" />
        <p>Collections</p>
      </div>
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
