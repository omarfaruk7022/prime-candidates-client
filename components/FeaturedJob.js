import React from "react";
import Image from "next/image";
import manIcon from "../images/Img-icon.png";
import { FaToolbox } from "react-icons/fa";
import { useSelector } from "react-redux";

const FeaturedJob = () => {
  const jobs = useSelector((state) => state.jobsReducer.jobs);
  console.log(jobs);
  return (
    <div className="pt-6 pb-12">
      <div className="container max-w-[1080px] mx-auto">
        <div>
          <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold my-8">
            Featured Job
          </h1>
        </div>
        <div className="flex justify-between items-center mx-5 my-5">
          <select className="select select-primary   focus:outline-none rounded-none text-[8px] font-light sm:text-xs">
            <option className="text-xs md:text-sm" selected>
              Full-Time
            </option>
            <option className="text-xs md:text-sm">Part-Time</option>
            <option className="text-xs md:text-sm">Contact</option>
            <option className="text-xs md:text-sm">Hourly</option>
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5">
          {jobs.map((job) => (
            <>
              <div className="flex gap-5 items-center p-3 rounded-lg  bg-white shadow-lg  shadow-blue-50">
                <div className="bg-base-100 rounded-md h-full flex items-center  shadow-lg  shadow-blue-50">
                  <Image src={job.img} alt="" />
                </div>
                <div className="flex flex-col justify-items-start gap-2 w-full">
                  <div className="flex gap-2 items-center">
                    <h1 className="text-xs sm:text-sm lg:text-xl font-semibold">
                      {job.title}
                    </h1>
                    <p className="text-[10px] text-success">{job.featured}</p>
                  </div>
                  <div className="flex gap-2 justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <FaToolbox className="text-[8px] lg:text-[10px]" />
                      <p className="text-[8px] lg:text-[10px]">{job.jobName}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaToolbox className="text-[8px] lg:text-[10px]" />
                      <p className="text-[8px] lg:text-[10px]">
                        {job.location}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaToolbox className="text-[8px] lg:text-[10px]" />
                      <p className="text-[8px] lg:text-[10px]">
                        {job.salary} /{job.salaryType}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      {job.jobType.map((jt) => (
                        <>
                          <h1 className="bg-info bg-opacity-20 px-3 py-1 text-[8px] lg:text-[10px] font-thin rounded-xl">
                            {jt}
                          </h1>
                        </>
                      ))}
                    </div>
                    <button className="btn btn-xs rounded-none btn-primary pt-[3px] text-[8px] lg:text-[10px] text-white font-normal">
                      Browse Job
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="flex mx-5 my-5 gap-5 rounded-none">
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
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
