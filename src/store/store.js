import { configureStore } from "@reduxjs/toolkit";
import { audioplayerReducer } from "./reducers/reducer";
import { catalogApi } from "../services/catalog";

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    audioplayer: audioplayerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware),
});
