import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  activitySlice,
  authSlice,
  tourSlice,
  cartinfoSlice,
} from "../Reducers";
import { reducer as reduxFormReducer } from "redux-form";
const reducer = combineReducers({
  form: reduxFormReducer,
  allactivity: activitySlice,
  authentication: authSlice,
  allTours: tourSlice,
  cartList: cartinfoSlice,
});
const store = configureStore({
  reducer,
});
export { store };
