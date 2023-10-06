import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHostelListings, searchHostels } from "../services/api";


const createAsyncReducer = (asyncThunk, stateKey) => (builder) => {
  builder
    .addCase(asyncThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state[stateKey] = action.payload;
      state.isLoading = false;
    });
};

const initialState = {
  data: [],
  selectedHostelName: '',
  isLoading: false,
};

export const fetchHostels = createAsyncThunk("fetchHostels", getHostelListings);
export const findHostel = createAsyncThunk("findHostel", searchHostels);


export const hostelListingSlice = createSlice({
   name: "hostelListing",
   initialState,
    reducers: {
      setSelectedHostelName(state, action) {
        state.selectedHostelName = action.payload;
      }
    },
   extraReducers: (builder) => {
     createAsyncReducer(fetchHostels, "data")(builder);
     createAsyncReducer(findHostel, "data")(builder);
   }
});

export const { setSelectedHostelName } = hostelListingSlice.actions;
export default hostelListingSlice.reducer;