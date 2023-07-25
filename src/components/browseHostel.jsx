import React from 'react';
import '../styles/browse.css';

import HostelListings from './hostelListings';
import HostelRoomListings from './roomListings';
import { useListings } from './listingsContext';


const BrowseHostel = () => {

  const { selectedHostelId } = useListings();


  return (
    <>
        <div className="main-content">
          <div>
          <div className="hostel-previews">
            <HostelListings />
            </div>
          </div>
          <div className='room-previews'>
            { selectedHostelId && <HostelRoomListings /> }
          </div>
        </div>
    </>
  );
};

export default BrowseHostel;