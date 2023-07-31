import React from 'react';
import { useListings } from './listingsContext';

import roomIcon from '../assets/icons/room-icon.svg';
import locationIcon from '../assets/icons/location-icon.svg';


const PreviewCard = ({ hostelID, imageSrc, hostelName, hostelLocation, rating, availableRooms, managerLink, }) => {

  const { setSelectedHostelId } = useListings();

  const openPanel = () => {
    const roomPreviews = document.querySelector('.room-previews');
    roomPreviews.classList.remove('closed');
    roomPreviews.classList.add('show');
  };

  const handleClick = () => {
    setSelectedHostelId(hostelID);
    openPanel();
  };

  return (
    <div className="card" onClick={handleClick}>
        <div className='card__image' style={{backgroundImage: `url(${imageSrc})`}}> 
        </div>
    
      <div className="card__details">

        <h2 className="card__title">{hostelName}</h2>
        <p className="card__subtitle">
          <img src={locationIcon} alt="location" />
          {hostelLocation}
        </p>
        <p className="card__subtitle">
          <img src={roomIcon} alt="rooms available" />
          {availableRooms}
        </p>
        <div className="card__links">
          <a href={managerLink} className="card__link">
            Hostle Manager Name
          </a>
          <p>⭐ {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;