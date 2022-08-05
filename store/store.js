import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./JobsSlice";

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export default store;
