import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchRooms } from "../redux/roomSlice";
// CSS
import './styles/pages.css'
import { RoomCard } from '../components/cardRoom';
import GalleryView from '../containers/GalleryView';


const BrowseRooms = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch])

  const roomListings = useSelector((state) => state.roomListing);

  return (
    <div className="rooms-view">
    { 
    roomListings.isLoading ? <h1 className="preloader-context">😴 Loading rooms...</h1> 
    : roomListings.data.length === 0 ?
      <h1 className="preloader-context">📭 No rooms found.</h1>
    :
      <div className="rooms-container">
        { roomListings.data.map((room) => (
          <GalleryView key={room.room_id} >
            <RoomCard key={room.room_id} room={room} />
          </GalleryView>
          ))}
        </div>
     }
    </div>
  );
};

export default BrowseRooms;