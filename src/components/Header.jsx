import React from "react";
import { Link } from "react-router-dom";
// CSS
import './styles/header.css'
// components
import Search from "./search";
// assets (png, svg)
import logo from "../assets/images/hnh-logo-30.png";
// import menu from '../assets/icons/hamburger-menu.svg';
import SideNav from "../containers/sideNav";
import Profile from "./profile";

const Header = () => {

  return (
      <header>
        <div className="main-header">
          <div className="logo-box">

            <Link to="/">
              <img className="app-logo" src={logo} alt="logo" />
            </Link>
          </div>
          <Search />
          <div className="utility-box">

          <Profile />
        </div>
        </div>

      {/* filters panel*/}
      {/* <div className="filters">
        <span>Location</span>
        <span>Price</span>
        <span>Bedspace</span>
      </div> */}

        <SideNav />

      </header>
  );
};

export default Header;
