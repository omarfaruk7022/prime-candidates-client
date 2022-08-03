import { createSlice } from "@reduxjs/toolkit";
import manIcon from "../images/Img-icon.png";

const initialFeaturedJobs = {
  jobs: [
    {
      id: 1,
      title: "Junior Graphics Designer",
      img: manIcon,
      jobName: "design, development",
      location: "Dhaka",
      salary: "15000-25000",
      salaryType: "month",
      jobType: ["Full-Time", "Intern"],
      featured: "Featured",
    },
    {
      id: 2,
      title: "Junior Graphics Designer",
      img: manIcon,
      jobName: "design, development",
      location: "Dhaka",
      salary: "15000-25000",
      salaryType: "month",
      jobType: ["Full-Time", "Intern"],
      featured: "Featured",
    },
    {
      id: 3,
      title: "Junior Graphics Designer",
      img: manIcon,
      jobName: "design, development",
      location: "Dhaka",
      salary: "15000-25000",
      salaryType: "month",
      jobType: ["Full-Time", "Intern"],
      featured: "Featured",
    },
    {
      id: 4,
      title: "Junior Graphics Designer",
      img: manIcon,
      jobName: "design, development",
      location: "Dhaka",
      salary: "15000-25000",
      salaryType: "month",
      jobType: ["Full-Time", "Intern"],
      featured: "Featured",
    },
    {
      id: 5,
      title: "Junior Graphics Designer",
      img: manIcon,
      jobName: "design, development",
      location: "Dhaka",
      salary: "15000-25000",
      salaryType: "month",
      jobType: ["Full-Time", "Intern"],
      featured: "Featured",
    },
    {
      id: 6,
      title: "Junior Graphics Designer",
      img: manIcon,
      jobName: "design, development",
      location: "Dhaka",
      salary: "15000-25000",
      salaryType: "month",
      jobType: ["Full-Time", "Intern"],
      featured: "Featured",
    },
    {
      id: 7,
      title: "Junior Graphics Designer",
      img: manIcon,
      jobName: "design, development",
      location: "Dhaka",
      salary: "15000-25000",
      salaryType: "month",
      jobType: ["Full-Time", "Intern"],
      featured: "Featured",
    },
    {
      id: 8,
      title: "Junior Graphics Designer",
      img: manIcon,
      jobName: "design, development",
      location: "Dhaka",
      salary: "15000-25000",
      salaryType: "month",
      jobType: ["Full-Time", "Intern"],
      featured: "Featured",
    },
  ],
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialFeaturedJobs,
  reducers: {
    showJobs: (state) => state,
  },
});

export const { showJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
