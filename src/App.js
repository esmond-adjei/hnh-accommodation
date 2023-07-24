import React from 'react';
// import './App.css';
import Browse from './components/browse';
import { ListingsProvider } from './components/listingsContext';

const App = () => {

  return (
    <>
      {/*
      <h1>Hostel Accommodation App</h1>
       <Register/>
      <Login/>
      <hr/>
      <HostelListings />
      <hr/>
      <HostelCreateForm /> */}

      <ListingsProvider>
      <Browse />
      </ListingsProvider>

    </>
  );
};

export default App;