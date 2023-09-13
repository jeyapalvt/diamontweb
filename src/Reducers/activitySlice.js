import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "./Api";

export const fetchActivityList = createAsyncThunk(
  "activity/getattractionall",
  async (postObject) => {
    try {
      const response = await axios.post(
        BaseUrl + "getattractionall",
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

const getStatus = (value) => {
  if (value === true) {
    return "Active";
  } else {
    return "InActive";
  }
};

const activitySlice = createSlice({
  name: "allactivity",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivityList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchActivityList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchActivityList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default activitySlice.reducer;
