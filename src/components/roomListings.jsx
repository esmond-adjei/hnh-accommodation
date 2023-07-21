import React from 'react';
import {useRoomListings} from '../services/states';

const HostelRoomListings = ({ hostelId }) => {

  const { roomListings, loading, error } = useRoomListings(hostelId);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
    
  return (
    <div className='devRoomListings'>
      <h2>{roomListings[0]['hostel']} Room Listings</h2>
      {roomListings.map((room) => (
        <div key={room.room_id} className='devRoom'>
          <h3>Bedspace: {room.bedspace}</h3>
          <p>{room.description}</p>
          <p>Price: {room.price}</p>
          <p>Number Available: {room.number_available}</p>
          <p>Sex: {room.sex}</p>
          <b>Facilities:</b>
          <ul>
            {room.facilities.map((facility) => (
              <li key={facility.id}>{facility.name}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HostelRoomListings;
