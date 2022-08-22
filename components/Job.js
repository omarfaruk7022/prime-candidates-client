import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import Router from "next/router";

const Job = ({ job }) => {
  const { _id, jobTitle, jobLocation, jobCategory, salaryRange, jobType } = job;

  const handleJobDetails = (id) => {
    Router.push(`/job/${id}`);
  };
  return (
    <div className="card w-2/4 mx-auto my-5 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{jobTitle}</h2>
        <p className="flex items-center gap-1">
          <HiLocationMarker></HiLocationMarker>
          {jobLocation}
        </p>
        <div className="flex ">
          <p>
            <span className="text-primary font-semibold">Category:</span>{" "}
            {jobCategory}
          </p>
          <p>
            <span className="text-primary font-semibold">Job Type:</span>{" "}
            {jobType}
          </p>
          <p>
            <span className="text-primary font-semibold">Salary:</span>{" "}
            {salaryRange}
          </p>
        </div>
        <div className="card-actions justify-end text-secondary cursor-pointer">
          <p
            onClick={() => handleJobDetails(_id)}
            className="flex items-center gap-1 justify-end"
          >
            View Details{" "}
            <IoIosArrowDropright className="text-xl"></IoIosArrowDropright>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Job;
