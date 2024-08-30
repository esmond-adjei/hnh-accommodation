import React, { useState, cloneElement } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import '../components/styles/cardRoom.css';

const GalleryView = ({ gallery, children }) => {
  const child = React.Children.only(children);

  const initialImageIndex = gallery.findIndex(
    (img) => img === child.props.room.room_img_url
  );

  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  const handleCardClick = () => setIsExpanded(true);

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
    <div className="relative">
      {cloneElement(child)}

      <div onClick={handleCardClick} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-white absolute top-16 right-3 cursor-pointer hover:scale-105 duration-100">
        🖼️
      </div>

      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overlay-fade"
          onClick={handleCloseExpanded}
        >
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
              alt={currentImageIndex}
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
    </div>
  );
};

export default GalleryView;
