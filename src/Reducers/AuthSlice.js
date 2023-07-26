import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  data: Cookies.get("dAuthTokens"),
  isLoggedIn: Cookies.get("dAuthTokens") ? true : false,
  processState: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,

  reducers: {
    login: (state, action) => {
      // replace this with your actual login logic

      const user = { name: action.payload.name };
      const authToken = "admin"; // replace this with your actual authentication token
      Cookies.set("dAuthTokens", authToken, { expires: 7 }); // set the cookie with a 7-day expiration
      state.data = user;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      Cookies.remove("dAuthTokens"); // remove the cookie
      state.data = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
