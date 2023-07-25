import React from 'react';
import { useListings } from './listingsContext';


const PreviewCard = ({ hostelID, imageSrc, hostelName, hostelLocation, rating, availableRooms, managerLink, }) => {

  const { setSelectedHostelId } = useListings();

  const openPanel = () => {
    const roomPreviews = document.querySelector('.room-previews');
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
        <p className="card__subtitle">{hostelLocation}</p>
        <p className="card__subtitle">{availableRooms}</p>
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