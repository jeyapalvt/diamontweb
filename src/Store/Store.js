import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  activitySlice,
  authSlice,
  tourSlice,
  cartinfoSlice,
  allAgencySlice,
  customQuerySlice,
  mainQuerySlice,
  modelStateReducers,
  updateMainQuery,
  destinationSlice,
} from "../Reducers";
import { reducer as reduxFormReducer } from "redux-form";
const reducer = combineReducers({
  form: reduxFormReducer,
  allactivity: activitySlice,
  authentication: authSlice,
  allTours: tourSlice,
  cartList: cartinfoSlice,
  allAgents: allAgencySlice,
  allCustomQuerySlice: customQuerySlice,
  mainQuery: mainQuerySlice,
  allModelState: modelStateReducers,
  updateMQuery: updateMainQuery,
  destinationQuery: destinationSlice,
});
const store = configureStore({
  reducer,
});
export { store };
