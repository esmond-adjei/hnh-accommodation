import React from 'react';
// import './App.css';
import BrowseHostel from './components/browseHostel';
import BrowseRooms from './components/browseRooms';
import { useListings } from './components/listingsContext';
import Header from './components/Header';
import SideNav from './components/SideNav';


const App = () => {

  const { showRooms } = useListings();


  return (
    <>
      <main>
        <Header />
        <SideNav />
        {
          showRooms ? 
            <BrowseRooms />
          : 
            <BrowseHostel />
        }
      </main>
    </>
  );
};

export default App;