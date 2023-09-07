import React from "react";
import { useListings } from "./contextManager";
// components
import PreviewCard from "./cardHostel";

const HostelListings = () => {
  const { hostelListings } = useListings();

  return (
    <>
      {hostelListings.length === 0 || hostelListings === undefined ? (
        <h1>No Hostel Listings</h1>
      ) : (
        <>
          {hostelListings.map((hostel) => (
            <PreviewCard
              key={hostel.id}
              hostelID={hostel.id}
              imageSrc={hostel.hostel_img_url}
              hostelName={hostel.name}
              hostelLocation={hostel.location}
              availableRooms={hostel.available_rooms}
              rating={hostel.rating}
              description={hostel.description}
              managerUsername={hostel.manager_username}
            />
          ))}
        </>
      )}
    </>
  );
};

export default HostelListings;
