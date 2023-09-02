import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "./Api";

export const fetchAllQueryList = createAsyncThunk(
  "allCustomQuerySlice/listTourQuery",
  async (postData) => {
    try {
      const response = await axios.post(BaseUrl + "listTourQuery", postData);
      const resData = response.data;
      let tempData = [];
      console.log(`${JSON.stringify(resData, null, 2)}`);
      return resData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const customQuerySlice = createSlice({
  name: "allCustomQuerySlice",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllQueryList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllQueryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllQueryList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default customQuerySlice.reducer;
