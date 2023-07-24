import React, { createContext, useContext } from 'react';
import { useHostelListingsState } from '../services/states';

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

    return (
        <ListingsContext.Provider value={{ 
            hostelListings, 
            setHostelListings, 
            selectedHostelId,
            handleHostelDelete,
            fetchHostelListings,
            setSelectedHostelId,
        }}>
      {children}
    </ListingsContext.Provider>
  );
}
