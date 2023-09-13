import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "./Api";

export const fetchCartInfoList = createAsyncThunk(
  "cartList/getCartInfoList",
  async (postObject) => {
    try {
      const response = await axios.post(
        BaseUrl + "getCartInfoList",
        postObject
      );
      const cartInfo = response.data;

      return cartInfo;
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

const cartInfoSlice = createSlice({
  name: "cartList",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartInfoList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartInfoList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCartInfoList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default cartInfoSlice.reducer;
