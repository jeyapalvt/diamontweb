import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "./Api";

export const fetchAllAgency = createAsyncThunk(
  "allAgents/getagencylist",
  async (postData) => {
    try {
      const response = await axios.post(BaseUrl + "getagencylist", postData);
      const resData = response.data;
      let tempData = [];
      console.log("resData", resData);
      return resData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const allAgencyList = createSlice({
  name: "allAgents",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAgency.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllAgency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllAgency.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default allAgencyList.reducer;
