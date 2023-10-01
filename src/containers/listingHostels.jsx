import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHostels } from "../redux/hostelSlice";
// CSS
import './styles/containers.css'
// components
import HostelCard from "../components/cardHostel";

const HostelListings = () => {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(fetchHostels())}, [dispatch]);

  const hostelListingState = useSelector((state) => state.hostelListing);

  return (
    <div className="hostels-container">
      { hostelListingState.isLoading && <h1>Loading Hostels...</h1> }
      { hostelListingState.data.length === 0 && !hostelListingState.isLoading ? (
        <h1>No Hostel Listings</h1>
      ) : (
        <>
          {hostelListingState.data.map((hostel) => (
            <HostelCard
              key={hostel.id}
              hostelID={hostel.id}
              imageSrc={hostel["hostel_img_url"]}
              hostelName={hostel.name}
              hostelLocation={hostel.location}
              availableRooms={hostel["available_rooms"]}
              rating={hostel.rating}
              description={hostel.description}
              managerUsername={hostel["manager_username"]}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default HostelListings;
