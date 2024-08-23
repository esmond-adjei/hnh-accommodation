import React from "react";
import { useSelector } from "react-redux";
// CSS
import './styles/listingHostelRooms.css'
// components
import RoomCard from "../components/cardRoom";

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
          {/* <h2 className="room-previews-header">🛌 Room Listings</h2> */}
             { 
             isLoading ? <h1 className="loader-animation">😴 Loading hostel rooms...</h1>
             : roomListings.length === 0 ?
               <h1 className="loader-animation">📭 No Hostel Listings</h1> 
            : 
            <div className="room-previews-listings">
            {roomListings.map((room) =>
                <RoomCard
                  key={room.room_id}
                  room_id={room.room_id}
                  room_img_url={room.room_img_url}
                  bedspace={room.bedspace}
                  description={room.description}
                  price={room.price}
                  number_available={room.number_available}
                  sex={room.sex}
                  is_collected={room.is_collected}
                  amenities={room.amenities}
                />
               )}
            </div>
             }
          </>
    </div>
  );
};

export default HostelRoomListings;
