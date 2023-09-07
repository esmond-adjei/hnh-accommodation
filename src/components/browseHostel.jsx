import React from "react";
import "../styles/browse.css";

import HostelListings from "./listingHostels";
import HostelRoomListings from "./listingRooms";
import { useListings } from "./contextManager";

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
        <div className="room-previews">
          {selectedHostelId && <HostelRoomListings />}
        </div>
      </div>
    </>
  );
};

export default BrowseHostel;
