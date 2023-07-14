import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getState } from "reveal.js";

type state = {
  currentStatePresentation: ReturnType<typeof getState>;
};

const initialState: state = {
  currentStatePresentation: {
    indexf: 0,
    indexh: 0,
    paused: false,
    indexv: 0,
    overview: false,
  },
};

const slidesSlice = createSlice({
  name: "slides",
  reducers: {
    setInitialState(state, action: PayloadAction<state>) {
      state.currentStatePresentation = action.payload.currentStatePresentation;
      console.log(action.payload);
    },
  },
  initialState,
});

export const slidesReducer = slidesSlice.reducer;
export const { setInitialState } = slidesSlice.actions;
