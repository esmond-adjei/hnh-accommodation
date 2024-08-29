import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './redux/store';
// components
import Header from './components/Header';
import BrowseHostel from './pages/browseHostel';
import BrowseRooms from './pages/browseRooms';
import CollectedRooms from './pages/browseCollections';
import MapApp from './pages/map';
import LandingPage from './pages/landingPage';
import Auth from './pages/authentication';
import HostelDetail from './pages/hostelDetail';


const App = () => {
  const location = useLocation();
  const showNav = ['/','/sign-in', '/sign-up'].includes(location.pathname);

  return (
    <Provider store={store}>
      {!showNav && <Header />}
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/sign-in" element={<Auth formType={'/sign-in'} />} />
          <Route exact path="/sign-up" element={<Auth formType={'/sign-up'} />} />
          <Route path="/hostels" element={<BrowseHostel />} />
          <Route path="/rooms" element={<BrowseRooms />} />
          <Route path="/map" element={<MapApp />} />
          <Route path="/collections" element={<CollectedRooms />} />
          <Route path="/hostel/:uuid" element={<HostelDetail />} /> {/* New route for hostel detail */}
        </Routes>
      </main>
    </Provider>
  );
};

export default App;
