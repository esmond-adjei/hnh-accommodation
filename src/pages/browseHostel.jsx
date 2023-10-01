import React from "react";
// CSS
import './styles/pages.css'

import HostelListings from "../containers/listingHostels";
import HostelRoomListings from "../containers/listingHostelRooms";

const BrowseHostel = () => {

  return (
      <div className="hostels-view">
        <HostelListings />
        <HostelRoomListings />
      </div>
  );
};

export default BrowseHostel;
