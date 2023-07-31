import React, { useState } from 'react';

const PriceSlider = () => {
  const min = 100;
  const max = 100000;

  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    setMaxPrice(value);
  };

  return (
    <>
        <div>
        <h3>Price Range:</h3>
        <div>
            <label htmlFor="minPrice">Min:</label>
            <input
            type="range"
            id="minPrice"
            value={minPrice}
            onChange={handleMinChange}
            min={min}
            max={max}
            />
            <span>&cent;{minPrice}</span>
        </div>
        <div>
            <label htmlFor="maxPrice">Max:</label>
            <input
            type="range"
            id="maxPrice"
            value={maxPrice}
            onChange={handleMaxChange}
            min={min}
            max={max}
            />
            <span>&cent;{maxPrice}</span>
        </div>
        <div>
            {/* <span>Min</span>
           <input type="text" value={minPrice} onChange={(e) => setMinPrice(parseInt(e))}/>
            <span>Max</span>
           <input type="text" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e))}/>   */}
        </div>
        </div>
    </>
  );
};

export default PriceSlider;
