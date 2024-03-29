import React, { useEffect } from "react";
import swal from "sweetalert";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import Loader from "./Loader";

const PostJobs = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const handleBack = () => {
    window.history.back();
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    const jobTitle = e.target.title.value;
    const salaryRange = e.target.salaryRange.value;
    const jobLocation = e.target.location.value;
    const salaryType = e.target.salaryType.value;
    const jobCategory = e.target.jobCategory.value;
    const jobType = e.target.jobType.value;
    // const companyPicture = e.target.companyPicture.value;
    const jobDescription = e.target.jobDescription.value;
    const companyName = e.target.company.value;

    const job = {
      jobTitle,
      salaryRange,
      jobLocation,
      salaryType,
      jobCategory,
      jobType,
      // companyPicture,
      jobDescription,
      companyName,
    };
    // console.log(jobTitle, salaryRange, jobLocation, salaryType, jobCategory, jobType, companyPicture, jobDescription);

    if (
      jobTitle &&
      salaryRange &&
      jobLocation &&
      salaryType &&
      jobCategory &&
      jobType &&
      jobDescription && 
      companyName
      
    ) {
      fetch("https://stormy-beach-33232.herokuapp.com/jobs", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(job),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            swal("Yayy", "Job added successfully!", "success");
          }
        });

      e.target.reset();
    } else {
      swal("Oops", "Please fill all the fields", "error");
    }
  };

  useEffect(() => {
    // if there is no authenticated user, redirect to login page_

    if (!user) {
      router.push("/login");
    }
  });

  return (
    <form
      onSubmit={handlePostJob}
      className="container max-w-[1080px] mx-auto my-28"
    >
      <button
        onClick={handleBack}
        className="text-blue-400 text-bold text-xl ml-40 "
      >
        Back
      </button>
      <div className="lg:px-40 sm:px-5 lg:py-32 container mx-auto">
        <h1 className="text-blue-400 uppercase text-center mb-5 text-3xl font-bold">
          Job post
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 px-3 md:px-0">
          <div>
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <select name="salaryRange" className="select select-bordered">
                <option disabled selected>
                  Select Salary
                </option>
                <option>5000-9999</option>
                <option>10000-14999</option>
                <option>15000-19999</option>
                <option>20000-24999</option>
                <option>25000-29999</option>
                <option>Negotiable</option>
              </select>
            </div>
          </div>
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Salary Type</span>
              </label>
              <select name="salaryType" className="select select-bordered">
                <option disabled selected>
                  Select salary type
                </option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Job Catagory</span>
              </label>
              <select name="jobCategory" className="select select-bordered">
                <option disabled selected>
                  Select Catagory
                </option>
                <option>Electrician</option>
                <option>Software Engineer</option>
                <option>Web Developer</option>
                <option>QA Engineer</option>
              </select>
            </div>
          </div>
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <select name="location" className="select select-bordered">
                <option disabled selected>
                  Select location
                </option>
                <option>Barishal</option>
                <option>Chittagong</option>
                <option>Dhaka</option>
                <option>Khulna</option>
                <option>Mymensingh</option>
                <option>Rajshahi</option>
                <option>Rangpur</option>
                <option>Sylhet</option>
              </select>
            </div>
          </div>
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <select name="jobType" className="select select-bordered">
                <option disabled selected>
                  Select Type
                </option>
                <option>Full time </option>
                <option>part time</option>
                <option>Remote</option>
                <option>Internship</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="mt-4 px-3 md:px-0">
          {/* <div>
            <label  className="label">
              <span  className="label-text">Featured?</span>
            </label>
            <div  className="flex items-center">
              <input
                type="radio"
                name="radio-2"
                 className="radio radio-primary"
                checked
              />
              <span  className="mx-5">Featured</span>
              <input
                type="radio"
                name="radio-2"
                 className="radio radio-primary"
              />
              <span  className="mx-5">Unfeatured</span>
            </div>
          </div> */}

          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <textarea
                name="jobDescription"
                className="border-2 border-gray-300 rounded-lg py-1 px-2 outline-none"
                rows={5}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button type="submit" className="w-1/5 btn btn-outline btn-primary">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostJobs;
