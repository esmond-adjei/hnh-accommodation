import React from 'react';
import { useListings } from './listingsContext';

import PreviewCard from '../components/Card';


const HostelListings = () => {

  const {hostelListings} = useListings();

  return (
    <>
      {
        (hostelListings.length === 0 || hostelListings === undefined) ?
          <h1>No Hostel Listings</h1>
          :
          <>
          {hostelListings.map((hostel) => (
          <PreviewCard
            key={hostel.id}
            hostelID={hostel.id}
            imageSrc={'https://i.pinimg.com/originals/c2/d6/8b/c2d68ba7103b2e8882829812333e8e6f.jpg'}
            hostelName={hostel.name}
            hostelLocation={hostel.location}
            availableRooms={hostel.available_rooms}
            rating={hostel.rating}
            description={hostel.description}
            managerLink={'https://www.example.com'}
          />))}
          </>
      }
    </>
  );
};

export default HostelListings;
