import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../services/auth_api";
// assets (svg, jpg, ...)
import userIcon from "../assets/icons/user-icon.svg";
import profilePicture from "../assets/images/profile.jpg";
// CSS
import "./styles/profile.css";
// component
import AuthForm from "./authForm";

const Profile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignIn, setSignIn] = useState(false);
  const isSignedIn = isLoggedIn();
  const handleDisplayMenu = () => {
    setShowMenu(!showMenu);
  };

  const openSignIn = () => {
    setSignIn(!showSignIn);
    document.body.style.overflow = showSignIn ? "auto" : "hidden";
    document.querySelector(".side-nav").style.zIndex = showSignIn ? "" : "4";
  };

  return (
    <>
      {isSignedIn === false ? (
        <>
          <div className="side-nav-icon center-absolute" onClick={openSignIn}
          >
            <img
              className="user-profile-icon guest"
              src={userIcon}
              width="100%"
              alt="profile"
              onClick={handleDisplayMenu}
            />
          </div>
          {showSignIn && (
            <div className="sign-in overlay-page">
              <AuthForm formType={"/sign-in"} prevStateUpdate={openSignIn} />
              <button className="close-btn close-panel" onClick={openSignIn}>
                X
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="side-nav-icon center-absolute">
          <img
            className="user-profile-icon"
            src={profilePicture}
            width="100%"
            alt="profile"
            onClick={handleDisplayMenu}
          />
          <small className="user-name">
            {localStorage.getItem("username")}
          </small>
        </div>
      )}

      {showMenu && isSignedIn && (
        <div className="profile-menu">
          <button className="close-btn close-panel" onClick={handleDisplayMenu}>
            X
          </button>
          <Link to="#">
            <p>Account</p>
          </Link>
          <Link to="#">
            <p>Help</p>
          </Link>
          <Link
            to="/hostels"
            onClick={() => {
              logoutUser();
              setShowMenu(false);
              window.location.reload();
            }}
          >
            <p>Logout</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default Profile;
