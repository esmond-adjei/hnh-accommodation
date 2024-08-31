import React from "react";
import { NavLink } from "react-router-dom";
// CSS
import "./styles/containers.css";
// components

const SideNav = () => {

  const navigationElements = [
    {
      name: "Hostel",
      icon: "🏨",
      link: "/hostels",
    },
    {
      name: "Rooms",
      icon: "🛌",
      link: "/rooms",
    },
    {
      name: "Map view",
      icon: "🗺️",
      link: "/map",
    },
    {
      name: "Collections",
      icon: "💛", 
      link: "/collections",
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
        >
          {element.icon}
          <small>{element.name}</small>
        </NavLink>
      ))}
    </div>
  );
};

export default SideNav;
