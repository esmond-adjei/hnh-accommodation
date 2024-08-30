import React, { useState, useRef, useEffect } from 'react';
import { QuoteIcon } from 'lucide-react';
import './styles/slider.css';

const SlidingImage = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [dragStartX, setDragStartX] = useState(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [expandedText, setExpandedText] = useState(false); // State to track text expansion

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseDown = (event) => {
    setDragStartX(event.clientX || event.touches[0].clientX);
  };

  const handleMouseMove = (event) => {
    if (dragStartX !== null && !isMouseOver) {
      const dragDistance = (event.clientX || event.touches[0].clientX) - dragStartX;
      containerRef.current.style.transform = `translateX(calc(-${activeIndex * 100}% + ${dragDistance}px))`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOver) {
        setActiveIndex((activeIndex + 1) % data.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, data.length, isMouseOver]);

  const handleMouseUp = (event) => {
    if (dragStartX !== null && !isMouseOver) {
      const dragDistance = (event.clientX || event.changedTouches[0].clientX) - dragStartX;
      const slideWidth = containerRef.current.offsetWidth;
      const swipeThreshold = slideWidth / data.length;

      if (dragDistance < -swipeThreshold) {
        setActiveIndex((activeIndex + 1) % data.length); // Circular swipe to the right
      } else if (dragDistance > swipeThreshold) {
        setActiveIndex((activeIndex - 1 + data.length) % data.length); // Circular swipe to the left
      }

      containerRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
      setDragStartX(null);
    }
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const toggleTextExpansion = () => {
    setExpandedText(!expandedText);
  };

  return (
    <div
      className="slide-object"
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="slide-window"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        ref={containerRef}
      >
        {data.map((testimonial, index) => (
          <div className='slide-screen' key={index}>
            <div className="slide-screen__text">
              <QuoteIcon size={72} className='quote' style={{stroke: 'var(--secondary-color-darkest)'}} />
              <p>
                {
                  testimonial.text !== '' ? (expandedText ? testimonial.text : testimonial.text.slice(0, 200)) :
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Imanus dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Imanus dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.`
                }
                {testimonial.text.length > 200 ?
                  ( // Button appears only if text exceeds 100 characters
                    <span key={index} onClick={toggleTextExpansion} style={{ 'color': 'blue', 'textDecoration': 'underline' }}>
                      {expandedText ? ' shorten' : '... expand'}
                    </span>
                  ) : ''}
              </p>
              <span>
                <h3 style={{ margin: 0 }}>{testimonial.name}</h3>
                <small> — {testimonial.title}</small>
              </span>
            </div>
            <img
              key={index}
              src={testimonial.image}
              alt={`Slide ${index + 1}`}
              className={`slide-screen__image ${index === activeIndex ? 'active' : ''}`}
            />
          </div>
        ))}
      </div>
      <div className="dots-container">
        {data.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeIndex ? 'active' : 'inactive'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingImage;
