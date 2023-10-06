import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../services/auth_api";
// CSS
import './styles/pages.css'
// components
import RoomCard from "../components/cardRoom";
import { fetchCollections } from "../redux/roomSlice";

const CollectedRooms = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  const collectionListings = useSelector(state => state.roomListing.collections);

  if (collectionListings.length === 0) {
    return (
      <div className="collections-view" style={{ display: "block" }}>
        <h2 className="collections-heading">No collections found.</h2>
        {!isLoggedIn() && (
          <div className="rooms-container">
            <p>
              <Link to="/sign-in">
                <button className="cta-btn active">Login</button>
              </Link>
              to save room collections
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="collections-view">
      {collectionListings.map((collectionItem) => (
        <div key={collectionItem.id}>
          <h2 className="collections-heading">
            Collection: {collectionItem.name}
          </h2>
          <div className="rooms-container">
            {collectionItem.rooms.map((room) => (
              <RoomCard
                key={room.room_id}
                room_id={room.room_id}
                bedspace={room.bedspace}
                room_img_url={room.room_img_url}
                description={room.description}
                price={room.price}
                number_available={room.number_available}
                sex={room.sex}
                amenities={room.amenities}
                hostel={room.hostel}
                is_collected={room.is_collected}
                cardType={"collected"}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectedRooms;
