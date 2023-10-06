import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "../services/auth_api";
import { delCollection, makeCollection } from "../redux/roomSlice";
import "./styles/cardRoom.css";
import bookmarkFill from "../assets/icons/bookmark-fill.svg";
import bookmarkEmpty from "../assets/icons/bookmark-empty.svg";

const amenityIcons = {
  "Air Condition": require("../assets/icons/air-condition.svg").default,
  Bathroom: require("../assets/icons/bathroom.svg").default,
  Refrigerator: require("../assets/icons/fridge.svg").default,
  "Study Desk": require("../assets/icons/study.svg").default,
  TV: require("../assets/icons/tv.svg").default,
  Kitchen: require("../assets/icons/kitchen.svg").default,
  Wardrobe: require("../assets/icons/wardrobe.svg").default,
};

const sexIcon = {
  male: require("../assets/icons/man.svg").default,
  female: require("../assets/icons/woman.svg").default,
};

const RoomCard = (props) => {
  const { room_id: roomId, room_img_url, bedspace,
          description, price, number_available,
          sex, amenities, is_collected, hostel,
          hostel_location, cardType,
        } = props;

  const dispatch = useDispatch();
  const [isCollected, setIsCollected] = useState(is_collected);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);

  const updateSlide = () => {
    const slideContainer = slideContainerRef.current;
    try {
      const slideWidth = slideContainer.clientWidth;
      const translateX = (-currentIndex * slideWidth) / 2; // Adjust the number of visible icons
      slideContainer.style.transform = `translateX(${translateX}px)`;
    } catch (error) {
      console.log("Error updating slide", error);
    }
  };

  useEffect(() => {
    updateSlide();
  });

  const prevSlide = () => {
    const value = Math.max(currentIndex - 1, 0);
    setCurrentIndex(value);
    updateSlide();
  };

  const nextSlide = () => {
    const value = Math.min(currentIndex + 1, amenities.length - 1);
    setCurrentIndex(value);
    updateSlide();
  };

  const handleCollect = () => {
    if (!isLoggedIn()) {
      alert("Please login to add to collection");
      return;
    }
    setIsCollected(!isCollected);
    !isCollected ? dispatch(makeCollection(roomId)) : dispatch(delCollection(roomId));
  };

  if (cardType === "collected" && !isCollected) {
    return;
  }

  return (
    <div
      key={roomId}
      className="room-card"
      style={{ backgroundImage: `url(${room_img_url})` }}
    >
      <span className="collect" onClick={handleCollect}>
        <img
          src={isCollected ? bookmarkFill : bookmarkEmpty}
          alt="add to collectoin"
        />
      </span>
      <div className="card-overlay">
        <h3 className="bedspace">{bedspace}</h3>

        <p className="price">&cent;{price}</p>
        <p className="description">{description}</p>
        <p>Number Available: {number_available}</p>
        <p className="sex">
          Available for only {sex}
          <img src={sexIcon[sex]} alt={sex} className="sex-icon" />
        </p>
        <div className="slider-container">
          <ul className="amenity-icons" ref={slideContainerRef}>
            {amenities.map((amenity) => (
              <li key={amenity.id} className="amenity-icon">
                <img src={amenityIcons[amenity.name]} alt={amenity.name} />
                <p>{amenity.name}</p>
              </li>
            ))}
          </ul>
          <span className="slider-ctrl left">
            <span onClick={prevSlide}>&lt;</span>
          </span>
          <span className="slider-ctrl right">
            <span onClick={nextSlide}>&gt;</span>
          </span>
        </div>
        {hostel && (
          <p className="card__links">
            {hostel} | {hostel_location}
          </p>
        )}
      </div>
    </div>
  );
};

export default RoomCard;