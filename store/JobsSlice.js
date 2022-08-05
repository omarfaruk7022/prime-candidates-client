import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const res = await axios.get("http://localhost:5000/jobs");
  return res.data;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    isLoading: false,
    jobs: [],
  },

  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.jobs = action.payload;
    });
  },
});

export default jobsSlice.reducer;
