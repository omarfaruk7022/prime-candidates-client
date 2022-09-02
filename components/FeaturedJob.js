import React, { useEffect, useState } from "react";
import Image from "next/image";
import manIcon from "../images/Img-icon.png";
import { FaToolbox } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import Router from "next/router";

const FeaturedJob = ({ finalData }) => {
  const [fJob, setFJob] = useState([]);

  useEffect(() => {
    fetch("https://stormy-beach-33232.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        setFJob(data);
      });
  }, []);

  const handleBrowseJob = (id) => {
    Router.push(`/job/${id}`);
  };

  return (
    <div className="pt-6 pb-12 my-28">
      <div className="container max-w-[1080px] mx-auto">
        <div>
          <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold my-8">
            Featured Job
          </h1>
        </div>
        {/* <div className="flex justify-between items-center mx-5 my-5">
          <select className="select select-primary   focus:outline-none rounded-none text-[8px] font-light sm:text-xs">
            <option className="text-xs md:text-sm" selected>
              All
            </option>
            <option className="text-xs md:text-sm">On-site</option>
            <option className="text-xs md:text-sm">Remote</option>
            <option className="text-xs md:text-sm">Hybrid</option>
            <option className="text-xs md:text-sm">Contact</option>
          </select>
          <div className="flex items-center gap-2">
            <h1 className="text-xs lg:text-sm">Show Per Page</h1>
            <select className="select select-primary     focus:outline-none rounded-none text-[8px] font-light sm:text-xs">
              <option className="text-sm" selected value={10}>
                10
              </option>
              <option className="text-sm" value={20}>
                20
              </option>
              <option className="text-sm" value={30}>
                30
              </option>
            </select>
          </div>
        </div> */}
        {finalData.length === 0 &&  (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5">
            {fJob &&
              fJob.map((job) => (
                <>
                  <div
                    key={job._id}
                    className="flex gap-5 items-center p-3 rounded-lg  bg-white shadow-lg  shadow-blue-50"
                  >
                    <div className="bg-base-100 rounded-md h-full flex items-center  shadow-lg  shadow-blue-50">
                      <Image src={manIcon} alt="" />
                    </div>
                    <div className="flex flex-col justify-items-start gap-2 w-full">
                      <div className="flex gap-2 items-center">
                        <h1 className="text-xs sm:text-sm lg:text-xl font-semibold">
                          {job.jobTitle}
                        </h1>
                        <p className="text-[10px] text-success">featured</p>
                      </div>
                      <div className="flex gap-2 justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <FaToolbox className="text-[8px] lg:text-[10px]" />
                          <p className="text-[8px] lg:text-[10px]">
                            {job.jobCategory}
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <HiLocationMarker className="text-[8px] lg:text-[10px]" />
                          <p className="text-[8px] lg:text-[10px]">
                            {job.jobLocation}
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <FaToolbox className="text-[8px] lg:text-[10px]" />
                          <p className="text-[8px] lg:text-[10px]">
                            {job.salaryRange} /{job.salaryType}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <h1 className="bg-info bg-opacity-20 px-3 py-1 text-[8px] lg:text-[10px] font-thin rounded-xl">
                            {job.jobType}
                          </h1>
                        </div>
                        <button
                          onClick={() => handleBrowseJob(job._id)}
                          className="btn btn-xs rounded-none btn-primary pt-[3px] text-[8px] lg:text-[10px] text-white font-normal hover:bg-black hover:text-white"
                        >
                          Browse Job
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        ) }
        {
        finalData && <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5">
        {finalData &&
          finalData.map((job) => (
            <>
              <div
                key={job._id}
                className="flex gap-5 items-center p-3 rounded-lg  bg-white shadow-lg  shadow-blue-50"
              >
                <div className="bg-base-100 rounded-md h-full flex items-center  shadow-lg  shadow-blue-50">
                  <Image src={manIcon} alt="" />
                </div>
                <div className="flex flex-col justify-items-start gap-2 w-full">
                  <div className="flex gap-2 items-center">
                    <h1 className="text-xs sm:text-sm lg:text-xl font-semibold">
                      {job.jobTitle}
                    </h1>
                    <p className="text-[10px] text-success">featured</p>
                  </div>
                  <div className="flex gap-2 justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <FaToolbox className="text-[8px] lg:text-[10px]" />
                      <p className="text-[8px] lg:text-[10px]">
                        {job.jobCategory}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <HiLocationMarker className="text-[8px] lg:text-[10px]" />
                      <p className="text-[8px] lg:text-[10px]">
                        {job.jobLocation}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaToolbox className="text-[8px] lg:text-[10px]" />
                      <p className="text-[8px] lg:text-[10px]">
                        {job.salaryRange} /{job.salaryType}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <h1 className="bg-info bg-opacity-20 px-3 py-1 text-[8px] lg:text-[10px] font-thin rounded-xl">
                        {job.jobType}
                      </h1>
                    </div>
                    <button
                      onClick={() => handleBrowseJob(job._id)}
                      className="btn btn-xs rounded-none btn-primary pt-[3px] text-[8px] lg:text-[10px] text-white font-normal hover:bg-black hover:text-white"
                    >
                      Browse Job
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
       }
        {/* <div className="flex mx-5 my-5 gap-5 rounded-none">
          <button className="btn btn-sm btn-primary btn-outline rounded-sm">
            1
          </button>
          <button className="btn btn-sm btn-primary btn-outline rounded-sm">
            2
          </button>
          <button className="btn btn-sm btn-primary btn-outline rounded-sm">
            3
          </button>
          <button className="btn btn-sm btn-primary btn-outline rounded-sm">
            4
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedJob;
