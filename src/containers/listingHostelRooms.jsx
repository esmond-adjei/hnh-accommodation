import React from "react";
import { useSelector } from "react-redux";
// CSS
import './styles/listingHostelRooms.css'
// components
import { RoomCard } from "../components/cardRoom";

const HostelRoomListings = () => {
  const isLoading = useSelector((state) => state.roomListing.isLoading);
  const roomListings = useSelector((state) => state.roomListing.data);
  const selectedHostelName = useSelector((state)=> state.hostelListing.selectedHostelName);

  const collapsePanel = () => {
    const roomPreviews = document.querySelector(".room-previews");
    const hostelContainer = document.querySelector(".hostels-container");
    hostelContainer.classList.remove("shrink");
    roomPreviews.classList.remove("show");
    roomPreviews.classList.add("closed");
  };

  return (
    <div className="room-previews">
          <div className="room-listings-header">
            <h1>🏠 { selectedHostelName } Room Listings </h1>
            <span className="close-panel" onClick={collapsePanel}>X</span>
          </div>
          <>
             { 
             isLoading ? <h1 className="preloader-context">😴 Loading hostel rooms...</h1>
             : roomListings.length === 0 ?
               <h1 className="preloader-context">📭 No Hostel Listings</h1> 
            : 
            <div className="room-previews-listings">
            {roomListings.map((room) =>
                <RoomCard key={room.room_id} room={room} />
               )}
            </div>
             }
          </>
    </div>
  );
};

export default HostelRoomListings;
