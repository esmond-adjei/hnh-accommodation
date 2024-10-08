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
import HostelDetail from './pages/hostelDetail';
import Footer from './components/Footer';
import AuthPage from './pages/auth/authPage';


const App = () => {
  const location = useLocation();
  const isHeadless = ['/','/sign-in', '/sign-up'].includes(location.pathname);

  return (
    <Provider store={store}>
      {!isHeadless && <Header />}
      <main className='min-h-[70vh]'>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/sign-in" element={<AuthPage />} />
          <Route exact path="/sign-up" element={<AuthPage />} />
          <Route path="/hostels" element={<BrowseHostel />} />
          <Route path="/rooms" element={<BrowseRooms />} />
          <Route path="/map" element={<MapApp />} />
          <Route path="/collections" element={<CollectedRooms />} />
          <Route path="/hostel/:uuid" element={<HostelDetail />} />
        </Routes>
      </main>
      {!isHeadless && <Footer />}
    </Provider>
  );
};

export default App;
