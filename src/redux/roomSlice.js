import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCollection,
  removeCollection,
  getCollections,
  getHostelRooms,
  getRoomListings,
} from "../services/api";


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
  collections: [],
  isLoading: false,
};

export const fetchRooms = createAsyncThunk("fetchRooms", getRoomListings);
export const fetchHostelRooms = createAsyncThunk(
  "fetchHostelRooms",
  getHostelRooms
);
export const fetchCollections = createAsyncThunk(
  "fetchCollections",
  getCollections
);
export const makeCollection = createAsyncThunk("makeCollection", addCollection);
export const delCollection = createAsyncThunk("delCollection", removeCollection);

export const roomListingSlice = createSlice({
  name: "roomListing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createAsyncReducer(fetchHostelRooms, "data")(builder);
    createAsyncReducer(fetchRooms, "data")(builder);
    createAsyncReducer(fetchCollections, "collections")(builder);

    builder.addCase(makeCollection.fulfilled, (state) => {
      state.isLoading = false;
      console.log("Make Collection Item Successful");
    });

    builder.addCase(delCollection.fulfilled, (state) => {
      state.isLoading = false;
      console.log("Remove Collection Item Successful");
    });
  },
});

export default roomListingSlice.reducer;
