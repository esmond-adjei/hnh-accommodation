import React, { useEffect, useState } from 'react';
import { getHostelListings, searchHostels } from '../services/api';
import HostelRoomListings from './roomListings';
import Search from './search';

const HostelListings = () => {
  const [hostelListings, setHostelListings] = useState([]);
  const [selectedHostelId, setSelectedHostelId] = useState(null);

  useEffect(() => {
    // Fetch the hostel data when the component mounts
    fetchHostelListings();
  }, []);

  const fetchHostelListings = async () => {
    try {
      const response = await getHostelListings();
      setHostelListings(response); // Update the hostel listings state
    } catch (error) {
      console.error('Error fetching hostel listings:', error.message);
    }
  };

  const handleHostelClick = (hostelId) => {
    setSelectedHostelId(hostelId); // Set the selected hostelId in state
  };

  const handleSearch = async (searchData) => {
    try {
      const response = await searchHostels(searchData);
      setHostelListings(response['hostel-results']); // Update the hostel listings state with search results
    } catch (error) {
      console.error('Error searching for hostels:', error.message);
      setHostelListings([]); // Clear the hostel listings in case of error
    }
  };

  return (
    <div>
      <Search onSearch={handleSearch} />

      <h2>Hostel Listings</h2>
      <div className='devListings'>
        {hostelListings.map((hostel) => (
          <div key={hostel.id} className='devHostel' onClick={() => handleHostelClick(hostel.id)}>
            {/* Render hostel information here */}
            <h3>{hostel.name}</h3>
            <p>Location: {hostel.location}</p>
            <p>{hostel.available_rooms}</p>
            <p>Rating: {hostel.rating}</p>
          </div>
        ))}
      </div>

      {/* Conditionally render the HostelRoomListings component */}
      {selectedHostelId && 
      <HostelRoomListings hostelId={selectedHostelId} />}
    </div>
  );
};

export default HostelListings;
