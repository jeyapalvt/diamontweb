import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotelManual: [],
  sightSeeingManual: [],
  sightSeeingFromList: [],
  transferManul: [],
  error: null,
};

const mainQuerySlice = createSlice({
  name: "mainQuery",
  initialState,
  reducers: {
    addHotelManual: (state, action) => {
      state.hotelManual.push(action.payload);
      state.error = null;
    },
    updateManualHotelRecord: (state, action) => {
      //state.hotelManual = action.payload;
      state.hotelManual = [...action.payload];
    },
    addSightSeeingManual: (state, action) => {
      state.sightSeeingManual.push(action.payload);
      state.error = null;
    },
    updateSightSeeingManual: (state, action) => {
      state.sightSeeingManual = [...action.payload];
    },
    addsightSeeingFromList: (state, action) => {
      state.sightSeeingFromList.push(action.payload);
      state.error = null;
    },
    updatesightSeeingFromList: (state, action) => {
      state.sightSeeingFromList = [...action.payload];
    },
    addtransferManual: (state, action) => {
      state.transferManul.push(action.payload);
      state.error = null;
    },
    updatetransferManual: (state, action) => {
      state.transferManul = [...action.payload];
    },
  },
});

export const {
  addHotelManual,
  updateManualHotelRecord,
  addSightSeeingManual,
  updateSightSeeingManual,
  addsightSeeingFromList,
  updatesightSeeingFromList,
  addtransferManual,
  updatetransferManual,
} = mainQuerySlice.actions;
export default mainQuerySlice.reducer;
//dispatch(updateHotelManual({ id: itemIdToUpdate, updatedData: newHotelData })); --> example update
