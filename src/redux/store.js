import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import hostelListingReducer from "./hostelSlice";
import roomListingReducer from "./roomSlice";


export const store = configureStore({
   reducer: {
      counter: counterReducer,
      hostelListing: hostelListingReducer,
      roomListing: roomListingReducer
   },
});
