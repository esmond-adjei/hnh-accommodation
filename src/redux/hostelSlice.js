import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHostelListings } from "../services/api";

// initial state properties
const initialState = {
  data: [],
  selectedHostelName: '',
  isLoading: false,
};

// thunk: for api calls
export const fetchHostels = createAsyncThunk("fetchHostels", getHostelListings);

export const hostelListingSlice = createSlice({
   name: "hostelListing",
   initialState,
    reducers: {
      setSelectedHostelName(state, action) {
        state.selectedHostelName = action.payload;
      }
    },
   extraReducers: (builder) => {
     builder.addCase(fetchHostels.pending, (state) => {state.isLoading = true});
     builder.addCase(fetchHostels.fulfilled, (state, action) => {
       state.isLoading = false;
       state.data = action.payload;
     });
   }
});

export const { setSelectedHostelName } = hostelListingSlice.actions;
export default hostelListingSlice.reducer;