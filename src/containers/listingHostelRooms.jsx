import React from "react";
import { useSelector } from "react-redux";
// import { useRoomListings } from "../services/states";
// import { useListings } from "../services/contextManager";
// CSS
import './styles/listingHostelRooms.css'
// components
import RoomCard from "../components/cardRoom";

const HostelRoomListings = () => {
  // const { selectedHostelId } = useListings();
  const isLoading = useSelector((state) => state.roomListing.isLoading);
  const roomListings = useSelector((state) => state.roomListing.selectedHostelRooms);
  const selectedHostelName = useSelector((state)=> state.hostelListing.selectedHostelName);

  const collapsePanel = () => {
    const roomPreviews = document.querySelector(".room-previews");
    roomPreviews.classList.remove("show");
    roomPreviews.classList.add("closed");
  };

  return (
    <div className="room-previews">
          <div className="room-listings-header">
            <h1>{ selectedHostelName } Room Listings</h1>
            <span className="close-panel" onClick={collapsePanel}>X</span>
          </div>
          <div className="rooms-container" >
             { isLoading && <h1>Loading hostel rooms...</h1>}
             { (roomListings.length === 0 && !isLoading) ?
               <h1>No Hostel Listings</h1> :
               roomListings.map((room) =>
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
               )
             }
          </div>
    </div>
  );
};

export default HostelRoomListings;
