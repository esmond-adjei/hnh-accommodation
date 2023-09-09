import React from "react";
import { useListings } from "../services/contextManager";
// CSS
import './styles/containers.css'
// components
import HostelCard from "../components/cardHostel";

const HostelListings = () => {
  const { hostelListings } = useListings();

  return (
    <div className="hostels-container">
      {hostelListings.length === 0 || false ? (
        <h1>No Hostel Listings</h1>
      ) : (
        <>
          {hostelListings.map((hostel) => (
            <HostelCard
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
    </div>
  );
};

export default HostelListings;
