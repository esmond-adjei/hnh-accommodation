import React from 'react';
import { useListings } from './listingsContext';

import PreviewCard from '../components/Card';


const HostelListings = () => {

  const {hostelListings} = useListings();

  // const handleHostelUpdate = (hostelId) => {
  //   setIsUpdateMode(true);
  // };

  return (
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
          />
      ))}
      {/* </div> */}
     {/* Conditionally render the HostelUpdateForm component */}
     {/* { isUpdateMode && <HostelUpdateForm hostelId={selectedHostelId} />} */}
    </>
  );
};

export default HostelListings;
