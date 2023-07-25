import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import './App.css';
import BrowseHostel from './components/browseHostel';
import BrowseRooms from './components/browseRooms';
import Header from './components/Header';
import SideNav from './components/SideNav';
import MapApp from './components/map';


const App = () => {

  return (
    <>
      <main>
        <Header />
        <SideNav />
        <Routes>
          <Route exact path="/hostels" element={<BrowseHostel/>} />
          <Route path="/rooms" element={<BrowseRooms/>} />
          <Route path="/map" element={<MapApp/>} />
        </Routes>
      </main>
    </>
  );
};

export default App;