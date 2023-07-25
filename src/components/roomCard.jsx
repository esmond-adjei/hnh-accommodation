import React from 'react';
import ac from '../assets/icons/air-condition.svg';
import bathroom from '../assets/icons/bathroom.svg';
import fridge from '../assets/icons/fridge.svg';
import study from '../assets/icons/study.svg';
import tv from '../assets/icons/tv.svg';
import kitchen from '../assets/icons/kitchen.svg';
import wardrobe from '../assets/icons/wardrobe.svg';
import man from '../assets/icons/man.svg';
import woman from '../assets/icons/woman.svg';

const RoomCard = ({ room_id, bedspace, description, price, number_available, sex, amenities, hostel }) => {

    const amenityIcons = {
        'Air Condition': ac,
        'Bathroom': bathroom,
        'Refrigerator': fridge,
        'Study Desk': study,
        'TV': tv,
        'Kitchen': kitchen,
        'Wardrobe': wardrobe
    };

    const sexIcon = {
        'male': man,
        'female': woman,
    };

  return (
    <div key={room_id} className='room-card'>
    <h3 className='bedspace'>{bedspace}</h3>
    <p className='description'>{description}</p>
    <p className='price'>&cent;{price}</p>
    <p>Number Available: {number_available}</p>
    <p className='sex'>Available for only {sex}
        <img src={sexIcon[sex]} alt={sex} className='sex-icon' />
    </p>
    {/* <b>Amenities:</b> */}
    <ul className='amenity-icons'>
      {amenities.map((amenity) => (
        <li key={amenity.id} className='amenity-icon'>
            <img src={amenityIcons[amenity.name]} alt={amenity.name}/>
            <p>{amenity.name}</p>
        </li>
        ))}
    </ul>
    {hostel && <p className='card__links'>{hostel}</p> }
  </div>
  );
};

export default RoomCard;