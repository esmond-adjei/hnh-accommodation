import React from 'react';
import { useSearchState } from '../services/states';
import { useListings } from './listingsContext';

import searchIcon from '../assets/icons/search.svg';


const Search = () => {
  const { setHostelListings } = useListings();

  const {
    query,
    setQuery,
    handleSearch
  } = useSearchState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchResults = await handleSearch();
    setHostelListings(searchResults);
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
