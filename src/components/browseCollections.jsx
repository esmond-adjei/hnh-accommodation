import React from 'react';
import '../styles/browse.css';

import { useCollectionsState } from '../services/states';
import RoomCard from './roomCard';


const CollectedRooms = () => {
  const { collectionListings } = useCollectionsState();

  if (collectionListings.length === 0) {
    return <div>No collections found.</div>;
  }

  return (
    <>
        <h3 className='collection-name'>{collectionListings[0].name}</h3>
    <div className="main-content rooms-view">
        {collectionListings[0].rooms.map((room) => (
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
    </>
  );
};

export default CollectedRooms;