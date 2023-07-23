import React from 'react';
import { useSearchState } from '../services/states';

const Search = ({ setResults }) => {

  const { 
    query, 
    setQuery, 
    handleSearch
    } = useSearchState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchResults = await handleSearch();
    setResults(searchResults);
  };

  return (
    <div>
      <h2>Search Hostels</h2>
      <form onSubmit={handleSubmit} className='devForm'>
        <input
          type='search'
          placeholder='search hostel, location, bedspace, ...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Search;
