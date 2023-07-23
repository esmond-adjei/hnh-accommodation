import React, {useState} from 'react';
import { useHostelListingsState } from '../services/states';
import HostelRoomListings from './roomListings';
import HostelUpdateForm from './updateHostel';
import Search from './search';

const HostelListings = () => {

  const [isUpdateMode, setIsUpdateMode] = useState(false); // State to toggle update mode


  const { 
      hostelListings, 
      setHostelListings, 
      selectedHostelId,
      handleHostelDelete,
      fetchHostelListings,
      handleHostelClick
  } = useHostelListingsState();


  const handleHostelUpdate = (hostelId) => {
    setIsUpdateMode(true);
  };

  return (
    <div>
      <Search setResults={setHostelListings} />

      <h2>Hostel Listings</h2>
      <div className='devListings'>
      <button onClick={fetchHostelListings} className='refreshButton'>Refresh List</button>
        {hostelListings.map((hostel) => (
          <div key={hostel.id} className='devHostel' onClick={() => handleHostelClick(hostel.id)}>
            <h3>{hostel.name}</h3>
            <p>Location: {hostel.location}</p>
            <p>{hostel.available_rooms}</p>
            <p>Rating: {hostel.rating}</p>

            {/* Delete button to handle hostel deletion */}
            <button onClick={() => handleHostelDelete(hostel.id)}>Delete</button>
            <button onClick={() => handleHostelUpdate(hostel.id)}>Update</button>
          </div>
        ))}
      </div>
     {/* Conditionally render the HostelUpdateForm component */}
     { isUpdateMode && <HostelUpdateForm hostelId={selectedHostelId} />}

      {selectedHostelId && 
      <HostelRoomListings hostelId={selectedHostelId} />}
    </div>
  );
};

export default HostelListings;
