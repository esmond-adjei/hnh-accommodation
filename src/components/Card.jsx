import React from 'react';


const PreviewCard = ({ imageSrc, hostelName, hostelLocation, rating, availableRooms, description, managerLink, }) => {

  return (
    <div className="card">
        <div className='card__image' style={{backgroundImage: `url(${imageSrc})`}}> 
        </div>
    
      <div className="card__details">

        <h2 className="card__title">{hostelName}</h2>
        <p className="card__subtitle">{hostelLocation}</p>
        <p className="card__subtitle">{availableRooms}</p>

        {/* <p className="card__description">{description}</p> */}
        <div className="card__links">
          <a href={managerLink} className="card__link">
            Hostle Manager Name
          </a>
          <p>{rating} ⭐</p>
          
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;