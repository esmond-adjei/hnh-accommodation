import React from 'react';
import '../styles/browse.css';

import { useCollectionsState } from '../services/states';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../services/auth_api';
import RoomCard from './roomCard';


const CollectedRooms = () => {
  const { collectionListings } = useCollectionsState();

  if (collectionListings.length === 0) {
    return (
    <div className="main-content rooms-view" style={{display: 'block'}}>
      <h1>No collections found.</h1>
      { !isLoggedIn() && <p>
          <Link to="/sign-in" ><button className="cta-btn active">Login</button></Link>
          to save rooms collections</p>
      }
    </div>
    );
  }

  return (
    <>
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