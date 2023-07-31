import React, {useState, useRef, useEffect} from 'react';
// api requests
import { addCollection, removeCollection } from '../services/api';
// SVGs
import ac from '../assets/icons/air-condition.svg';
import bathroom from '../assets/icons/bathroom.svg';
import fridge from '../assets/icons/fridge.svg';
import study from '../assets/icons/study.svg';
import tv from '../assets/icons/tv.svg';
import kitchen from '../assets/icons/kitchen.svg';
import wardrobe from '../assets/icons/wardrobe.svg';
import man from '../assets/icons/man.svg';
import woman from '../assets/icons/woman.svg';
import bookmarkFill from '../assets/icons/bookmark-fill.svg';
import bookmarkEmpty from '../assets/icons/bookmark-empty.svg';

const RoomCard = ({ room_id, bedspace, description, price, number_available, sex, amenities, hostel }) => {

  const [isCollected, setIsCollected] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);

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

    const updateSlide = () => {
      const slideContainer = slideContainerRef.current;
      const slideWidth = slideContainer.clientWidth;
      const translateX = -currentIndex * slideWidth / 2; // Adjust the number of visible icons
      slideContainer.style.transform = `translateX(${translateX}px)`;
    };
    
    useEffect(() => {
      updateSlide();
    });
    
    
    const prevSlide = () => {
      const value = Math.max(currentIndex - 1, 0);
      setCurrentIndex(value);
      updateSlide();
    }
  
    const nextSlide = () => {
      const value = Math.min(currentIndex + 1, amenities.length - 1);
      setCurrentIndex(value);
      updateSlide();
    }
    
    const handleCollect = () => {
      console.log('Collecting room: ', room_id);
      setIsCollected(!isCollected);
      isCollected ? removeCollection(room_id) : addCollection(room_id);
    };


  return (
    <div key={room_id} className='room-card'>
    <div className='card-overlay'>
      <h3 className='bedspace'>{bedspace}</h3>
    
      <span className='collect' onClick={handleCollect}>
        <img src={ isCollected? bookmarkFill: bookmarkEmpty } alt="add to collectoin"/>
      </span>
    
      <p className='price'>&cent;{price}</p>
      <p className='description'>{description}</p>
      <p>Number Available: {number_available}</p>
      <p className='sex'>Available for only {sex}
          <img src={sexIcon[sex]} alt={sex} className='sex-icon' />
      </p>
        <div className='slider-container'>
          <ul className='amenity-icons' ref={slideContainerRef}>
          {amenities.map((amenity) => (
            <li key={amenity.id} className='amenity-icon'>
                <img src={amenityIcons[amenity.name]} alt={amenity.name}/>
                <p>{amenity.name}</p>
            </li>
            ))}
          </ul>
          <span className='slider-ctrl left'>
            <span onClick={prevSlide}>&lt;</span>
          </span>
          <span className='slider-ctrl right'>
            <span onClick={nextSlide}>&gt;</span>
          </span>
      </div>
    {hostel && <p className='card__links'>{hostel}</p> }
    </div>
  </div>
  );
};

export default RoomCard;