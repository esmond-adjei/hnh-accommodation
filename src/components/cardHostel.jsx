import React from "react";
import { useListings } from "../services/contextManager";
// CSS
import "./styles/cardHostel.css";
// SVG
import roomIcon from "../assets/icons/room-icon.svg";
import userIcon from "../assets/icons/user-icon.svg";
import star from "../assets/icons/star.svg";
import locationIcon from "../assets/icons/location-icon.svg";

const HostelCard = ({
  hostelID,
  imageSrc,
  hostelName,
  hostelLocation,
  rating,
  availableRooms,
  managerUsername,
}) => {
  const { setSelectedHostelId } = useListings();

  const openPanel = () => {
    const roomPreviews = document.querySelector(".room-previews");
      roomPreviews.classList.remove("closed");
      roomPreviews.classList.add("show");
  };

  const handleClick = () => {
    setSelectedHostelId(hostelID);
    // document.addEventListener('DOMContentLoaded', openPanel);
    openPanel();
  };


  return (
    <div className="hostel-card" onClick={handleClick}>
      <div
        className="card__image"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>

      <div className="card__details">
        <h2 className="card__title">{hostelName}</h2>
        <p className="card__subtitle">
          <img src={locationIcon} alt="location" />
          {hostelLocation}
        </p>
        <p className="card__subtitle">
          <img src={roomIcon} alt="rooms available" />
          {availableRooms}
        </p>
        <div className="card__links">
          <span className="manager-footnote">
            <img src={userIcon} alt="manager" className="round-icon" />
            <span>{managerUsername}</span>
          </span>
          <span className="rating-footnote">
            <img src={star} alt="rating" className="rating" />
            <p>{rating}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HostelCard;
