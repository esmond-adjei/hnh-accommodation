import React from 'react';
// CSS
import './styles/pages.css'
import { useRoomListings } from '../services/states';
import RoomCard from '../components/cardRoom';


const BrowseRooms = () => {
  const { roomListings } = useRoomListings(null);

  return (
    <div className="rooms-view">
    { (roomListings.length === 0) ?
      <div className="rooms-container">
        <h1>No rooms found.</h1>
      </div>
      :
      <div className="rooms-container">
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
    </div>
  );
};

export default BrowseRooms;