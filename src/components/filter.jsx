import React, { useState } from "react";
import PriceSlider from "./slider";
// CSS
import "./styles/filter.css";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
    const bodyElement = document.querySelector("body");
    bodyElement.style.overflow = showFilter ? "auto" : "hidden";
  };

  return (
    <div>
      <button className="filter-btn" onClick={handleShowFilter}>
        Filter
      </button>
      {showFilter && (
        <div className="overlay-page">
          <div className="filter-box">
            <div className="filter-header">
              <h2>Filter</h2>
              <span
                className="close-btn close-panel"
                onClick={handleShowFilter}
              >
                X
              </span>
            </div>
            
            <div className="filter-content">
              <PriceSlider />

              <h3>Sex</h3>
              <h3>Bedspace</h3>
            </div>

            <div className="filter-box-footer">
              <button className="filter-btn">Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
