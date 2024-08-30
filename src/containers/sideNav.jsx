import React from "react";
import { NavLink } from "react-router-dom";
// CSS
import "./styles/containers.css";
// components
import { useListings } from "../services/contextManager";

const SideNav = () => {
  const { showRooms, showHostels, showMap } = useListings();

  const navigationElements = [
    {
      name: "Hostel",
      icon: "🏨", //'/icons/home.svg',
      link: "/hostels",
      handleFunction: showHostels,
    },
    {
      name: "Rooms",
      icon: "🛌", //'/icons/room.svg',
      link: "/rooms",
      handleFunction: showRooms,
    },
    {
      name: "Map view",
      icon: "🗺️", //'/icons/home_map.svg',
      link: "/map",
      handleFunction: showMap,
    },
    {
      name: "Collections",
      icon: "💛", //'/icons/collections.svg',
      link: "/collections",
      handleFunction: showHostels, // TODO: update to fetch from collections
    },
  ];

  return (
    <div className="nav-list">
      {navigationElements.map((element, index) => (
        <NavLink
          key={index}
          to={element.link}
          className={({ isActive }) =>
            `nav-link-item ${isActive ? "active-nav-link" : ""}`
          }
          onClick={element.handleFunction}
        >
          {element.icon}
          <small>{element.name}</small>
        </NavLink>
      ))}
    </div>
  );
};

export default SideNav;
