import React from "react";
import gifFile from "../images//Portfolio (1).gif";

const ResumeHome = () => {
  return (
    <div className="px-28 my-28">
      <div className="lg:flex justify-between">
        <div className="text-center">
        <h1 className="text-4xl text-primary mt-28">
          We have resume builder <br /> <span className="text-secondary">for your future job</span>
        </h1>
        <a
          className="relative inline-flex items-center px-8 py-3 overflow-hidden mt-5  text-white bg-secondary rounded group active:bg-secondary focus:outline-none focus:ring"
          href="/resume"
        >
          <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:mr-4">
            Go to resume
          </span>
        </a>
        </div>
        <div>
        <img src="https://i.ibb.co/8DRtbn8/Profile-data.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResumeHome;
