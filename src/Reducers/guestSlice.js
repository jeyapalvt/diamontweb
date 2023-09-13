import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guestList: [],
};

const guestSlice = createSlice({
  name: "guestQuery",
  initialState,
  reducers: {
    addguestList: (state, action) => {
      state.guestList.push(action.payload);
    },
    updateguestList: (state, action) => {
      //state.hotelManual = action.payload;
      state.guestList = [...action.payload];
    },
  },
});

export const { addguestList, updateguestList } = guestSlice.actions;
export default guestSlice.reducer;
//dispatch(updateHotelManual({ id: itemIdToUpdate, updatedData: newHotelData })); --> example update
