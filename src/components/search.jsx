import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { findRoom } from "../redux/roomSlice";
import { findHostel } from "../redux/hostelSlice";
// CSS
import "./styles/search.css";
// Component
import PriceSlider from "./slider";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.pathname === '/hostels') dispatch(findHostel({ q: query }));
    else if (location.pathname === '/rooms') dispatch(findRoom({ q: query }));
    else {
      // navigate to /hostel
      dispatch(findHostel({ q: query }));
      navigate('/hostels');
    }
    setIsFocused(false);
  };

  // Handle click outside to close the expanded search box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    if (isFocused) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFocused]);

  return (
    <div ref={searchRef} className={`search-box ${isFocused ? "expanded" : ""}`}>
      <form onSubmit={handleSubmit} className="search">
        <span className="search-icon">
          <SearchIcon
            size={24}
            style={{ stroke: 'var(--whitish)' }}
          />
        </span>
        <input
          className="search-input"
          type="search"
          placeholder="search hostel, location, ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
      </form>
      {isFocused && (
        <div className="additional-filters border-t p-4">
          <div className="filter-content">
            
            <PriceSlider />
            <div className="price-slider flex items-center gap-3 h-12">
              <h3 className="flex-shrink-0 w-[20%]">Sex</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <input type="radio" id="male" name="sex" value="male" className="peer sr-only" />
                  <label htmlFor="male" className="filter-radio">Male</label>
                </div>
                <div className="relative">
                  <input type="radio" id="female" name="sex" value="female" className="peer sr-only" />
                  <label htmlFor="female" className="filter-radio">Female</label>
                </div>
              </div>
            </div>

            <div className="price-slider flex items-center gap-3 h-12">
              <h3 className="flex-shrink-0 w-[20%]">Bedspace</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <input type="radio" id="single" name="bedspace" value="single" className="peer sr-only" />
                  <label htmlFor="single" className="filter-radio">Single</label>
                </div>
                <div className="relative">
                  <input type="radio" id="double" name="bedspace" value="double" className="peer sr-only" />
                  <label htmlFor="double" className="filter-radio">Double</label>
                </div>
                <div className="relative">
                  <input type="radio" id="triple" name="bedspace" value="triple" className="peer sr-only" />
                  <label htmlFor="triple" className="filter-radio">Triple</label>
                </div>
                <div className="relative">
                  <input type="radio" id="dormitory" name="bedspace" value="dormitory" className="peer sr-only" />
                  <label htmlFor="dormitory" className="filter-radio">Dormitory</label>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
