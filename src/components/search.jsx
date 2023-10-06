import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
// CSS
import "./styles/search.css";
// SVG
import searchIcon from "../assets/icons/search.svg";
// Component
import Filter from "./filter";
import { findRoom } from "../redux/roomSlice";
import { findHostel } from "../redux/hostelSlice";

const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [query, setQuery] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.pathname === '/hostels') dispatch(findHostel({q: query}));
    else if (location.pathname === '/rooms') dispatch(findRoom({q: query}))
  };

  return (
    <div className="search-box">
      <form onSubmit={ handleSubmit } className="search">
        <input type="image" src={searchIcon} alt="search icons" />
        <input
          className="search-input"
          type="search"
          placeholder="search hostel, location, ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Filter />
      </form>
    </div>
  );
};

export default Search;
