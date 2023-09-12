import React from "react";
import { useRoomListings } from "../services/states";
import { useListings } from "../services/contextManager";
// CSS
import './styles/listingHostelRooms.css'
// components
import RoomCard from "../components/cardRoom";

const HostelRoomListings = () => {
  const { selectedHostelId } = useListings();
  const { roomListings , loading, error } = useRoomListings(selectedHostelId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const collapsePanel = () => {
    const roomPreviews = document.querySelector(".room-previews");
    roomPreviews.classList.remove("show");
    roomPreviews.classList.add("closed");
  };

  return (
    <div className="room-previews">
      {roomListings.length === 0 ? (
        <div className="room-listings-header">
          <h2>No Room Listings</h2>
          <span className="close-panel" onClick={collapsePanel}>
            X
          </span>
        </div>
      ) : (
        <>
          <div className="room-listings-header">
            <h2>{roomListings[0].hostel} Room Listings</h2>
            <span className="close-panel" onClick={collapsePanel}>
              X
            </span>
          </div>
          <div className="rooms-container" >
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
              is_collected={room.is_collected}
              amenities={room.amenities}
            />
          ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HostelRoomListings;
