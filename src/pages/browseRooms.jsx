import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchRooms } from "../redux/roomSlice";
// CSS
import './styles/pages.css'
import RoomCard from '../components/cardRoom';


const BrowseRooms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch])

  const roomListings = useSelector((state) => state.roomListing);

  return (
    <div className="rooms-view">
    { 
    roomListings.isLoading ? <h1 className="loader-animation">😴 Loading rooms...</h1> 
    : roomListings.data.length === 0 ?
      <h1 className="loader-animation">📭 No rooms found.</h1>
    :
      <div className="rooms-container">
        { roomListings.data.map((room) => (
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