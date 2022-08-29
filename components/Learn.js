import React from "react";

const Learn = () => {
  return (
    <div className="px-28 my-28">
      <div className="lg:flex justify-between">
        <div className="">
          <img
          className=""
            src="https://i.ibb.co/DDXwWzn/Milestones-of-business-projects.gif"
            alt=""
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl text-primary mt-28">
            Grow your learning skill <br />{" "}
            <span className="text-secondary">for your dream</span>
          </h1>
          <a
            className="relative inline-flex items-center px-8 py-3 overflow-hidden mt-5 text-white bg-secondary rounded group active:bg-secondary focus:outline-none focus:ring"
            href="/courses"
          >
            <span className="absolute right-0 transition-transform translate-x-full  group-hover:-translate-x-4">
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

            <span className="text-sm font-medium transition-all group-hover:mr-4 ">
              Courses
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Learn;
