import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../services/auth_api";
// CSS
import './styles/pages.css'
// components
import { RoomCard } from "../components/cardRoom";
import { fetchCollections } from "../redux/roomSlice";

const CollectedRooms = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = isLoggedIn();
  const collectionListings = useSelector(state => state.roomListing.collections);

  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(fetchCollections());
    }
  }, [dispatch, isUserLoggedIn]);

  const renderCollections = () => {
    if (!isUserLoggedIn) {
      return (
        <div className="collections-view">
          <h2 className="collections-heading text-center">
            Please log in to view your collections
              <Link to="/sign-in">
                <button className="cta-btn active">Login</button>
              </Link>
          </h2>
        </div>
      );
    }

    if (collectionListings.length === 0) {
      return (
        <div className="collections-view">
          <h2 className="collections-heading">No collections found.</h2>
        </div>
      );
    }

    return collectionListings.map(collection => (
      <div className="collections-view" key={collection.id}>
        <h2 className="collections-heading">
          Collection: {collection.name}
        </h2>
        <div className="collected-rooms-container">
          {collection.rooms.map(room => (
            <RoomCard
              key={room.room_id}
              room={room}
              cardType="collected"
            />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <>
      {renderCollections()}
    </>
  );
};

export default CollectedRooms;
