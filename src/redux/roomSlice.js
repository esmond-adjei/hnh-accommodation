import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHostelRooms, getRoomListings } from "../services/api";


// initial state properties
const initialState = {
  data: [],
  selectedHostelRooms: [],
  isLoading: false,
};

// thunk: for api calls
export const fetchRooms = createAsyncThunk("fetchRooms", getRoomListings);
export const fetchHostelRooms = createAsyncThunk("fetchHostelRooms", getHostelRooms);

export const roomListingSlice = createSlice({
   name: "roomListing",
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
     builder.addCase(fetchHostelRooms.pending, (state) => {state.isLoading = true});
     builder.addCase(fetchHostelRooms.fulfilled, (state, action) => {
       state.selectedHostelRooms = action.payload;
       state.isLoading = false;
     });

     builder.addCase(fetchRooms.pending, (state) => {state.isLoading = true});
     builder.addCase(fetchRooms.fulfilled, (state, action) => {
       state.data = action.payload;
       state.isLoading = false;
     });

   }
});

export default roomListingSlice.reducer;