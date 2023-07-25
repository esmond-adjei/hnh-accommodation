import React from 'react';
import '../styles/browse.css';

import {useRoomListings} from '../services/states';
import RoomCard from './roomCard';


const BrowseRooms = () => {
  const { roomListings } = useRoomListings(null);

  return (
    <div className="main-content rooms-view">
        {roomListings.map((room) => (
          <RoomCard
            key={room.room_id}
            room_id={room.room_id}
            bedspace={room.bedspace}
            description={room.description}
            price={room.price}
            number_available={room.number_available}
            sex={room.sex}
            amenities={room.amenities}
            hostel={room.hostel}
          />
        ))}
    </div>
  );
};

export default BrowseRooms;