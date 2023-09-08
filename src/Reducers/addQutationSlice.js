import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
};

const addQutationSlice = createSlice({
  name: "addQutationdata",
  initialState,
  reducers: {
    addQutationState: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },

    editaddQutationState: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
  },
});

export const { addQutationState, editaddQutationState } =
  addQutationSlice.actions;
export default addQutationSlice.reducer;
//dispatch(updateHotelManual({ id: itemIdToUpdate, updatedData: newHotelData })); --> example update
