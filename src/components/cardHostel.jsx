import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchHostelRooms } from "../redux/roomSlice";
import { setSelectedHostelName } from "../redux/hostelSlice";
// CSS
import "./styles/cardHostel.css";
import { BedDouble, MapPinIcon } from "lucide-react";
// Icons

const HostelCard = ({ hostel }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    e.preventDefault();
    dispatch(fetchHostelRooms(hostel.id));
    dispatch(setSelectedHostelName(hostel.name));
    openPanel();
  };

  const handleNameClick = (e) => {
    e.stopPropagation();
    navigate(`/hostel/${hostel.id}`);
  };

  return (
    <div className="hostel-card" onClick={handleCardClick}>
      <div
        className="card__image"
        style={{ backgroundImage: `url(${hostel.hostel_img_url})` }}
      ></div>

      <div className="card__details">
        <div className="card__header">
          <span className="card__title" onClick={handleNameClick}>
            {hostel.name}
          </span>
          <span className="rating-footnote">
            ⭐ {hostel.rating}
          </span>
        </div>
        <p className="card__subtitle">
          <MapPinIcon size={18} />
          {hostel.location}
        </p>
        <p className="card__subtitle">
          <BedDouble size={18} />
          {hostel.available_rooms}
        </p>
      </div>
    </div>
  );
};

const openPanel = () => {
  console.log("Opening panel");
  const hostelContainer = document.querySelector(".hostels-container");
  const roomPreviews = document.querySelector(".room-previews");
  
  if (hostelContainer) hostelContainer.classList.add("shrink");
  if (roomPreviews) {
    roomPreviews.classList.remove("closed");
    roomPreviews.classList.add("show");
  }
};


export default HostelCard;
