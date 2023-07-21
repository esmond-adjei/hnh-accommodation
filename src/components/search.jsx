import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = {q: query};
    onSearch(searchData);
  };

  return (
    <div>
      <h2>Search Hostels</h2>
      <form onSubmit={handleSubmit} className='devForm'>
        <input
          type='search'
          placeholder='search hostel, location, bedspace, ...'
          value={query}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Search;
