import React from "react";
import { Link } from "react-router-dom";
// SVGs
import hostelIcon from "../assets/icons/home.svg";
import roomIcon from "../assets/icons/room.svg";
import mapIcon from "../assets/icons/home_map.svg";
import collectionsIcon from "../assets/icons/collections.svg";
// CSS
import "./styles/containers.css";
// components
import { useListings } from "../services/contextManager";
import { NavElement } from "../components/navELement";
import Profile from "../components/profile";

const SideNav = () => {
  const { showRooms, showHostels, showMap } = useListings();

  const navigationElements = [
    {
      name: "Hostel",
      icon: hostelIcon,
      link: "/hostels",
      handleFunction: showHostels,
    },
    {
      name: "Rooms",
      icon: roomIcon,
      link: "/rooms",
      handleFunction: showRooms,
    },
    {
      name: "Map view",
      icon: mapIcon,
      link: "/map",
      handleFunction: showMap,
    },
    {
      name: "Collections",
      icon: collectionsIcon,
      link: "/collections",
      handleFunction: showHostels,
    },
  ];

  return (
    <div className="side-nav">
      {navigationElements.map((element, index) => {
        return (
          <Link to={element.link} key={index}>
            <NavElement
              key={index}
              icon={element.icon}
              title={element.name}
              handleFunction={element.handleFunction}
            />
          </Link>
        );
      })}

      <hr />
      <Profile />
    </div>
  );
};

export default SideNav;
