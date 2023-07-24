import React from 'react';
import { useRoomListings } from '../services/states';
import { useListings } from './listingsContext';

const HostelRoomListings = () => {
  const { selectedHostelId } = useListings();
  const { roomListings, loading, error } = useRoomListings(selectedHostelId);
  
  console.log("id set in room listings", selectedHostelId, typeof selectedHostelId);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }


  const collapsePanel = () => {
    const roomPreviews = document.querySelector('.room-previews');
    roomPreviews.classList.remove('show');
  };


  return (
    <div>
    { (roomListings.length === 0 ) ? 
      <div className='room-listings-header'>
        <h2>No Room Listings</h2>
        <span className="close-panel" onClick={collapsePanel}>X</span>
      </div>
      :
      <>
      <div className='room-listings-header'>
        <h2>{roomListings[0].hostel} Room Listings</h2>
        <span className="close-panel" onClick={collapsePanel}>X</span>
      </div>
        {roomListings.map((room) => (
          <div key={room.room_id} className='room'>
            <h3>Bedspace: {room.bedspace}</h3>
            <p>{room.description}</p>
            <p>Price: {room.price}</p>
            <p>Number Available: {room.number_available}</p>
            <p>Sex: {room.sex}</p>
            <b>Amenities:</b>
            <ul>
              {room.amenities.map((amenity) => (
                <li key={amenity.id}>{amenity.name}</li>
                ))}
            </ul>
          </div>
        ))}
      </>
    }
    </div>
  );
};

export default HostelRoomListings;
