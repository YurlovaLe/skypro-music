import { configureStore } from "@reduxjs/toolkit";
import { audioplayerReducer } from "./reducers/reducer";
// import { getAllTracks } from "../api";

export const store = configureStore({
  reducer: {
    audioplayer: audioplayerReducer,
  },
})