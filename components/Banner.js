import React from "react";
import Navber from "./Navber";
import Image from "next/image";
import jobHiring from "../images/job-hiring.svg";
import { BsArrowDownShort } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="lg:mt-12">
      <div className="container max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col justify-center p-5">
            <h1 className="text-2xl lg:text-4xl text-center sm:text-left uppercase font-extrabold text-primary md:mb-3 mt-16 md:mt-0">
              Find Your <span className="text-secondary">Perfect</span>
            </h1>
            <h1 className="text-2xl lg:text-4xl text-center sm:text-left text-primary uppercase font-extrabold md:mb-3">
              <span className="text-secondary">Job</span> Match
            </h1>
            <p className="text-sm lg:text-xl text-center sm:text-left font-thin my-3">
              Find jobs, hire employer & career opportunities
            </p>
            <div className="navber bg-base-100 rounded-lg shadow-lg p-2">
              <div className="">
                <ul className="menu menu-horizontal flex justify-between items-center">
                  <li>
                    <div className="flex items-center rounded-md">
                      <h1 className="text-xs md:text-sm">Categories</h1>
                      <BsArrowDownShort className="hidden md:block" />
                    </div>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a className="rounded-md">Full-Time</a>
                      </li>

                      <li>
                        <a className="rounded-md">Part-Time</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="flex items-center rounded-md">
                      <h1 className="text-xs md:text-sm">Job-type</h1>
                      <BsArrowDownShort className="hidden md:block" />
                    </div>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a className="rounded-md">Full-Time</a>
                      </li>

                      <li>
                        <a className="rounded-md">Part-Time</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button className="btn-sm btn-active btn-primary text-xs md:text-sm text-white hover:text-secondary rounded-md">
                      Find job
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm lg:text-xl text-center sm:text-left font-thin my-3">
              Popular search: frontend developer, web, backend developer &
              UI/UX.
            </p>
          </div>

          <div className="hidden sm:flex justify-center md:justify-end">
            <Image src={jobHiring} width={600} height={500} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
