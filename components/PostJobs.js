import React from "react";
import { FiCamera } from "react-icons/fi";
import swal from "sweetalert";

const PostJobs = () => {
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
    const companyPicture = e.target.companyPicture.value;
    const jobDescription = e.target.jobDescription.value;

    const job = {
      jobTitle,
      salaryRange,
      jobLocation,
      salaryType,
      jobCategory,
      jobType,
      companyPicture,
      jobDescription,
    };
    // console.log(jobTitle, salaryRange, jobLocation, salaryType, jobCategory, jobType, companyPicture, jobDescription);

    fetch("http://localhost:5000/jobs", {
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
  };

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
<<<<<<< HEAD
              required

=======
>>>>>>> a5333260d90c3707cb84485c5ada42e535abcd9e
            />
          </div>
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <select name="salaryRange" className="select select-bordered" required>
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
              <select name="salaryType" className="select select-bordered" required>
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
              <select name="jobCategory" className="select select-bordered" required>
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
              <select name="location" className="select select-bordered" required>
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
              <select name="jobType" className="select select-bordered" required>
                <option disabled selected>
                  Select Type
                </option>
                <option>On-site</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Company Picture</span>
            </label>
<<<<<<< HEAD
            <input name="companyPicture"
              type="text"
              placeholder="Put image URL here..."
              className="input input-bordered w-full"
              required
            />
            <FiCamera className=" mt-[-33px] ml-[280px] text-xl bg-gray-400 cursor-pointer" />
=======
            <fieldset className="w-full space-y-1 dark:text-gray-100">
              <label htmlFor="files" className="block text-sm font-medium">
                Attachments
              </label>
              <div className="flex">
                <input
                  type="file"
                  name="files"
                  id="files"
                  className="px-8 py-3 border-2 border-dashed rounded-md  "
                />
              </div>
            </fieldset>
            
>>>>>>> a5333260d90c3707cb84485c5ada42e535abcd9e
          </div>
        </div>
        <div className="mt-4 px-3 md:px-0">
          {/* <div>
            <label className="label">
              <span className="label-text">Featured?</span>
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                checked
              />
              <span className="mx-5">Featured</span>
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
              />
              <span className="mx-5">Unfeatured</span>
            </div>
          </div> */}

          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
<<<<<<< HEAD
              <textarea name="jobDescription" className="border-2 border-gray-300 rounded-lg py-1 px-2 outline-none" rows={5} required></textarea>
=======
              <textarea
                name="jobDescription"
                className="border-2 border-gray-300 rounded-lg py-1 px-2 outline-none"
                rows={5}
              ></textarea>
>>>>>>> a5333260d90c3707cb84485c5ada42e535abcd9e
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
