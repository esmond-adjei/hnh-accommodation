import React from "react";
import { Link } from "react-router-dom";
// CSS
import "./styles/containers.css";
// components
import { useListings } from "../services/contextManager";

const SideNav = () => {
  const { showRooms, showHostels, showMap } = useListings();

  const navigationElements = [
    {
      name: "Hostel",
      icon: '/icons/home.svg',
      link: "/hostels",
      handleFunction: showHostels,
    },
    {
      name: "Rooms",
      icon: '/icons/room.svg',
      link: "/rooms",
      handleFunction: showRooms,
    },
    {
      name: "Map view",
      icon: '/icons/home_map.svg',
      link: "/map",
      handleFunction: showMap,
    },
    {
      name: "Collections",
      icon: '/icons/collections.svg',
      link: "/collections",
      handleFunction: showHostels,
    },
  ];

  return (
    <div className="nav-list">
      {navigationElements.map((element, index) => {
        return (
            <Link to={element.link} className="nav-link-item" onClick={(e) => element.handleFunction}>
              <img src={element.icon} className=".icon" alt={element.title} width={20} height={20} />
              <small>{element.name}</small>
            </Link>
        );
      })}
    </div>
  );
};

export default SideNav;
