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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5">
          {jobs.map((job) => (
            <>
              <div className="flex gap-5 items-center p-3 rounded-lg border-base-200 border-[1px]">
                <div className="bg-base-200 rounded-md h-full flex items-center">
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
                      <FaToolbox className="text-[8px]" />
                      <p className="text-[8px]">{job.jobName}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaToolbox className="text-[8px]" />
                      <p className="text-[8px]">{job.location}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaToolbox className="text-[8px]" />
                      <p className="text-[8px]">
                        {job.salary} /{job.salaryType}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    {job.jobType.map((jt) => (
                      <>
                        <h1 className="bg-info bg-opacity-20 px-3 py-1 text-[8px] font-thin rounded-xl">
                          {jt}
                        </h1>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
