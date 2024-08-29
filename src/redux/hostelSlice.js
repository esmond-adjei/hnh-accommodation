import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHostelListings, searchHostels, getHostel } from "../services/api";

const createAsyncReducer = (asyncThunk, stateKey) => (builder) => {
  builder
    .addCase(asyncThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state[stateKey] = action.payload;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(asyncThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
};

const initialState = {
  data: [],
  selectedHostel: null,
  selectedHostelName: '',
  isLoading: false,
  error: null,
};

export const fetchHostels = createAsyncThunk("fetchHostels", getHostelListings);
export const findHostel = createAsyncThunk("findHostel", searchHostels);
export const fetchHostelDetail = createAsyncThunk(
  "fetchHostelDetail",
  async (hostelId) => {
    const response = await getHostel(hostelId);
    console.log('Hostel Detail:', response);
    return response;
  }
);

export const hostelListingSlice = createSlice({
  name: "hostelListing",
  initialState,
  reducers: {
    setSelectedHostelName(state, action) {
      state.selectedHostelName = action.payload;
    },
    clearSelectedHostel(state) {
      state.selectedHostel = null;
    }
  },
  extraReducers: (builder) => {
    createAsyncReducer(fetchHostels, "data")(builder);
    createAsyncReducer(findHostel, "data")(builder);
    createAsyncReducer(fetchHostelDetail, "selectedHostel")(builder);
  }
});

export const { setSelectedHostelName, clearSelectedHostel } = hostelListingSlice.actions;
export default hostelListingSlice.reducer;
