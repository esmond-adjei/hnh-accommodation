import React from 'react';
import { useSearchState } from '../services/states';
import { useListings } from './listingsContext';

import searchIcon from '../assets/icons/search.svg';
import {useRoomListings} from '../services/states';


const Search = () => {
  const { setHostelListings, showRooms } = useListings();
  const { setRoomListings } = useRoomListings('__search__');

  const category = showRooms ? 'room' : 'hostel';
  const {
    query,
    setQuery,
    handleSearch
  } = useSearchState(category);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchResults = await handleSearch();
    console.log("Setting Results: ", searchResults);
    showRooms ? setRoomListings(searchResults) : setHostelListings(searchResults);
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit} className="search">
        <input
          type='search'
          placeholder='search hostel, location, bedspace, ...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
          <input type="image" src={searchIcon} alt='search icons'/>
      </form>
    </div>
  );
};

export default Search;
