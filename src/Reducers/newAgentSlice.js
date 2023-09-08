import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agentData: [],
};

const newAgentSlice = createSlice({
  name: "agentDetail",
  initialState,
  reducers: {
    addAgent: (state, action) => {
      state.agentData.push(action.payload);
    },
    updateAgent: (state, action) => {
      //state.hotelManual = action.payload;
      state.agentData = [...action.payload];
    },
  },
});

export const { addDestination, updatedestination } = newAgentSlice.actions;
export default newAgentSlice.reducer;
//dispatch(updateHotelManual({ id: itemIdToUpdate, updatedData: newHotelData })); --> example update
