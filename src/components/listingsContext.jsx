import React, { createContext, useContext } from 'react';
import { useHostelListingsState, useAppNavigation } from '../services/states';

const ListingsContext = createContext();

export function useListings() {
  return useContext(ListingsContext);
}

export function ListingsProvider({ children }) {
  const { 
      hostelListings, 
      setHostelListings, 
      selectedHostelId,
      handleHostelDelete,
      fetchHostelListings,
      setSelectedHostelId
    } = useHostelListingsState();

    const {
      showRooms,
      handleShowRooms,
      showHostels,
      handleShowHostels,
      showMap,
      handleShowMap,
    } = useAppNavigation();

    return (
        <ListingsContext.Provider value={{ 
            hostelListings, 
            setHostelListings, 
            selectedHostelId,
            handleHostelDelete,
            fetchHostelListings,
            setSelectedHostelId,
            showRooms,
            showHostels,
            handleShowRooms,
            handleShowHostels,
            showMap,
            handleShowMap,
        }}>
      {children}
    </ListingsContext.Provider>
  );
}
