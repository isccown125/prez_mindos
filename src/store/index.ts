import { configureStore } from "@reduxjs/toolkit";
import { slidesReducer } from "./slices/slides-slice.ts";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cutscenesReducer } from "./slices/cutscenes-slice.ts";

export const store = configureStore({
  reducer: {
    slides: slidesReducer,
    cutscenes: cutscenesReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export * from "./slices/slides-slice.ts";
