import React, { useState, useEffect, useRef } from "react";
import { isLoggedIn, logoutUser } from "../services/auth_api";
import { useListings } from "../services/contextManager";
import { Sun, Moon, User } from 'lucide-react'; 
import "./styles/profile.css";
// import AuthForm from "./authForm";

const Profile = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const [showSignIn, setSignIn] = useState(false);
  const menuRef = useRef(null);
  const isSignedIn = isLoggedIn();
  const { darkMode, toggleDarkMode } = useListings();

  const handleDisplayMenu = () => setShowMenu((prev) => !prev);
  // const openSignIn = () => setSignIn((prev) => !prev);
  const openSignIn = () => {
    window.location.href = "/sign-in";
  }

  const handleLogout = () => {
    logoutUser();
    setShowMenu(false);
    window.location.reload();
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <>
      {isSignedIn === false ? (
        <>
          <div className="side-nav-icon" onClick={openSignIn}>
            <User className="user-profile-icon guest" style={{stroke: 'var(--whitish)'}} size={40} />
          </div>
          {/* {showSignIn && (
            <div className="sign-in overlay-page">
              <AuthForm formType="/sign-in" prevStateUpdate={openSignIn} />
              <button className="close-btn close-panel" onClick={openSignIn}>
                X
              </button>
            </div>
          )} */}
        </>
      ) : (
        <div className="side-nav-icon" onClick={handleDisplayMenu}>
          <img
            className="user-profile-icon"
            src='/images/profile.jpg'
            alt="profile"
          />
          {/* <small className="user-name">
            {localStorage.getItem("username")}
          </small> */}
        </div>
      )}

      {showMenu && isSignedIn && (
        <div className="profile-menu" ref={menuRef}>
          {/* <button className="close-btn close-panel" onClick={handleDisplayMenu}>
            X
          </button> */}
          <div className="menu-header">
            <p className="menu-username">{localStorage.getItem("username")}</p>
            <p className="menu-email">{localStorage.getItem("email")}</p>
          </div>
          <div className="menu-options">
            <button
              className="theme-toggle"
              onClick={toggleDarkMode}
            >
              <Sun className={`round-icon ${darkMode ? 'hidden' : ''}`} size={18} />
              <Moon className={`round-icon ${darkMode ? '' : 'hidden'}`} size={18} />
              <p>{darkMode ? 'Light Mode' : 'Dark Mode'}</p>
            </button>
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              <User className="round-icon" size={18} />
              <p>Logout</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
