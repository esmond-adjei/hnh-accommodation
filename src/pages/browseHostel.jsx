import React from "react";
// CSS
import './styles/pages.css'

import HostelListings from "../containers/listingHostels";
import HostelRoomListings from "../containers/listingHostelRooms";
import { useListings } from "../services/contextManager";

const BrowseHostel = () => {
  const { selectedHostelId } = useListings();

  return (
    <div className="hostels-view">
      <HostelListings />
      {selectedHostelId && <HostelRoomListings />}
    </div>
  );
};

export default BrowseHostel;
