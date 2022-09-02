import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import jobHiring from "../images/job-hiring.svg";
import { BsArrowDownShort } from "react-icons/bs";
import FeaturedJob from "./FeaturedJob";

const Banner = () => {
  const timeRef = useRef(null);
  const locationRef = useRef(null);
  const [findData, setFindData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const handleFindJob = () => {
    const time = timeRef.current.value;
    const location = locationRef.current.value;
    const filterLocation = findData.filter(
      (item) => item.jobLocation === String(location)
    );
    const filterTime = filterLocation.filter(
      (item) => item.jobType === String(time)
    );
    setFinalData(filterTime);
    console.log(filterTime);
  };
  useEffect(() => {
    fetch("https://stormy-beach-33232.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        setFindData(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <section className="relative bg-white">
        <img
          className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="https://i.ibb.co/FDhCrpp/banner1.jpg"
          alt="Banner"
        />

        <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl text-center sm:text-left">
            <div>
              <h1 className="text-2xl lg:text-4xl text-center sm:text-left uppercase font-extrabold text-primary md:mb-3 mt-16 md:mt-0">
                Find Your <span className="text-secondary">Perfect</span>
              </h1>
              <h1 className="text-2xl lg:text-4xl text-center sm:text-left text-primary uppercase font-extrabold md:mb-3">
                <span className="text-secondary">Job</span> Match
              </h1>
            </div>
            <p className="text-sm lg:text-xl text-center sm:text-left font-thin my-3">
              Find jobs, hire employer & career opportunities
            </p>

            <select
              ref={timeRef}
              className="select select-primary bg-transparent  focus:outline-none h-6 border-none rounded-none text-[8px] font-light md:text-xs"
            >
              <option className="text-xs md:text-sm">Full time</option>
              <option className="text-xs md:text-sm">Part-Time</option>
              <option className="text-xs md:text-sm">Remote</option>
              <option className="text-xs md:text-sm">Internship</option>
            </select>
            <select
              ref={locationRef}
              className="select select-primary bg-transparent  focus:outline-none h-8 border-none rounded-none text-[8px] font-light md:text-xs"
            >
              <option className="text-xs md:text-sm" selected>
                Dhaka
              </option>
              <option className="text-xs md:text-sm">Chittagong</option>
              <option className="text-xs md:text-sm">Khulna</option>
              <option className="text-xs md:text-sm">Cumilla</option>
            </select>
            <button
              onClick={handleFindJob}
              className="btn-sm btn-active btn-primary text-xs md:text-sm text-white hover:text-secondary rounded-md"
            >
              Find job
            </button>
          </div>
        </div>
      </section>
      <FeaturedJob finalData={finalData}/>
    </>
  );
};

export default Banner;
