import React from "react";
import { useSearchState } from "../services/states";
import { useRoomListings } from "../services/states";
import { useListings } from "../services/contextManager";
// CSS
import "./styles/search.css";
// SVG
import searchIcon from "../assets/icons/search.svg";
// Component
import Filter from "./filter";

const Search = () => {
  const { setHostelListings, showRooms } = useListings();
  const { setRoomListings } = useRoomListings("__SEARCH__"); // return room listing state manager; __SEARCH__ is a trigger

  const category = showRooms ? "room" : "hostel";
  const { query, setQuery, handleSearch } = useSearchState(category);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchResults = await handleSearch();
    console.log("Setting Results for :", category, showRooms, searchResults);
    showRooms
      ? setRoomListings(searchResults)
      : setHostelListings(searchResults);
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit} className="search">
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
