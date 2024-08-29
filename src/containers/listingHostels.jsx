import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHostels } from "../redux/hostelSlice";
import HostelCard from "../components/cardHostel";

const HostelListings = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.hostelListing);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchHostels());
    }
  }, [dispatch, data.length]);

  if (isLoading) {
    return <h1 className="preloader-context">😴 Loading Hostels...</h1>;
  }

  if (error && data.length === 0) {
    return <h1 className="preloader-context">😟 Error: {error}</h1>;
  }

  return (
    <div className="hostels-container">
      {data.length === 0 ? (
        <h1 className="preloader-context">📭 No Hostel Listings</h1>
      ) : (
        <>
          {data.map((hostel) => (
            <HostelCard key={hostel.id} hostel={hostel} />
          ))}
        </>
      )}
    </div>
  );
};

export default HostelListings;
