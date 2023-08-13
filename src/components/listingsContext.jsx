import React, { createContext, useContext } from 'react';
import { useHostelListingsState, useAppNavigation } from '../services/states';
import { useDarkMode } from '../services/utilityState';

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

    const [darkMode, toggleDarkMode] = useDarkMode();

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
            darkMode,
            toggleDarkMode
        }}>
      {children}
    </ListingsContext.Provider>
  );
}
