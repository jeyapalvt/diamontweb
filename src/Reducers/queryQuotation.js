import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queryQuotationObject: null,
};

const queryQuotation = createSlice({
  name: "quotationfulldata",
  initialState,
  reducers: {
    addqueryQuotation: (state, action) => {
      state.queryQuotationObject = action.payload;
    },
    updatequeryQuotation: (state, action) => {
      //state.hotelManual = action.payload;
      state.queryQuotationObject = action.payload;
    },
  },
});

export const { addqueryQuotation, updatequeryQuotation } =
  queryQuotation.actions;
export default queryQuotation.reducer;
//dispatch(updateHotelManual({ id: itemIdToUpdate, updatedData: newHotelData })); --> example update
