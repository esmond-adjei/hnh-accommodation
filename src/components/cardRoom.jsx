import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "../services/auth_api";
import { delCollection, makeCollection } from "../redux/roomSlice";
import "./styles/cardRoom.css";
import bookmarkFill from "../assets/icons/bookmark-fill.svg";
import bookmarkEmpty from "../assets/icons/bookmark-empty.svg";

import { 
  BedDoubleIcon,
  AirVentIcon,
  ShowerHeadIcon,
  RefrigeratorIcon,
  BookOpenIcon,
  TvIcon,
  UtensilsIcon,
  ShirtIcon,
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BookmarkIcon,
} from "lucide-react";


const amenityIcons = {
  "Air Condition": <AirVentIcon className="h-4 w-4"/>,
  "Bathroom": <ShowerHeadIcon className="h-4 w-4"/>,
  "Refrigerator": <RefrigeratorIcon className="h-4 w-4"/>,
  "Study Desk": <BookOpenIcon className="h-4 w-4"/>,
  "TV": <TvIcon className="h-4 w-4"/>,
  "Kitchen": <UtensilsIcon className="h-4 w-4"/>,
  "Wardrobe": <ShirtIcon className="h-4 w-4"/>,
};


const sexIcon = {
  male: require("../assets/icons/man.svg").default,
  female: require("../assets/icons/woman.svg").default,
};

const RoomCard = ({ room, cardType='' }) => {

  const dispatch = useDispatch();
  const [isCollected, setIsCollected] = useState(room.is_collected);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideContainerRef = useRef(null);

  const updateSlide = () => {
    const slideContainer = slideContainerRef.current;
    try {
      const slideWidth = slideContainer.clientWidth;
      const translateX = (-currentIndex * slideWidth) / 2;
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
    const value = Math.min(currentIndex + 1, room.amenities.length - 1);
    setCurrentIndex(value);
    updateSlide();
  };

  const handleCollect = () => {
    if (!isLoggedIn()) {
      alert("Please login to add to collection");
      return;
    }
    setIsCollected(!isCollected);
    !isCollected ? dispatch(makeCollection(room.room_id)) : dispatch(delCollection(room.room_id));
  };

  if (cardType === "collected" && !isCollected) {
    return;
  }

  return (
    <div
      key={room.room_id}
      className="room-card"
      style={{ backgroundImage: `url(${room.room_img_url})` }}
      title="click to view"
    >
      <span className="collect" onClick={handleCollect}>
        <img
          src={isCollected ? bookmarkFill : bookmarkEmpty}
          alt="add to collectoin"
        />
      </span>
      <div className="card-overlay">
        <h2 className="bedspace">{room.bedspace}</h2>

        <h3 className="price">&cent;{room.price}</h3>
        <p className="description">{room.description}</p>
        <p>Number Available: {room.number_available}</p>
        <p className="sex">
          Available for only {room.sex}
          <img src={sexIcon[room.sex]} alt={room.sex} className="sex-icon" />
        </p>
        <div className="slider-container">
          <ul className="amenity-icons" ref={slideContainerRef}>
            {room.amenities.map((amenity) => (
              <li key={amenity.id} className="amenity-icon">
              {amenityIcons[amenity.name]}
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
        {room.hostel && (
          <p className="card__links">
            {room.hostel} | {room.hostel_location}
          </p>
        )}
      </div>
    </div>
  );
};

// ============= ROOM CARD version 2 =============
const RoomCardv2 = ({ room }) => {
  const dispatch = useDispatch();

  const handleCollect = () => {
    if (!isLoggedIn()) {
      alert("Please login to add to collection");
      return;
    }
    const newCollectionState = !room.is_collected;
    newCollectionState ? dispatch(makeCollection(room.room_id)) : dispatch(delCollection(room.room_id));
  };

  return (
    <div className="bg-white border hover:shadow-lg duration-200 rounded-lg overflow-hidden flex flex-col h-full">
      <div className="relative h-48">
        <img
          src={room.room_img_url}
          alt={`Room ${room.room_id}`}
          className="w-full h-full object-cover"
        />
        <span 
          className="absolute top-2 right-2 cursor-pointer"
          onClick={handleCollect}
        >
          <img
            src={room.is_collected ? bookmarkFill : bookmarkEmpty}
            alt="add to collection"
            className="w-6 h-6"
          />
        </span>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <BedDoubleIcon className="mr-2" size={20} />
          {room.bedspace}
        </h3>
        {room.description && <p className="text-gray-600 mb-2 line-clamp-2">{room.description}</p>}
        <p className="text-lg font-bold mb-2">Price: ¢{room.price}</p>
        <p className="text-gray-500 mb-2">Available: {room.number_available}</p>
        <p className="text-gray-500 mb-2 flex items-center">
          For {room.sex} only
          <img src={sexIcon[room.sex]} alt={room.sex} className="sex-icon" />
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {room.amenities.slice(0, 3).map((amenity) => {
            return (
              <span key={amenity.id} className="bg-gray-200 rounded-full px-2 py-1 text-xs flex items-center">
                {amenityIcons[amenity.name]}
                {amenity.name}
              </span>
            );
          })}
          {room.amenities.length > 3 && (
            <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>
        {room.hostel && (
          <p className="mt-2 text-sm text-gray-500">
            {room.hostel} | {room.hostel_location}
          </p>
        )}
      </div>
    </div>
  );
};

// ============= EXPANDABLE ROOM CARD =============
const ExpandableRoomCard = ({ room, gallery = [room.room_img_url] }) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const currentIndex = gallery.findIndex((img) => img === room.room_img_url);
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  const handleCollect = (e) => {
    e.stopPropagation();
    if (!isLoggedIn()) {
      alert("Please login to add to collection");
      return;
    }
    const newCollectionState = !room.is_collected;
    newCollectionState
      ? dispatch(makeCollection(room.room_id))
      : dispatch(delCollection(room.room_id));
  };

  const handleCardClick = () => {
    setIsExpanded(true);
  };

  const handleCloseExpanded = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div
        className="bg-white border hover:shadow-lg duration-200 rounded-lg overflow-hidden cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative h-48 transition-transform transform hover:scale-105 duration-300">
          <img
            src={room.room_img_url}
            alt={`Room ${room.room_id}`}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 z-10" onClick={handleCollect}>
            <BookmarkIcon
              className={`h-6 w-6 ${
                room.is_collected ? "text-yellow-500 fill-current" : "text-white"
              }`}
            />
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <BedDoubleIcon className="mr-2" size={20} />
            {room.bedspace}
          </h3>
          <p className="text-lg font-bold mb-2">¢{room.price}</p>
          <p className="text-gray-500 mb-2">Available: {room.number_available}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {room.amenities.slice(0, 3).map((amenity) => (
              <span
                key={amenity.id}
                className="bg-gray-200 rounded-full px-2 py-1 text-xs flex items-center"
              >
                {amenityIcons[amenity.name]}
                <span className="ml-1">{amenity.name}</span>
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">
                +{room.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        // overlay
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overlay-fade"
          onClick={handleCloseExpanded}
        >
          {/* frame */}
          <div
            className="relative bg-white rounded-lg p-4 max-w-3xl w-full max-h-[90vh] overflow-y-auto slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-whitish bg-opacity-50 rounded-full p-1"
              onClick={handleCloseExpanded}
            >
              <XIcon size={24} />
            </button>
            <img
              src={gallery[currentImageIndex]}
              alt={`Room ${room.room_id}`}
              className="w-full h-auto object-cover rounded-md transition-transform transform duration-500"
              key={currentImageIndex}
            />
            {gallery.length > 1 && (
              <>
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-1"
                  onClick={handlePrevImage}
                >
                  <ChevronLeftIcon size={32} />
                </button>
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-1"
                  onClick={handleNextImage}
                >
                  <ChevronRightIcon size={32} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export { RoomCard, RoomCardv2, ExpandableRoomCard };