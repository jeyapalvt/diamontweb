import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hoteleditManual: null,
  sightSeeingeditManual: null,
  transferManual: null,
  error: null,
};

const updateMainQuery = createSlice({
  name: "updateMQuery",
  initialState,
  reducers: {
    editHotelManual: (state, action) => {
      state.hoteleditManual = action.payload;
      state.error = null;
    },

    editSightSeeingManual: (state, action) => {
      state.sightSeeingeditManual = action.payload;
      state.error = null;
    },
    editTransferManual: (state, action) => {
      state.transferManual = action.payload;
      state.error = null;
    },
  },
});

export const { editHotelManual, editSightSeeingManual, editTransferManual } =
  updateMainQuery.actions;
export default updateMainQuery.reducer;
//dispatch(updateHotelManual({ id: itemIdToUpdate, updatedData: newHotelData })); --> example update
