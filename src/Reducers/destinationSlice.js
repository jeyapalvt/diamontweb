import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinationList: [],
};

const destinationSlice = createSlice({
  name: "destinationQuery",
  initialState,
  reducers: {
    addDestination: (state, action) => {
      state.destinationList.push(action.payload);
    },
    updatedestination: (state, action) => {
      //state.hotelManual = action.payload;
      state.destinationList = [...action.payload];
    },
  },
});

export const { addDestination, updatedestination } = destinationSlice.actions;
export default destinationSlice.reducer;
//dispatch(updateHotelManual({ id: itemIdToUpdate, updatedData: newHotelData })); --> example update
