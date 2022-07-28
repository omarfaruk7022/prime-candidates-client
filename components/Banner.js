import React from "react";
import Navber from "./Navber";
import Image from "next/image";
import man from "../images/we are hiring.png";
import { BsArrowDownShort } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="lg:my-12">
      <div className="container max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-5">
            <h1 className="text-2xl md:text-4xl text-center md:text-left uppercase font-extrabold text-primary md:mb-3 mt-16 md:mt-0">
              Find Your <span className="text-secondary">Perfect</span>
            </h1>
            <h1 className="text-2xl md:text-4xl text-center md:text-left text-primary uppercase font-extrabold md:mb-3">
              <span className="text-secondary">Job</span> Match
            </h1>
            <p className="text-sm md:text-xl text-center md:text-left font-thin my-3">
              Find jobs, hire employer & career opportunities
            </p>
            <div className="navber bg-base-100 rounded-lg shadow-lg p-3">
              <div className="">
                <ul className="menu menu-horizontal flex justify-between items-center">
                  <li>
                    <div className="flex items-center rounded-xl">
                      Categories
                      <BsArrowDownShort />
                    </div>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a className="rounded-xl">Full-Time</a>
                      </li>

                      <li>
                        <a className="rounded-xl">Part-Time</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="flex items-center rounded-xl">
                      Job-type
                      <BsArrowDownShort />
                    </div>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a className="rounded-xl">Full-Time</a>
                      </li>

                      <li>
                        <a className="rounded-xl">Part-Time</a>
                      </li>
                    </ul>
                  </li>
                  <li>

                    <button className="btn btn-active btn-primary text-white hover:text-secondary rounded-xl">Find job</button>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-xl text-center md:text-left font-thin my-3">
              Popular search: frontend developer, web, backend developer &
              UI/UX.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image src={man} width={400} height={400} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
