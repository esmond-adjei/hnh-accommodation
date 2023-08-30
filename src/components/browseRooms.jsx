import React from 'react';
import '../styles/browse.css';

import {useRoomListings} from '../services/states';
import RoomCard from './roomCard';


const BrowseRooms = () => {
  const { roomListings } = useRoomListings(null);

  return (
    <>
    { (roomListings.length === 0) ?
      <div className="main-content rooms-view">
        <h1>No rooms found.</h1>
      </div>
      :
      <div className="main-content rooms-view">
      {roomListings.map((room) => (
        <RoomCard
          key={room.room_id}
          room_id={room.room_id}
          room_img_url={room.room_img_url}
          bedspace={room.bedspace}
          description={room.description}
          price={room.price}
          number_available={room.number_available}
          sex={room.sex}
          amenities={room.amenities}
          hostel={room.hostel}
          hostel_location={room.hostel_location}
          is_collected={room.is_collected}
        />
        ))}
        </div>
     }
    </>
  );
};

export default BrowseRooms;