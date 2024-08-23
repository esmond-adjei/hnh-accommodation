import React from "react";
import { useDispatch } from "react-redux";
import { fetchHostelRooms } from "../redux/roomSlice";
import { setSelectedHostelName } from "../redux/hostelSlice";
// CSS
import "./styles/cardHostel.css";
// SVG
// import userIcon from "../assets/icons/user-icon.svg";
import roomIcon from "../assets/icons/room-icon.svg";
import star from "../assets/icons/star.svg";
import locationIcon from "../assets/icons/location-icon.svg";

const HostelCard = (props) => {
  const { hostelID: hostelId, imageSrc, hostelName, hostelLocation, rating, availableRooms, managerUsername, } = props;
  const dispatch = useDispatch();

  const openPanel = () => {
    console.log("Opening panel");
    const hostelContainer = document.querySelector(".hostels-container");
    const roomPreviews = document.querySelector(".room-previews");
    
    hostelContainer.classList.add("shrink");

    roomPreviews.classList.remove("closed");
    roomPreviews.classList.add("show");
  };

  const handleClick = () => {
    dispatch(fetchHostelRooms(hostelId));
    dispatch(setSelectedHostelName(hostelName));
    openPanel();
  };

  return (
    <div className="hostel-card" onClick={handleClick}>
      <div
        className="card__image"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>

      <div className="card__details">
        <div className="card__header">
          <span className="card__title">
            {hostelName} 
          </span>
          <span className="rating-footnote">
            <img src={star} alt="rating" className="rating" width={30} height={30} />
            {rating}
          </span>
        </div>
        <p className="card__subtitle">
          <img src={locationIcon} alt="location" />
          {hostelLocation}
        </p>
        <p className="card__subtitle">
          <img src={roomIcon} alt="rooms available" />
          {availableRooms}
        </p>
        {/* <div className="card__links">
          <span className="manager-footnote">
            <img src={userIcon} alt="manager" className="round-icon" />
            <span>{managerUsername}</span>
          </span>
          <span className="rating-footnote">
            <img src={star} alt="rating" className="rating" />
            <p>{rating}</p>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default HostelCard;
