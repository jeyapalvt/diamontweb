import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addHotelManualState: false,
  addHotelstate: false,
  addmanualSightSheeingState: false,
  addsightSheeingState: false,
  addmanualTransferState: false,
  addtransferState: false,
  addmealState: false,
  addflightState: false,
  date: "",
};

const modelStateReducers = createSlice({
  name: "allModelState",
  initialState,
  reducers: {
    addHotelManualModel: (state, action) => {
      if (action.payload.date !== "") {
        const nextDay = new Date(action.payload.date);
        nextDay.setDate(nextDay.getDate() + 1);
        state.date = nextDay.toISOString().slice(0, 10);
      }
      state.addHotelManualState = action.payload.addHotelManualState;
    },
    addHotelModel: (state, action) => {
      if (action.payload.date !== "") {
        const nextDay = new Date(action.payload.date);
        nextDay.setDate(nextDay.getDate() + 1);
        state.date = nextDay.toISOString().slice(0, 10);
      }
      state.addHotelstate = action.payload.addHotelstate;
    },

    addmanualSightSheeingModel: (state, action) => {
      if (action.payload.date !== "") {
        const nextDay = new Date(action.payload.date);
        nextDay.setDate(nextDay.getDate() + 1);
        state.date = nextDay.toISOString().slice(0, 10);
      }

      state.addmanualSightSheeingState =
        action.payload.addmanualSightSheeingState;
    },
    addsightSheeingModel: (state, action) => {
      if (action.payload.date !== "") {
        const nextDay = new Date(action.payload.date);
        nextDay.setDate(nextDay.getDate() + 1);
        state.date = nextDay.toISOString().slice(0, 10);
      }
      state.addsightSheeingState = action.payload.addsightSheeingState;
    },
    addmanualTransferModel: (state, action) => {
      if (action.payload.date !== "") {
        const nextDay = new Date(action.payload.date);
        nextDay.setDate(nextDay.getDate() + 1);
        state.date = nextDay.toISOString().slice(0, 10);
      }
      state.addmanualTransferState = action.payload.addmanualTransferState;
    },
    addtransferModel: (state, action) => {
      if (action.payload.date !== "") {
        const nextDay = new Date(action.payload.date);
        nextDay.setDate(nextDay.getDate() + 1);
        state.date = nextDay.toISOString().slice(0, 10);
      }
      state.addtransferState = action.payload.addtransferState;
    },
    addmealModel: (state, action) => {
      if (action.payload.date !== "") {
        const nextDay = new Date(action.payload.date);
        nextDay.setDate(nextDay.getDate() + 1);
        state.date = nextDay.toISOString().slice(0, 10);
      }
      state.addmealState = action.payload.addmealState;
    },
    addflightModel: (state, action) => {
      if (action.payload.date !== "") {
        const nextDay = new Date(action.payload.date);
        nextDay.setDate(nextDay.getDate() + 1);
        state.date = nextDay.toISOString().slice(0, 10);
      }
      state.addflightState = action.payload.addflightState;
    },
  },
});

export const {
  addHotelManualModel,
  addHotelModel,
  addmanualSightSheeingModel,
  addsightSheeingModel,
  addmanualTransferModel,
  addtransferModel,
  addmealModel,
  addflightModel,
} = modelStateReducers.actions;
export default modelStateReducers.reducer;
//dispatch(updateHotelManual({ id: itemIdToUpdate, updatedData: newHotelData })); --> example update
