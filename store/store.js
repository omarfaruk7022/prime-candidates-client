import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./FeaturedJobSlice";

const store = configureStore({
  reducer: {
    jobsReducer: jobsReducer,
  },
});

export default store;
