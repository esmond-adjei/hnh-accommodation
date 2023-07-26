import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// import './App.css';
import BrowseHostel from './components/browseHostel';
import BrowseRooms from './components/browseRooms';
import Header from './components/Header';
import SideNav from './components/SideNav';
import MapApp from './components/map';
import LandingPage from './components/pages/landingPage';
import AuthForm from './components/pages/authPage';


const App = () => {
  const location = useLocation();

  console.log("Path name: ", location.pathname, typeof location.pathname);
  const isLandingPage = ['/','/sign-in', 'sign-up'].includes(location.pathname);

  return (
    <>
      <main>
        {/* Conditionally render the Header */}
        {!isLandingPage && <Header />}
        {/* Conditionally render the SideNav */}
        {!isLandingPage && <SideNav />}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/sign-in" element={<AuthForm type={'sign-in'} />} />
          <Route exact path="/sign-up" element={<AuthForm type={'sign-up'} />} />
          <Route exact path="/hostels" element={<BrowseHostel />} />
          <Route path="/rooms" element={<BrowseRooms />} />
          <Route path="/map" element={<MapApp />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
