import React from 'react';
import '../styles/browse.css';

import Header from './Header';
import SideNav from './SideNav';
import HostelListings from './hostelListings';
import HostelRoomListings from './roomListings';
import { useListings } from './listingsContext';


const Browse = () => {

  const { selectedHostelId } = useListings();

  return (
    <>
      <main>
        <Header />
        <SideNav />
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
      </main>
    </>
  );
};

export default Browse;