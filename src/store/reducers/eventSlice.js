import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const eventSlice = createSlice({
  name: "eventSlice",
  initialState: {
    eventList: [],
    eventData: {},
  },
  reducers: {
    getEventList: (state, action) => {
      state.eventList = action.payload;
      return state;
    },
    getEventData: (state, action) => {
      state.eventData = action.payload;
      return state;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
});

export default eventSlice.reducer;
export const { getEventList, getEventData, setErrorMsg } = eventSlice.actions;

export const fetchEventList = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/events");
    dispatch(getEventList(data));
  } catch (error) {
    console.log("FETCH EVENT LIST ERROR", error);
  }
};

export const fetchEventData = (eventId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/events/${eventId}`);
    dispatch(getEventData(data));
  } catch (error) {
    console.log("FETCH EVENT DATA ERROR", error);
  }
};
