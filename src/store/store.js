import { configureStore } from "@reduxjs/toolkit";
import { audioplayerReducer } from "./reducers/reducer";

export const store = configureStore({
  reducer: {
    audioplayer: audioplayerReducer,
  },
})