import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "./Api";

export const fetchTourSlice = createAsyncThunk(
  "allTours/gettourpackageall",
  async (postObject) => {
    try {
      const response = await axios.post(
        BaseUrl + "gettourpackageall",
        postObject
      );
      const activity = response.data;

      return activity;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const tourSlice = createSlice({
  name: "allTours",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTourSlice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTourSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTourSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default tourSlice.reducer;
