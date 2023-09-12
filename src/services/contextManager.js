import React, { createContext, useContext } from 'react';
import { useHostelListingsState } from './states';
import { useDarkMode } from './utilityState';
import { useLocation } from 'react-router-dom';

const ListingsContext = createContext(undefined);

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

    // const {
    //   showRooms,
    //   handleShowRooms,
    //   showHostels,
    //   handleShowHostels,
    //   showMap,
    //   handleShowMap,
    // } = useAppNavigation();
    const useAppNavigation = () => {
      const location = useLocation();
      let showRooms = location.pathname === '/rooms';
      let showHostels = location.pathname === '/hostels';
      let showMap = location.pathname === '/map';

      if (showRooms) {
        showHostels = false;
        showMap = false;
      }
      if (showHostels) {
        showRooms = false;
        showMap = false;
      }
      if (showMap) {
        showRooms = false;
        showHostels = false;
      }

      return { showRooms, showHostels, showMap,}
    }

    const { showRooms, showHostels, showMap } = useAppNavigation();

    

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
            showMap,
            // handleShowRooms,
            // handleShowHostels,
            // handleShowMap,
            darkMode,
            toggleDarkMode
        }}>
      {children}
    </ListingsContext.Provider>
  );
}
