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
            <div className="navber bg-white rounded-lg shadow-lg shadow-blue-50 p-2">
              <div className="">
                <div className=" flex justify-between items-center">
                  <select className="select select-primary bg-transparent  focus:outline-none h-6 border-none rounded-none text-[8px] font-light md:text-xs">
                    <option className="text-xs md:text-sm" selected>
                      Full-Time
                    </option>
                    <option className="text-xs md:text-sm">Part-Time</option>
                    <option className="text-xs md:text-sm">Contact</option>
                    <option className="text-xs md:text-sm">Hourly</option>
                  </select>
                  <select className="select select-primary bg-transparent  focus:outline-none h-8 border-none rounded-none text-[8px] font-light md:text-xs">
                    <option className="text-xs md:text-sm" selected>
                      Dhaka
                    </option>
                    <option className="text-xs md:text-sm">Chottogram</option>
                    <option className="text-xs md:text-sm">Khulna</option>
                    <option className="text-xs md:text-sm">Cumilla</option>
                  </select>

                  <div>
                    <button className="btn-sm btn-active btn-primary text-xs md:text-sm text-white hover:text-secondary rounded-md">
                      Find job
                    </button>
                  </div>
                </div>
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
