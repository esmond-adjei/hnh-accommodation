import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// components
import BrowseHostel from './components/browseHostel';
import BrowseRooms from './components/browseRooms';
import CollectedRooms from './components/browseCollections';
import Header from './components/Header';
import SideNav from './components/sideNav';
import MapApp from './components/map';
import LandingPage from './components/pages/landingPage';
import AuthForm from './components/pages/authPage';
import { useListings } from './components/contextManager';


const App = () => {
  const location = useLocation();
  const { darkMode } = useListings();
  const showNav = ['/','/sign-in', '/sign-up'].includes(location.pathname);

  return (
    <>
      <main className={darkMode ? 'dark-mode' : ''}>
        {!showNav && <Header />}
        {!showNav && <SideNav />}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/sign-in" element={<AuthForm formType={'/sign-in'} />} />
          <Route exact path="/sign-up" element={<AuthForm formType={'/sign-up'} />} />
          <Route exact path="/hostels" element={<BrowseHostel />} />
          <Route path="/rooms" element={<BrowseRooms />} />
          <Route path="/map" element={<MapApp />} />
          <Route path="/collections" element={<CollectedRooms />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
